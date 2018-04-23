# Exercice 17 - File Upload

Nous souhaitons ajouter un endpoint permettant d'uploader des fichiers associés à un article.

## Instructions

* Installer `busboy`
* Créer une migration pour ajouter une table "documents" avec les champs "name", "path" et "article_id" :

```js
exports.up = knex =>
  knex.schema.createTable('documents', table => {
    table.increments()
    table.string('name')
    table.string('path')
    table.string('article_id')
  })

exports.down = knex => knex.schema.dropTableIfExists('documents')
```

* Créer un modèle `Document`
* Ajouter une relation vers les documents dans le modèle `Article`
* Créer un dossier "/uploads" à la racine et l'ajouter au `.gitignore`
* Ajouter une route POST "/articles/:id/documents" qui permet d'uploader un document lié à un article

**Résultat attendu**

Lorsque j'appelle le endpoint POST "/articles/:id/documents", un fichier est uploadé et un document est ajouté en base de donnée.

## Aide

## Créer une migration

```
npx knex migrate:make documents
```

## Exemple de relation "1-n"

```js
// Un utilisateur a plusieurs animaux
// Un article a plusieurs documents...
Person.relationMappings = {
  animals: {
    relation: Model.HasManyRelation,
    modelClass: Animal,
    join: {
      from: 'persons.id',
      to: 'animals.person_id',
    },
  },
}
```

## Créer des paths compatible sous tous les OS

```js
import path from 'path'

const UPLOAD_DIR = path.join(__dirname, '../uploads')
const filePath = path.join(UPLOAD_DIR, 'file.pdf')
```

## Créer un stream pour écrire un fichier

```js
import fs from 'fs'

const writable = fs.createWriteStream('myFile.pdf')
```

## Exemple d'utilisation de busboy

```js
app.post(
  '/files',
  (req, res, next) => {
    const busboy = new Busboy({ headers: req.headers })

    busboy.on('file', (fieldname, file, filename) => {
      // `file` est un ReadableStream
    })

    busboy.on('field', (fieldname, value) => {
      // On accède ici aux champs renseignés qui ne sont pas des fichiers
    })

    busboy.on('finish', () => {
      // Cette méthode est appelée lorsque tous les fichiers ont été lus
      res.send('OK')
    })

    req.pipe(busboy)
  }),
)
```
