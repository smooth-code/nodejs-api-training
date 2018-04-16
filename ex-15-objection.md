# Exercice 15 - Objection

Pour simplifier le développement nous allons ajouter une couche modèle à l'aide d'Objection.

## Instructions

* Installer `objection`
* Connecter Knex et Objection dans `server.js`
* Modifier la classe `Article` pour qu'elle devienne un modèle Objection
* Utiliser la classe `Article` dans `app.js` pour faire les requêtes

**Résultat attendu**

L'API fonctionne comme auparavant.

## Aide

### Knex + Objection

```js
import { Model } from 'objection'
import knex from './knex'

Model.knex(knex)
```

### Exemple de classe Objection

```js
import { Model } from 'objection'

class User extends Model {}

User.tableName = 'users'

export default User
```

### Exemples de requêtes avec Objection

```js
import User from './User'

async function getData() {
  // Insertion et récupération d'un utilisateur
  const user = await User.query().insertAndFetch({ first_name: 'James' })
  // Récupération de tous les utilisateurs
  const allUsers = await User.query()
}
```
