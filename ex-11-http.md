# Exercice 11 - HTTP

Nous allons maintenant créer notre premier serveur HTTP avec Node.js.

## Instructions

* Créer un fichier `src/server.js` qui démarre un serveur sur le port "3000" et affiche "Hello world"

**Résultat attendu**

```
$ babel-node src/server.js
Server is running at http://localhost:3000
```

L'URL `http://localhost:3000` affiche "Hello world" avec un status 200.

## Aide

```js
import http from 'http'

// Création d'un serveur HTTP
const server = http.createServer((req, res) => {
  // Définit un status code 200 (OK)
  res.statusCode = 200

  // Header text
  res.setHeader('Content-Type', 'text/plain')

  // Ecrit "Hello world" et envoie la réponse au client
  res.end('Hello World\n')
})

// Démarre le serveur sur le port 3000
server.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`)
})
```
