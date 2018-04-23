import { Model } from 'objection'
import Document from './Document'

class Article extends Model {
  countSigns() {
    return this.content.length
  }

  resume() {
    return `${this.title} (${this.countSigns()} words)`
  }
}

Article.tableName = 'articles'
Article.relationMappings = {
  documents: {
    relation: Model.HasManyRelation,
    modelClass: Document,
    join: {
      from: 'articles.id',
      to: 'documents.article_id',
    },
  },
}

export default Article
