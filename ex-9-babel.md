# Exercice 9 - Babel

Afin de supporter des versions antérieures de Node.js facilement, nous allons utiliser Babel.

## Instructions

* Installer `babel-cli babel-preset-env` en dépendance de dév.
* Créer un fichier `.babelrc` avec la configuration suivante :

```json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "node": 8
        }
      }
    ]
  ]
}
```

* Ajouter "/lib/" au fichier `.gitignore`
* Placer les fichiers dans un dossier `src` et changer l'extension en `.js`
* Ajouter un script npm "build" permettant de builder le projet avec Babel
* Lancer `npm run build`
* Lancer le projet avec `npx babel-node main.js`

**Résultat attendu**

```
$ npm run build
> nodejs-api-training@1.0.0 build
> babel src -d lib

src/fs.js -> lib/fs.js
src/main.js -> lib/main.js

$ npx babel-node main.js
File written
```

## Aide

### Exemple de `package.json` contenant un script "build"

```json
{
  "name": "my-package",
  "scripts": {
    "build": "babel src -d lib"
  }
}
```
