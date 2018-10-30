/*  eslint-disable import/no-unresolved,import/extensions */
const url = require('url');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

exports.doRedirect = functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }
  try {
    db.collection('redirects')
      .get()
      .then(r => {
        let long;
        const size = r.size;
        let i = 0;
        r.forEach(redirect => {
          const { long, short, clicks } = redirect.data();
          if (short === req.body.url) {
            db.collection('redirects').doc(redirect.id).update({ clicks: String(Number(clicks) + 1) });
            res.status(200).send(long);
          } else if (i === size - 1) {
            res.status(200).send('https://ocean.org');
          } else {
            i += 1;
          }
        });
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
      db.collection('redirects').where("short", "==", path)
        .get()
        .then(r => {
          if (r.size > 0) {
            return rej();
          } else {
            return res(true);
          }
        });
      // db.any(`SELECT ID FROM redirects WHERE short='${path}'`)
      //   .then((result) => {
      //     if (result.length > 0) {
      //       return rej();
      //     } else { // eslint-disable-line
      //       return res(true);
      //     }
      //   });
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
          db.collection('redirects')
            .doc(`${short}`)
            .set({ long: req.body.long, short: short, clicks: 0 })
            .then(() => {
              res.status(200).send(`https://oceanwi.se/${short}`);
            });
        } catch (err) {
          res.status(500).send(err.stack);
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
  if (req.body.short === undefined) res.status(400).send('Must include the short url');

  try {
    db.collection('redirects')
      .doc(`${req.body.short}`)
      .delete()
      .then(() => res.status(200).send('Successfully deleted redirect'));
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
    db.collection('redirects')
      .get()
      .then(r => {
        const redirects = []
        r.forEach(redirect => {
          redirects.push(redirect.data());
        });
        res.status(200).send(redirects);
      });
  } catch (err) {
    res.status(500).send('Error retrieving redirects');
  }
});
