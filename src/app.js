import express from 'express'
import bodyParser from 'body-parser'
import Article from './Article'

const app = express()

app.use(bodyParser.json())

const articles = []

app.post('/articles', (req, res) => {
  const article = new Article(req.body)
  articles.push(article)
  res.send(article)
})

app.get('/articles', (req, res) => {
  res.send(articles)
})

export default app
