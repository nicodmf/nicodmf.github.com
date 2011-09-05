---
layout: module
title: TextContinu
lang: fr
translation: auto
tags: [ dev, javascript, mootools, jquery, textcontinu ]
image: /docs/modules/images/textcontinu_icon.png

css: textcontinu
reference: true
free: true
compatibilities: [ mootools, jquery2, firefox, ie, opera ]
compliances: [ w3c, ccbyncsa ]
resume: Un plugin jquery/mootools qui dessine un texte suivi dans des conteneurs multiples.

---
Présentation
------------

TextContinu est un plugin disponible pour mootools ainsi que jquery qui permet de réaliser un texte et de le faire suivre dans différents conteneur.

Principe
--------

Le plugins est intégré par un ajout de la balise script dans l'entete du fichier html. Cet ajout effectué, un parcours de l'abre dom, identifiera les balises à traiter. Deux types de balises sont en jeux :

Les balises contenant un texte dont le rendu s'effectuera dans plusieurs balises déterminées, celles-ci seront identifiant par un id spécifique exemple :

Example : 
{%highlight html%}
<div id="poeme">Texte du poème</ poem>
{%endhighlight%}

Les balises effectuant ce rendu celles-ci seront identifées par une classe spécifique : follow-[id de la balise à suivre]
Exemple :
{%highlight html%}
<div class="follow-poeme"></div>
{%endhighlight%}

![Schema](/docs/images/textcontinu_schema1.png "Schéma de fonctionnement")

<div class="legende">
Fonctionnement du plugin - de la l'aspect initial au résultat final
</div> 

Disponibilités
--------------

Ce plugin est diponibles pour les frameworks jquery (démo) et mootools (démo).
