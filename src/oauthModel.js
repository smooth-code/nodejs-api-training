import User from './models/User'
import Token from './models/Token'

async function getClient(clientId, clientSecret) {
  console.log('getClient', { clientId, clientSecret })
  const client = await User.query()
    .where({
      client_id: clientId,
      client_secret: clientSecret,
    })
    .first()

  if (!client) return null

  return {
    id: client.id,
    grants: ['client_credentials'],
  }
}

async function getUserFromClient(client) {
  console.log('getUserFromClient', { client })
  return User.query().findById(client.id)
}

async function validateScope(user, client, scope) {
  console.log('validateScope', { user, client, scope })
  return [scope]
}

async function generateAccessToken(client, user, scope) {
  console.log('generateAccessToken', { client, user, scope })
  return Math.random()
    .toString(36)
    .substring(3)
}

async function saveToken(token, client, user) {
  console.log('saveToken', { token, client, user })
  const savedToken = await Token.query().insertAndFetch({
    user_id: user.id,
    token: token.accessToken,
    expiration_date: new Date('2050-01-01'),
  })

  return {
    accessToken: savedToken.token,
    accessTokenExpiresAt: new Date(savedToken.expiration_date),
    client,
    user,
  }
}

async function getAccessToken(accessToken) {
  console.log('getAccessToken', { accessToken })
  const token = await Token.query()
    .where({ token: accessToken })
    .eager('user')
    .first()

  if (!token) {
    throw new Error('Token not found')
  }

  return {
    accessToken: token.token,
    accessTokenExpiresAt: new Date(token.expiration_date),
    client: token.user,
    user: token.user,
  }
}

export default {
  getAccessToken,
  getClient,
  getUserFromClient,
  generateAccessToken,
  saveToken,
  validateScope,
}
