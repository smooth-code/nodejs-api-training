import { Model } from 'objection'

class Article extends Model {
  countSigns() {
    return this.content.length
  }

  resume() {
    return `${this.title} (${this.countSigns()} words)`
  }
}

Article.tableName = 'articles'

export default Article
