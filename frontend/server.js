const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const next = require('next')
const admin = require('firebase-admin')
const url = require('url')
const axios = require('axios')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const firebase = admin.initializeApp({
  credential: admin.credential.cert(require('./credentials/server')),
  databaseURL: 'https://ocean-wise-186900.firebaseio.com' // TODO database URL goes here
}, 'server')

app.prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.json())
    server.use(session({
      secret: 'geheimnis',
      saveUninitialized: true,
      store: new FileStore({path: '/tmp/sessions', secret: 'geheimnis'}),
      resave: false,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 } // week
    }))

    server.use((req, res, next) => {
      req.firebaseServer = firebase
      next()
    })

    server.post('/api/login', (req, res) => {
      if (!req.body) return res.sendStatus(400)

      const token = req.body.token
      firebase.auth().verifyIdToken(token)
        .then((decodedToken) => {
          if (/(Meighan\.Makarchuk|Ethan\.Dinnen)@ocean.org/gi.test(decodedToken.email)) {
            req.session.decodedToken = decodedToken
            res.json({ status: true, decodedToken })
          } else {
            req.session.decodedToken = null
            return res.status(403).send({ error: 'Must be an verified @ocean.org email address. Please ensure you are logged out of other Google accounts before trying again.' })
          }
        })
        .catch((error) => res.json({ error }))
    })

    server.post('/api/logout', (req, res) => {
      req.session.decodedToken = null
      res.json({ status: true })
    })

    server.get('/admin', (req, res) => {
      return handle(req, res)
    })

    server.get('/:redirect', (req, res) => {
      const parsedUrl = url.parse(req.url, true)
      const { pathname } = parsedUrl
      try {
        axios.post('https://us-central1-ocean-wise-186900.cloudfunctions.net/doRedirect', { url: /[^/]*$/.exec(pathname)[0] })
          .then((result) => {
            res.writeHead(302, {
              Location: result.data,
            })
            res.end()
          })
      } catch (err) {
        res.writeHead(302, {
          Location: 'https://ocean.org/',
        })
        res.end()
      }
    })

    server.get('*', (req, res) => {
      res.writeHead(302, {
        Location: 'https://ocean.org/',
      })
      res.end()
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
