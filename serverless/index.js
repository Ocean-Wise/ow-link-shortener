'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello World!');
};

// POSTGRES PASSWORD pDupr8cOtosbak50

const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit : 1,
    socketPath: '/cloudsql/' + 'ocean-wise-186900:us-west1:urlshortener-database',
    user: 'api',
    password: 'OKipc9321Zno',
    database: 'api'
});

exports.redirect = (req, res) => {
    //using pool instead of creating connection with function call
    pool.query(`SELECT * FROM redirects`, req.body.id, (err, results) => {
      console.log(results);
      response.status(200).send(results);
    });
};

exports.event = (event, callback) => {
  callback();
};
