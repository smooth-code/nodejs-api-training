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

export default Article
