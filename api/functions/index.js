/*  eslint-disable import/no-unresolved,import/extensions */
const url = require('url');
const functions = require('firebase-functions');

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

exports.doRedirect = functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
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
});

/*
 * validate
 * This function ensures that the
 * given long URL is valid
 */
function validate(long) {
  if (long === '' || long === undefined) {
    return Promise.reject({ // eslint-disable-line
      statusCode: 400,
      message: 'Long URL is required',
    });
  }
  const parsedUrl = url.parse(long);
  if (parsedUrl.protocol === null || parsedUrl.host === null) {
    return Promise.reject({ // eslint-disable-line
      statusCode: 400,
      message: 'URL is invalid',
    });
  }
  return Promise.resolve(long);
}

/*
 * isPathFree
 * This function checks to see if there is
 * a database entry with the given short URL
 */
function isPathFree(path) {
  return new Promise((res, rej) => { // eslint-disable-line
    try {
      db.any(`SELECT ID FROM redirects WHERE short='${path}'`)
        .then((result) => {
          if (result.length > 0) {
            return rej();
          } else { // eslint-disable-line
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
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const position = Math.floor(Math.random() * characters.length);
  const character = characters.charAt(position);

  if (path.length === 7) {
    return path;
  }

  return generateURL(path + character);
}

/*
 * getURL
 * This function generates a valid
 * short URL and ensures it is unused
 */
function getURL(short = '') {
  if (short === '') {
    return new Promise((res) => {
      const path = generateURL();
      isPathFree(path)
        .then((isFree) => { // eslint-disable-line
          return isFree ? res(path) : res(getURL());
        });
    });
  } else { // eslint-disable-line
    return new Promise((res) => { // eslint-disable-line
      return res(short);
    });
  }
}

exports.createRedirect = functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  } else {
    validate(req.body.long)
      .then(() => { // eslint-disable-line
        return getURL(req.body.short);
      })
      .then((short) => {
        try {
          db.none(`INSERT INTO redirects (long, short, clicks) VALUES ('${req.body.long}', '${short}', 0)`)
            .then(() => {
              res.status(200).send(`https://oceanwi.se/${short}`);
            });
        } catch (err) {
          res.status(500).send('Error creating redirect');
        }
      });
    }
});

exports.removeRedirect = functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
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
});

exports.getAllRedirects = functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
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
});
