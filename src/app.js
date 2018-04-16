import express from 'express'
import bodyParser from 'body-parser'
import OAuthServer from 'express-oauth-server'
import Article from './models/Article'
import oAuthModel from './oauthModel'

const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

const app = express()

app.oauth = new OAuthServer({ model: oAuthModel })

app.post('/oauth/token', bodyParser.urlencoded(), app.oauth.token())

app.use(app.oauth.authenticate())
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
