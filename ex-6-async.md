# Exercice 6 : Asynchronism

Nous allons maintenant écrire la liste des articles dans un fichier. Nous souhaitons éviter d'écraser un fichier, nous allons donc vérifier s'il existe avant d'écrire dedans.

## Instructions

* Créer une fonction `safeWrite(fileName, content)`
  * Si le fichier existe déjà une erreur est retournée
  * Si le fichier n'existe pas le fichier est écrit avec `content`
* Utiliser cette fonction `safeWrite()` pour écrire la liste des articles contenant plus de 20 caractères

**Résultat attendu**

```
$ node main.js
File written
$ ls articles.txt
articles.txt
$ node main.js
Error: File already exists
$ rm articles.txt
$ node main.js
File written
```

## Aide

```js
// Ecrire dans un fichier
const fs = require('fs')
const util = require('util')

const writeFile = util.promisify(fs.writeFile)

writeFile('hello.txt', 'Hello world!')
  .then(() => console.log('File written'))
  .catch(console.error)

// Tester si un fichier existe
const exists = util.promisify(fs.exists)
exists('hello.txt')
  .then(isExisting =>
    console.log(isExisting ? 'File exists' : 'File does not exist'),
  )
  .catch(console.error)

// Créer une fonction asynchrone
async function logExistence(fileName) {
  if (await exists(fileName)) {
    console.log('File exists')
  } else {
    console.log('File does not exist')
  }
}
```
