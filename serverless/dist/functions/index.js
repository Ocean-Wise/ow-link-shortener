"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllRedirects = exports.removeRedirect = exports.createRedirect = exports.doRedirect = exports.shortenerFrontend = void 0;

var _next2 = _interopRequireDefault(require("next"));

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _helmet = _interopRequireDefault(require("helmet"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _url = _interopRequireDefault(require("url"));

var _firebase = require("./lib/firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

const FileStore = require('session-file-store')(_expressSession.default);

const nextApp = (0, _next2.default)({
  dev: false,
  conf: {
    distDir: 'next'
  }
});
const handle = nextApp.getRequestHandler(); // PostgreSQL

const promise = require('bluebird');

const options = {
  // Use bluebird as the promise library
  promiseLib: promise
};

const pgp = require('pg-promise')(options); // Set the configuration options for Google Cloud SQL


const cn = {
  host: '/cloudsql/ocean-wise-186900:us-west1:url-shortener',
  port: 5432,
  database: 'shortener',
  user: 'postgres',
  password: 'OuaBGg9C1vK90pz2'
}; // Open database connection

const db = pgp(cn);
const server = (0, _express.default)();
server.disable('x-powered-by');
server.use((0, _cors.default)());
server.use(_bodyParser.default.json());
server.set('trust proxy', 1);
server.use((0, _compression.default)());
server.use((0, _helmet.default)());
server.use((0, _expressSession.default)({
  secret: 'geheimnis',
  saveUninitialized: true,
  store: new FileStore({
    path: '/tmp/sessions',
    secret: 'geheimnis'
  }),
  resave: false,
  rolling: true,
  httpOnly: true,
  cookie: {
    maxAge: 604800000
  } // week

}));
server.use((req, res, next) => {
  req.firebaseServer = _firebase.firebase;
  next();
});
server.post('/api/login', (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const token = req.body.token; // eslint-disable-line

  _firebase.firebase.auth().verifyIdToken(token).then(decodedToken => {
    req.session.decodedToken = decodedToken;
    return decodedToken;
  }).then(decodedToken => res.json({
    status: true,
    decodedToken
  })).catch(error => res.json({
    error
  }));

  return true;
});
server.post('/api/logout', (req, res) => {
  req.session.decodedToken = null;
  res.json({
    status: true
  });
});
server.get('/:redirect', (req, res) => {
  const parsedUrl = _url.default.parse(req.url, true);

  const {
    pathname
  } = parsedUrl;

  try {
    db.any(`UPDATE redirects SET clicks = clicks + 1 WHERE short='${/[^/]*$/.exec(pathname)[0]}' RETURNING long`).then(results => {
      res.writeHead(302, {
        Location: results[0].long
      });
      res.end();
    });
  } catch (err) {
    res.writeHead(302, {
      Location: 'https://ocean.org/'
    });
    res.end();
  }
});
server.get('*', (req, res) => handle(req, res));

const shortenerFrontend = _firebase.functions.https.onRequest(
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    if (!req.path) {
      req.url = `/${req.url}`; // Prepend '/' to keep query params if any
    }

    yield nextApp.prepare();
    return server(req, res);
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

exports.shortenerFrontend = shortenerFrontend;

const doRedirect = _firebase.functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }

  try {
    db.any(`UPDATE redirects SET clicks = clicks + 1 WHERE short='${req.body.url}' RETURNING long`).then(results => {
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


exports.doRedirect = doRedirect;

function validate(long) {
  if (long === '' || long === undefined) {
    return Promise.reject({
      // eslint-disable-line
      statusCode: 400,
      message: 'Long URL is required'
    });
  }

  const parsedUrl = _url.default.parse(long);

  if (parsedUrl.protocol === null || parsedUrl.host === null) {
    return Promise.reject({
      // eslint-disable-line
      statusCode: 400,
      message: 'URL is invalid'
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
  return new Promise((res, rej) => {
    // eslint-disable-line
    try {
      db.any(`SELECT ID FROM redirects WHERE short='${path}'`).then(result => {
        if (result.length > 0) {
          return rej();
        } else {
          // eslint-disable-line
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
    return new Promise(res => {
      const path = generateURL();
      isPathFree(path).then(isFree => {
        // eslint-disable-line
        return isFree ? res(path) : res(getURL());
      });
    });
  } else {
    // eslint-disable-line
    return new Promise(res => {
      // eslint-disable-line
      return res(short);
    });
  }
}

const createRedirect = _firebase.functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }

  validate(req.body.long).then(() => {
    // eslint-disable-line
    return getURL(req.body.short);
  }).then(short => {
    try {
      db.none(`INSERT INTO redirects (long, short, clicks) VALUES ('${req.body.long}', '${short}', 0)`).then(() => {
        res.status(200).send(`Created new redirect with URL https://oceanwi.se/${short}`);
      });
    } catch (err) {
      res.status(500).send('Error creating redirect');
    }
  });
});

exports.createRedirect = createRedirect;

const removeRedirect = _firebase.functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }

  if (req.body.id === undefined) res.status(400).send('Must include an id');

  try {
    db.any(`DELETE FROM redirects WHERE id=${req.body.id}`).then(() => {
      res.status(200).send('Successfully deleted redirect');
    });
  } catch (err) {
    res.status(500).send('Error deleting redirect');
  }
});

exports.removeRedirect = removeRedirect;

const getAllRedirects = _firebase.functions.https.onRequest((req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
  }

  try {
    db.any('SELECT * FROM redirects').then(results => {
      res.status(200).send(results);
    });
  } catch (err) {
    res.status(500).send('Error retrieving redirects');
  }
});

exports.getAllRedirects = getAllRedirects;