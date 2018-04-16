import express from 'express'
import bodyParser from 'body-parser'
import Article from './Article'

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

const app = express()

app.use(bodyParser.json())

app.post(
  '/articles',
  asyncMiddleware(async (req, res) => {
    res.send(await Article.query().insertAndFetch(req.body))
  }),
)

app.get(
  '/articles',
  asyncMiddleware(async (req, res) => {
    res.send(await Article.query())
  }),
)

export default app
