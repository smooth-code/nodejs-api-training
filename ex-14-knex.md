# Exercice 14 - Knex

Nous allons maintenant utiliser une base de données pour stocker les articles.

## Instructions

* Installer `knex sqlite3`
* Créer un fichier `knexfile.js` :

```js
// knexfile.js
module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './mydb.sqlite',
  },
}
```

* Créer un fichier `src/knex.js` :

```js
import Knex from 'knex'
import config from '../knexfile'

export default Knex(config)
```

* Créer une migration : `npx knex migrate:make init`
* Modifier le fichier de migration pour y créer une table `articles` avec les champs "id", "title", "content"
* Lancer la migration avec `npx knex migrate:latest`
* Modifier `app.js` et faire en sorte que les articles soient stockés en base de données

**Résultat attendu**

L'API fonctionne comme auparavant, quand le serveur redémarre les données persistent.

## Aide

### Exemple de migration

```js
exports.up = knex =>
  knex.schema.createTable('users', table => {
    // Création du champs "id"
    table.increments()
    // Création du champs "first_name"
    table.string('first_name')
  })

exports.down = knex => knex.schema.dropTableIfExists('users')
```

### Knex + Express

```js
// Permet d'utiliser async / await avec Express (v4)
const asyncMiddleware = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

app.post(
  '/users',
  asyncMiddleware(async (req, res) => {
    // Insertion de l'utilisateur et récupération de l'id
    const [id] = await knex('users').insert(req.body)
    // Lecture de l'utilisateur fraîchement inséré
    const user = await knex('users').where('id', id)
    // Renvoie de l'utilisateur par l'API
    res.send(user)
  }),
)
```
