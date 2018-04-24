# Exercice 19 - Tests

Nous souhaitons tester notre API de manière unitaire.

## Instructions

* Installer `jest supertest`
* Ajouter l'environnement "jest" à la configuration `.eslintrc.js` :

```js
module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  env: { node: true, jest: true },
  rules: {
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
  },
}
```

* Ajouter un script npm "test" dans `package.json` :

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

* Modifier le fichier `knexfile.js` pour avoir une configuration par environnement :

```js
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './mydb.sqlite',
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './mydb-test.sqlite',
    },
    useNullAsDefault: true,
  },
}
```

* Modifier le fichier `knex.js` pour pointer sur le bon environnement :

```js
import Knex from 'knex'
import config from '../knexfile'

export default Knex(config[process.env.NODE_ENV || 'development'])
```

* Jouer les migrations sur la base de test : `NODE_ENV=test npx knex migrate:latest`
* Externaliser le setup de la base de donnée dans un fichier `setupDatabase.js` :

```js
import { Model } from 'objection'
import knex from './knex'

function setupDatabase() {
  Model.knex(knex)
}

export default setupDatabase
```

* Appeler le `setupDatabase()` dans `server.js`
* Créer un fichier `app.test.js` et compléter le code suivant :

```js
import request from 'supertest'
import app from './app'
import setupDatabase from './setupDatabase'
import knex from './knex'

describe('app', () => {
  beforeEach(async () => {
    setupDatabase()
    await knex('articles').del()
  })

  describe('GET /articles', () => {
    it('should return articles in body', async () => {
      /* TODO */
    })
  })
})
```

**Résultat attendu**

Lorsque je lance la commande `npm test -- --watch` j'obtiens le résultat suivant :

```
 PASS  src/app.test.js
  app
    GET /articles
      ✓ should return articles (68ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.722s, estimated 1s
Ran all test suites related to changed files.
```

## Aide

### Exemple d'utilisation de supertest

```js
import request from 'supertest'

async function test() {
  const response = await request(app)
    .get('/foo-bar')
    .expect(200)

  expect(response.body).toEqual({ foo: 'bar' })
}
```
