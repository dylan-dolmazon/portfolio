# Dylan DOLMAZON

https://portfolio-dylan-dolmazon.000webhostapp.com/

| Rôle                   | Nom                | Email                            | 
|------------------------|--------------------|----------------------------------|
| Dev.Front, Intégrateur | **Dolmazon Dylan** | dylan.dolmazon@icloud.com        |  

Portfolio réalisé par dylan DOLMAZON inspiré d'un site existant:
    - https://urlz.fr/lm5k
  ## Language

  - HTML 5
  - SCSS
  - Javascript
  - Gulp
  - Yarn

  ## Lancement du projet

  - ``yarn``

  Pour build le projet:
  - ``yarn build``

  Pour développer:
  - ``yarn dev``

## Architecture du projet
```
html-css-metinet
      └───README.md
      │
      └───package.json
      │
      └───Gulpfile.js
      │
      └───mail.php
      │
      └───index.html
      │
      └───src
      │   └───assets
      |   │   │   
      |   │   └───scss
      |   │   │   │   
      |   │   │   └───ALL scss *.scss
      |   │   │   
      |   │   │
      |   │   └───img
      |   │   │   │   
      |   │   │   └───ALL images *.[webp,png,jpeg,jpg...]
      |   │   │   
      |   │   └───js
      |   │       │   
      |   │       └───ALL js *.js
      │     
      └───dist
          └───css
          │   │   
          │   └───minify css all.min.css
          │
          └───img
          │   │   
          │   └───ALL images *.[webp,png,jpeg,jpg...]
          │   
          └───js
              │   
              └───minify all.min.js
```

## Les pratiques 

Le site web à été développé en mobile first. Les fichiers js et scss sont séparé celon différents critéres et sont ensuite regroupés et minifier par Gulp dans un fichier [css/js].min.[css/js]. De même pour les images qui sont déplacés de src vers dist.

Mon portfolio est hébergé sur 000Webhost.com qui m'a permit un hébergement facile et gratuit. 