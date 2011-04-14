---
layout: module
title: TextMorph
css: textmorph
lang: en
translation: /dev/javascript/mootools/textmorph/2009/12/20/textmorph_fr
categories: dev javascript mootools textmorph
---

Overview
--------

TextMorph is a plugin available for mootools and jQuery which can produce forms with text. It is based on the specifications under css css 2.1 (available in English and French).

Principle
---------

TextMorph relies on two properties present in the css standards, the float and margin-top, combining them so as to show the text along multiple div whose size is calculated for a given predetermined aspect.

![Schema](/docs/images/textmorph_schema1.png "Schema")

<div class="legende">
How the plugin works - the original appearance to the final result
</div>

Two div are added together on each line. One fleet to the right and one left. An extra div is added and contains the attribute css clear: both to help write the next line. The text is still included him in a different div, hyphenation is so basic (see the explanation on the hyphenation), and set a negative margin-top size of the original div (or height parameter, if it is passed to the function).

Availability
------------

This plugin is Available for frameworks jquery (demo) and mootools (demo).

Hyphenations
------------

The hyphenation is done by this plugin so simplistic, they are disabled with the parameter shy. The interest is to add a more powerful hyphenation javascript or php. Indeed, apart from not following the rules of hyphenation admitted, each language has different rules which may be complex, the function hyphenation obliterates all tags embedded in text form.

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
