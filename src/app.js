import fs from 'fs'
import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import OAuthServer from 'express-oauth-server'
import Busboy from 'busboy'
import Document from './models/Document'
import Article from './models/Article'
import oAuthModel from './oauthModel'

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

const app = express()

app.oauth = new OAuthServer({ model: oAuthModel })

app.post(
  '/oauth/token',
  bodyParser.urlencoded({ extended: false }),
  app.oauth.token(),
)

// app.use(app.oauth.authenticate())
app.use(bodyParser.json())

app.post(
  '/articles',
  asyncMiddleware(async (req, res) => {
    res.send(await Article.query().insertAndFetch(req.body))
  }),
)

const UPLOAD_DIR = path.join(__dirname, '../uploads')

app.post(
  '/articles/:id/documents',
  asyncMiddleware(async (req, res, next) => {
    const article = await Article.query().findById(req.params.id)
    const busboy = new Busboy({ headers: req.headers })
    const doc = {}

    busboy.on('file', (fieldname, file, filename) => {
      doc.path = filename
      const writable = fs.createWriteStream(path.join(UPLOAD_DIR, filename))
      file.pipe(writable)
    })

    busboy.on('field', (fieldname, value) => {
      doc[fieldname] = value
    })

    busboy.on('finish', () => {
      article
        .$relatedQuery('documents')
        .insertAndFetch(doc)
        .then(insertedDoc => res.send(insertedDoc))
        .catch(next)
    })

    req.pipe(busboy)
  }),
)

app.get(
  '/articles',
  asyncMiddleware(async (req, res) => {
    res.send(await Article.query())
  }),
)

app.get(
  '/documents',
  asyncMiddleware(async (req, res) => {
    res.send(await Document.query())
  }),
)

export default app
