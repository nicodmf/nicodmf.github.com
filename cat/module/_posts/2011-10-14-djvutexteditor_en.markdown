---
layout: module
title: DjvuTextEditor
tags: [ bnf, php ]
image: /docs/modules/images/bnfphp_icon.png
lang: en
translation: auto
resume: DjvuTextEditor permit to modificate hidden texts in a djvu file.
---
Presentation
-----------------
DjvuTextEditor is a java program which permit to modificate hidden texts presents in a djvu file.

Utilisation
-----------
This software is compatible with the jvm 1.6 and djvulibre. The only usefull executable in djvulibre is djvused, which must be install and present in the path.

Architecture
-----------------
Ce soft is link to djvu libre for outputing in shell wrapper the differents texts which become editable. Ce real display is make by javadjvu.

{% assign imgTitle = "Schéma général" %}
{% assign imgSrc = "/docs/modules/djvueditor/schema_general.png" %}
{% include partial_inline_image.html %}
