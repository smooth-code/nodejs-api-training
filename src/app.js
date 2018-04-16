import express from 'express'
import bodyParser from 'body-parser'
// import Article from './Article'
import knex from './knex'

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

const app = express()

app.use(bodyParser.json())

app.post(
  '/articles',
  asyncMiddleware(async (req, res) => {
    const [id] = await knex('articles').insert(req.body)
    const article = await knex('articles').where('id', id)
    res.send(article)
  }),
)

app.get(
  '/articles',
  asyncMiddleware(async (req, res) => {
    res.send(await knex('articles'))
  }),
)

export default app
