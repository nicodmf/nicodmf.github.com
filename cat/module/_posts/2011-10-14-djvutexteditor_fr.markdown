---
layout: module
title: DjvuTextEditor
tags: [ djvu, java ]
image: /docs/modules/djvutexteditor/icon-djvu.png
lang: fr
translation: auto
css: djvutexteditor
free: true
compatibilities: [ jvm jvm16 ]
compliances: [ oo ]
reference: true
resume: DjvuTextEditor permet de modifier les textes cachés des fichiers djvu.
demo: /demos/bnf/
---
Présentation
-----------------
DjvuTextEditor est un programme écrit en java permettant de voir et modifier les  textes cachés des fichiers djvu dans une interface visuels.

Utilisation
-----------
Le programme repose sur la jvm. Actuellement, il repose aussi sur djvulibre afin d'extraire et d'enregistrer les textes. Le seul programme utile, pour l'utilisation de djvueditor, provenant de la suite djvu libre est djvused, il doit être installé et son chemin doit être inscrit dans le PATH.

Architecture
-----------------
Le programme est lié à djvu libre par l'utilisation de sortie console, qui permettent la création des lignes de texte editables. L'affichage des pages réelles est quand à lui gérer par djvujava qui est controlé par un wrapper transformant la sortie AWT original en une sortie swing.

{% assign imgTitle = "Schéma général" %}
{% assign imgSrc = "/docs/modules/djvutexteditor/schema_general.png" %}
{% include partial_inline_image.html %}

Documentation
-------------
L'ensemble de la documentation est disponible ici



