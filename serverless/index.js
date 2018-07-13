'use strict';
// Create the frontend

const next = require('next');
const app = next({ dev: false });
const handle = app.getRequestHandler();
const url = require('url');
const pathMatch = require('path-match');
const route = pathMatch();
const match = route('/:redirect');

// PostgreSQL
const promise = require('bluebird');
const options = {
  // Use bluebird as the promise library
  promiseLib: promise,
};

const pgp = require('pg-promise')(options);
// Set the configuration options for Google Cloud SQL
const cn = {
  host: '/cloudsql/ocean-wise-186900:us-west1:url-shortener',
  port: 5432,
  database: 'shortener',
  user: 'postgres',
  password: 'OuaBGg9C1vK90pz2',
};

// Open database connection
const db = pgp(cn);

const slasher = (handler) => (req, res) => {
  if (req.url === '') {
    req.url = '/'
  }

  return handler(req, res);
}

exports.renderFrontend = slasher((req, res) => {
  return app.prepare()
    .then(() => {
      const parsedUrl = url.parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (/\/.+/.test(pathname)) {
        try {
          db.any(`UPDATE redirects SET clicks = clicks + 1 WHERE short='${/[^/]*$/.exec(pathname)[0]}' RETURNING long`)
            .then((results) => {
              res.writeHead(302, {
                'Location': results[0].long
              });
              res.end();

            });
        } catch (err) {
          res.status(200).send({query, pathname});
        }
      } else {
        handle(req, res, parsedUrl);
      }
    })
    .catch((ex) => {
      console.error(ex.stack)
      process.exit(1)
    });
});

// Handle the api calls

/*
 * doRedirect
 * This function takes the short URL
 * value, handles incrementing the
 * analytic values and returns
 * the long URL for redirection
 */
exports.doRedirect = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }
  try {
    db.any(`UPDATE redirects SET clicks = clicks + 1 WHERE short='${req.body.url}' RETURNING long`)
      .then((results) => {
        res.status(200).send(results[0].long);
      });
  } catch (err) {
    res.status(200).send(err);
  }
};

/*
 * createRedirect
 * This function creates a database
 * entry for the given long URL.
 * If no short URL is given it will
 * generate a random one
 */
exports.createRedirect = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }
  validate(req.body.long)
    .then(() => {
      return getURL(req.body.short);
    })
    .then((short) => {
      try {
        db.none(`INSERT INTO redirects (long, short, clicks) VALUES ('${req.body.long}', '${short}', 0)`)
          .then(() => {
            res.status(200).send(`Created new redirect with URL https://oceanwi.se/${short}`);
          });
      } catch (err) {
        res.status(500).send('Error creating redirect');
      }
    });
}

/*
 * validate
 * This function ensures that the
 * given long URL is valid
 */
function validate(long) {
  if (long === '' || long === undefined) {
    return Promise.reject({
      statusCode: 400,
      message: 'Long URL is required'
    });
  }
  let parsedUrl = url.parse(long);
  if (parsedUrl.protocol === null || parsedUrl.host === null) {
    return Promise.reject({
      statusCode: 400,
      message: 'URL is invalid'
    });
  }
  return Promise.resolve(long);
}

/*
 * getURL
 * This function generates a valid
 * short URL and ensures it is unused
 */
function getURL(short = '') {
  if (short === '') {
    return new Promise((res, rej) => {
      let path = generateURL();
      isPathFree(path)
        .then((isFree) => {
          return isFree ? res(path) : res(getURL());
        });
    });
  } else {
    return new Promise((res, rej) => {
      return res(short);
    });
  }
}

/*
 * isPathFree
 * This function checks to see if there is
 * a database entry with the given short URL
 */
function isPathFree(path) {
  return new Promise((res, rej) => {
    try {
      db.any(`SELECT ID FROM redirects WHERE short='${path}'`)
        .then((result) => {
          if (result.length > 0) {
            return rej(false);
          } else {
            return res(true);
          }
        });
    } catch (err) {
      return res(true);
    }
  });
}

/*
 * generateURL
 * This function generates a random
 * short URL for a new link
 */
function generateURL(path = '') {
  let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let position = Math.floor(Math.random() * characters.length);
  let character = characters.charAt(position);

  if (path.length === 7) {
    return path;
  }

  return generateURL(path + character);
}

/*
 * removeRedirect
 * This function removes a redirect
 * with the given id number
 */
exports.removeRedirect = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }
  if (req.body.id === undefined) res.status(400).send('Must include an id');

  try {
    db.any(`DELETE FROM redirects WHERE id=${req.body.id}`)
      .then(() => {
        res.status(200).send('Successfully deleted redirect');
      });
  } catch (err) {
    res.status(500).send('Error deleting redirect');
  }
}

/*
 * getAllRedirects
 * This function returns all the
 * redirects in the table
 */
exports.getAllRedirects = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }
  try {
    db.any('SELECT * FROM redirects')
      .then((results) => {
        res.status(200).send(results);
      });
  } catch (err) {
    res.status(500).send('Error retrieving redirects');
  }
}
