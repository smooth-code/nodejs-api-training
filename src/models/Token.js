import { Model } from 'objection'
import User from './User'

class Token extends Model {}

Token.tableName = 'tokens'
Token.relationMappings = {
  user: {
    relation: Model.BelongsToOneRelation,
    modelClass: User,
    join: {
      from: 'tokens.user_id',
      to: 'users.id',
    },
  },
}

export default Token
