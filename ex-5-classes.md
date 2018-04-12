# Exercice 5 : Classes

Nous allons créer une classe pour modéliser nos articles sous forme d'instance. Nous ajouterons alors une méthode permettant de connaître le nombre de signes d'un article.

## Instructions

* Créer une classe `Article` qui prendra en paramètre un objet `{ title, content }`
* Ajouter un constructeur pour assigner "title" et "content" sur l'instance (`this`)
* Ajouter une méthode `countSigns()` qui retournera le nombre de signes de l'article
* Ajouter une méthode `resume()` qui retourne le résumé de l'article (la même chose que `resumeArticle()`)
* Remplacer la liste d'article par une liste d'instances :

```js
const articles = [
  new Article({
    title: 'My first article',
    content: 'Small content',
  }),
  new Article({
    title: 'My second article',
    content: 'Very very very long content',
  }),
  new Article({
    title: 'My third article',
    content: 'Not very long content',
  }),
]
```

* Adapter le code existant pour utiliser les méthodes `countSigns()` et `resume()`

**Résultat attendu**

```
$ node main.js
My second article (27 words), My third article (21 words)
```

## Aide

```js
// Créer une classe
class User {
  constructor(name) {
    this.name = name
  }

  sayHello() {
    console.log(`Hello ${this.name}`)
  }
}

// Créer une instance
const user = new User('James')

// Appeler une méthode de l'instance
console.log(user.sayHello()) // 'Hello James'
```
