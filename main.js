const articles = [
  {
    title: 'My first article',
    content: 'Small content',
  },
  {
    title: 'My second article',
    content: 'Very very very long content',
  },
  {
    title: 'My third article',
    content: 'Not very long content',
  },
]

function resumeArticle({ title, content }) {
  return `${title} (${content.length} words)`
}

function showArticlesWithMinSign(articles, minSign) {
  return articles
    .filter(article => article.content.length > minSign)
    .map(resumeArticle)
    .join(', ')
}

console.log(showArticlesWithMinSign(articles, 20))
// My second article (27 words), My third article (21 words)
