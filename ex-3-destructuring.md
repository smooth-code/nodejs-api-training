# Exercice 3 : Destructuring & Template Strings

Nous souhaitons rendre notre code plus lisible à l'aide des templates strings et de la déstructuration.

## Instructions

* Déstructurer le "title" et le "content" de l'article
* Remplacer la concaténation par une template string
* Lancer la commande `node main.js`

**Résultat attendu**

```
$ node main.js
My first article (26 words)
```

## Aide

```js
// Déstructurer un object
const user = { firstName: 'James', lastName: 'Bond' }
const { firstName, lastName } = user

// Utiliser une template string pour interpoler des variables
console.log(`${firstName} ${lastName}`) // James Bond
```
