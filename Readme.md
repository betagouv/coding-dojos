Environnements de dév et sources des Coding-dojo du SGMAP.

# Contexte

Chaque séance de dojo donne lieu à son propre répertoire autonome (Readme, conf NPM+Grunt+Karma+...)

# Installations

Après avoir cloné le dépôt, dans un projet donné (ex : 'dojo1') :

```sh
npm install
```

Après avoir installé les quelques packets nécessaires, les tests sont automatiquement lancés avec la commande `grunt test`.

# Exécuter les tests

Dans chaque projet, par la commande :

```sh
grunt test
```
ou pour un livereload des tests :

```sh
grunt test:auto
```
