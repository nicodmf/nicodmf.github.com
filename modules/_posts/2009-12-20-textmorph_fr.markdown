---
layout: module
title: TextMorph
lang: fr
translation: /dev/javascript/mootools/textmorph/2009/12/20/textmorph_en
categories: dev javascript mootools textmorph

css: textmorph
reference: true
free: true
compatibilities: [ mootools, jquery2, firefox, ie, opera ]
compliances: [ w3c, ccbyncsa ]
---

Présentation
------------

TextMorph est un plugin disponible pour mootools ainsi que jquery qui permet de réaliser des formes avec un texte. Il se base sur les spécifications css en cours css 2.1 (disponible en version anglaise et française).

Principe
--------

TextMorph s'appuie sur deux propriétés présente dans la normes css, le float et le margin-top, en les combinant de manière a faire apparaitre le texte au bord de multiples div dont la taille est calculée pour donné un aspect prédéterminé.

![Schema](/docs/images/textmorph_schema1.png "Schéma de fonctionnement")

<div class="legende">
Fonctionnement du plugin - de la l'aspect initial au résultat final
</div>

Deux div sont ainsi ajoutées sur chaque ligne. L'une flotte à droite, l'autre à gauche. Une div supplémentaire est ajouté et comporte l'attribut css clear:both afin de permettre d'écrire la ligne suivante. Le texte est quand à lui inclus dans une div différente, il est césuré de manière basique (voir l'expliquation sur les césures), et réglé avec un margin-top négatif de la taille de la div initial (ou du paramètre height, si celui-ci est passé à la fonction).

Disponibilités
--------------

Ce plugin est diponibles pour les frameworks jquery (démo)et mootools (démo).

Les Césures
-----------

Les césures sont réalisées par ce plugin de manière simpliste, elle sont désactivable avec le paramètre shy. L'intérêt étant d'ajouter un système de césure plus puissant javascript ou php. En effet, outre le non suivi des règles de césure communnément admise, chaque langues ayant des règles différentes qui peuvent s'avérer complexes, la fonction réalisant les césures oblitère toutes les balises intégrées dans le texte à former.

Exemple
-------

{% highlight javascript %}
new TextMorph(
	document.getElementById('circle2'),
	{
		shy:null
	}
);
{% endhighlight %}
