---
layout: post
title: Link beetween DOM et simpleXml
lang: en
enversion : /2009/06/20/domxml_php_en
frversion : /2009/06/20/domxml_php_fr
---

Lien entre DOM et simpleXml
===========================

In Php, it exists a major library to manipulate a xml object, her name is DOM (DOMxml in php4).

Cette libraire reprends les spécifications du DOM fourni par le W3C, en ajoutant différentes ressources intéressantes
comme la classe DOMDocumentFragment qui permet d’ajouter une chaine de caractères directement dans un document,
des extensions permettant d’importer et d’exporter un noeud ou un document entier vers d’autres librairies.
D’autres librairies existent nous nous intéresserons à simpleXML, qui permet de simplifier (;)) un certain nombre d’opérations.
Nous verrons dans cet article quelles relations peuvent être effectuées entre ces librairies et quels bénéfices elles apportent.

Avantage et inconvénient des DOMDocuments
-----------------------------------------

Un DOMDocument est un objet complexe qui nécessite une utilisation très rigoureuse, il est par exemple très difficile de récupérer une page web sans générer avertissements et erreurs. La chaine importée pour le créer doit être absolument formater suivant les standards.
La manipulation est par contre aiser et toutes les fonctions habituelles de parcours (nextSibling, firstChild, parentNode…), de modification (insertBefore, insertAfter, removeChild,…) sont implantées.

Avantage et inconvénient de simpleXML
-------------------------------------

SimpleXML, quand à elle est une bibliothèque simplifiée, le nombre de fonction est restreint et clair, la création simplifié, l’export aussi. La chaine conserve un formatage même après manipulation. Et chose agréable les conventions php, parcours de tableau, impression temporaire à l’aide de print_r,… sont conservées.
A l’inverse du DOM, les fonctions de manipulations sont malheureusement absentes, les modifications difficiles.

Une utilisation conjointe
-------------------------

Dans un soucis de simplicité et d’efficacité nous pouvons donc utiliser simpleXML pour le chargement et l’export, les lectures, et les ajouts simples. Pour des manipulations plus précises nous utiliserons le DOM, les méthodes et propriétés qui y sont associés.
En voici un exemple sur une insertion d’un noeud :

{% highlight php %}
<?php
$xml=simplexml_load_file ("fichier1.xml");
$xml2=simplexml_load_file ("fichier2.xml");
$items=$xml2->channel->item;
foreach($items as $item){
    //Importation, création de l'arbre de base et placement sur le noeud cible
    $nodeFirstItem = dom_import_simplexml($xml->channel->item[0]);
    //ownerDocument représente le document de type DOMDocument créé
    //à la ligne précédente. true spécifie que les fils sont eux aussi importés
    $importNode=$nodeFirstItem->ownerDocument->importNode(dom_import_simplexml($item),true);
    //Manipulation de l'arbre par insertion
    $nodeFirstItem->parentNode->insertBefore($importNode, $nodeFirstItem);
}
?>
<body class="test"></body>
{% endhighlight %}

Dans cette exemple nous supposerons que les fichiers fichier1 et fichier2 contenaient respectivement

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
  <channel>
    <title>All About Everything</title>
    <link>http://www.example.com/podcasts/everything/index.html</link>
    <item>
      <title>Shake Shake Shake Your Spices</title>
      <guid>http://example.com/podcasts/archive/aae20050643.m4a</guid>
    </item>
  </channel>
</rss>
{% endhighlight %}
et
{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
  <channel>
    <title>All About World</title>
    <item>
      <title>Your Spices</title>
      <guid>http://example.com/podcasts/archive/aae20050615.m4a</guid>
    </item>
    <item>
      <title>Another Shake</title>
      <guid>http://example.com/podcasts/archive/aae20050620.m4a</guid>
    </item>
    </channel>
</rss>
{% endhighlight %}

L’avantage de cette technique est que les modifications apporter au DOMDocument sont transmises sans aucune fonction supplémentaires à l’objet simpleXML.

Une exemple en suppression de noeud
-----------------------------------

{% highlight php %}
<?php
$xml=simplexml_load_file("fichier2.xml");
$delNode = dom_import_simplexml($xml->channel->item[1]);
$delNode->parentNode->removeChild($delNode);
?>
{% endhighlight %}

Conclusion
----------
De mon point de vue, la meilleure solution serait une création de classes enfants aux classes du dom, facilitant les manipulations les plus courantes. Cette solution bien que propre et certainement plus saine qu’une utilisation conjointe de deux classes demanderait un temps de développement important.
Ces bibliothèques étant standards, elles sont maintenus par le PHP Group. Cela garantit une évolution suivie et constante tant au niveau des performances que de l’interopérabilité. De plus le temps étant une variable inaltérable, du moins sur notre chère planète bleu, nombre de projet devront conserver une utilisation des bibliothèques standards et il sera souhaitable de recourir aux techniques énoncées plus haut.
Libre à vous de choisir, et bon développement