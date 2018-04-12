# Exercice 7 : Modules

Nous souhaitons réorganiser notre code à l'aide des ES Modules.

## Instructions

* Renommer `main.js` en `main.mjs`
* Créer un fichier `fs.mjs` et exporter la fonction `safeWrite`
* Importer la fonction `safeWrite` dans `main.mjs`
* Remplacer les `require` par des `import`
* Lancer le programme avec `node --experimental-modules`

**Résultat attendu**

```
$ node --experimental-modules main.mjs
File written
```

## Aide

```js
// Importer un module
import fs from 'fs'

// Exporter une fonction
export async function foo() {}

// Importer un module local
import { something } from './util'
```
