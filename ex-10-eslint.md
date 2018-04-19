# Exercice 10 - ESLint

Afin de nous aider lors du développement et de détecter les erreurs au plus tôt nous allons ajouter ESLint au projet.

## Instructions

* Installer `eslint babel-eslint eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier` en dépendance de dev.
* Créer un fichier `.eslintrc.js` avec la configuration suivante :

```js
// .eslintrc.js
module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: 'babel-eslint',
  env: { node: true },
  rules: {
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
  },
}
```

* Ajouter un script npm "lint" : `eslint .`
* Créer un fichier `.eslintignore` avec "/lib/"
* Lancer la commande `npm run lint`

**Résultat attendu**

```
$ npm run lint
> nodejs-api-training@1.0.0 lint
> eslint .


/Users/neoziro/projects/nodejs-api-training/src/main.js
  41:15  warning  Unexpected console statement  no-console
  42:10  warning  Unexpected console statement  no-console

✖ 2 problems (0 errors, 2 warnings)
```

## Aide

### Exemple de script "lint"

```json
{
  "name": "my-package",
  "scripts": {
    "lint": "eslint ."
  }
}
```
