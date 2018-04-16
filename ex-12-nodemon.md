# Exercice 12 - Nodemon

Nous allons installer Nodemon dans notre projet afin de ne plus avoir à nous soucier du redémarrage du serveur.

## Instructions

* Installer `nodemon` en dépendance de dév.
* Créer un fichier `nodemon.json` à la racine du projet :

```json
{
  "execMap": {
    "js": "babel-node"
  }
}
```

* Ajouter un script npm "start" : `nodemon src/server.js`
* Lancer la commande `npm start`

**Résultat attendu**

```
$ npm start
> nodejs-api-training@1.0.0 start
> nodemon src/server.js

[nodemon] 1.17.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `babel-node src/server.js`
Server is running at http://localhost:3000
```
