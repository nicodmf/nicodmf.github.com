---
layout: module
title: TextContinu
lang: en
translation: /dev/javascript/mootools/textcontinu/2010/01/15/textcontinu_fr
categories: dev javascript mootools textcontinu
---

Overview
--------

TextContinu is a plugin available for mootools and jQuery which allows for text and forward it in different containers.

Principle
--------

The plugin is built by adding the script tag in the header of the html file. This addition made a journey of abre dom, identify the tags to process. Two types of tags are in play:

The tags contain a text rendering will be done in several specific markers, they are identifying a specific id

Example : 
{%highlight html%}
<div id="poeme"> text of the poem</div>
{%endhighlight%}

Tags making this record, they will identifées a specific class: follow-[ID Tag to follow].

Example : 
{%highlight html%}
<div class="follow-poeme"></div>
{%endhighlight%}

![Schema](/docs/images/textcontinu_schema1.png "Scheme")

<div class="legende">
How the plugin works - the original appearance to the final result
</div> 

Availability
--------------

This plugin is Available for frameworks jquery (demo) and mootools (demo).
