import { Model } from 'objection'

class User extends Model {}

User.tableName = 'users'

export default User
