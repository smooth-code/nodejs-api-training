# Exercice 4 : Arrays

Nous allons partir d'un tableau contenant plusieurs articles et créer une fonction permettant d'afficher les articles contenant un nombre minimum de signes.

## Instructions

* Remplacer le contenu de `main.js` par le code suivant et compléter :

```js
const articles = [
  {
    title: 'My first article',
    content: 'Small content',
  },
  {
    title: 'My second article',
    content: 'Very very very long content',
  },
  {
    title: 'My third article',
    content: 'Not very long content',
  },
]

function resumeArticle({ title, content }) {
  return `${title} (${content.length} words)`
}

function showArticlesWithMinSign(articles, minSign) {
  /* TODO */
}

console.log(showArticlesWithMinSign(articles, 20))
// My second article (27 words), My third article (21 words)
```

**Résultat attendu**

```
$ node main.js
My second article (27 words), My third article (21 words)
```

## Aide

```js
// Filtrer un tableau
const filteredArray = [1, 2, 3].filter(x => x > 1) // [2, 3]

// Mapper un tableau
const mappedArray = filteredArray.map(x => x + 1) // [3, 4]

// Transformer un tableau en chaîne de caractères
console.log(filteredArray.join('-')) // 3-4
```
