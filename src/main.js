import { safeWrite } from './fs'

class Article {
  constructor({ title, content }) {
    this.title = title
    this.content = content
  }

  countSigns() {
    return this.content.length
  }

  resume() {
    return `${this.title} (${this.countSigns()} words)`
  }
}

const articles = [
  new Article({
    title: 'My first article',
    content: 'Small content',
  }),
  new Article({
    title: 'My second article',
    content: 'Very very very long content',
  }),
  new Article({
    title: 'My third article',
    content: 'Not very long content',
  }),
]

function showArticlesWithMinSign(articles, minSign) {
  return articles
    .filter(article => article.countSigns() > minSign)
    .map(article => article.resume())
    .join(', ')
}

safeWrite('articles.txt', showArticlesWithMinSign(articles, 20))
  .then(() => console.log('File written'))
  .catch(console.error)
