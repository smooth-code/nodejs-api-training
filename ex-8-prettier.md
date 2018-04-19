# Exercice 8 - Prettier

Pour développer plus vite, nous allons installer Prettier dans notre projet.

## Instructions

* Installer le plugin Prettier dans votre éditeur
* Installer `prettier` en dépendance de dev. dans le projet
* Créer un fichier `.gitignore` avec "node_modules/"
* Créer un fichier `.prettierrc` avec la configuration suivante :

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "semi": false
}
```

* Ajouter un script npm "format"
* Lancer `npm run format`

**Résultat attendu**

```
$ npm run format
> nodejs-api-training@1.0.0 format
> prettier --write "**/*.mjs"

fs.mjs 33ms
main.mjs 20ms
```

## Aide

### Installer un package en mode développement

```
$ npm install --save-dev package-name
```

### Exemple de script "format"

```json
{
  "name": "my-package",
  "scripts": {
    "format": "prettier --write \"**/*.m?js\""
  }
}
```
