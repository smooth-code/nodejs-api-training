# Exercice 16 - OAuth

Nous souhaitons ajouter une authentification de type OAuth à notre application.

## Instructions

* Installer `express-oauth-server`
* Créer une migration : `npx knex migrate:make users_and_tokens`
* Éditer le fichier de migration :
  * Créer une table `users` : "id", "email", "client_id", "client_secret"
  * Créer une table `tokens` : "user_id", "token", "expiration_date"
* Jouer la migration `npx knex migrate:latest`
* Supprimer le fichier `main.js`
* Déplacer le fichier `src/Article.js` dans `src/models/Article.js`
* Ajouter le modèle `User` et le modèle `Token`
* Ajouter un `relationMappings` dans `Token` pour le lier à `User`
* Créer le `OAuthServer` dans `app.js`
  * Ajouter un endpoint `POST /oauth/token` pour la génération du token
  * Protéger les endpoints `GET /articles` et `POST /articles`
* Créer le modèle OAuth dans `oauthModel.js`

**Résultat attendu**

Il est possible de se connecter avec un utilisateur, un token est alors générée et on peut utiliser l'API.

## Aide

## Migration pour créer la table `users` et la table `tokens`

```js
exports.up = knex =>
  knex.schema
    .createTable('users', table => {
      table.increments()
      table.string('email')
      table.string('client_id')
      table.string('client_secret')
    })
    .createTable('tokens', table => {
      table.increments()
      table
        .integer('user_id')
        .index()
        .references('id')
        .inTable('users')
        .notNullable()
      table.string('token')
      table.dateTime('expiration_date')
    })

exports.down = knex =>
  knex.schema.dropTableIfExists('users').dropTableIfExists('tokens')
```

## Ajouter une relation de type `BelongsToOneRelation`

```js
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
```

## Créer un OAuthServer

```js
import express from 'express'
import bodyParser from 'body-parser'
import OAuthServer from 'express-oauth-server'
import oAuthModel from './oauthModel'

const app = express()

app.oauth = new OAuthServer({ model: oAuthModel })

app.post('/oauth/token', bodyParser.urlencoded(), app.oauth.token())

app.use(app.oauth.authenticate())

// Tout ce qui est en dessous sera protégé
export default app
```

## Modèle OAuth à compléter

```js
import User from './models/User'
import Token from './models/Token'

async function getClient(clientId, clientSecret) {
  console.log('getClient', { clientId, clientSecret })
  const client = /* TODO Récupérer le client (user) en base */

  if (!client) return null

  return {
    id: client.id,
    grants: ['client_credentials'],
  }
}

async function getUserFromClient(client) {
  console.log('getUserFromClient', { client })
  return /* TODO Récupérer l'utilisateur en base */
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
  const savedToken = /* TODO Sauvegarder le token en base */

  return {
    accessToken: savedToken.token,
    accessTokenExpiresAt: new Date(savedToken.expiration_date),
    client,
    user,
  }
}

async function getAccessToken(accessToken) {
  console.log('getAccessToken', { accessToken })
  const token = /* TODO Récupérer le token en base */

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
```
