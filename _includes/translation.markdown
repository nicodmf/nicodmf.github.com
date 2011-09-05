echo translation

{% capture logTranslation %}
Translation
===========

Page en langue : {{ page.lang }}

{{ page.css }}

Assignation des traductions
---------------------------
{% case page.lang %}
	{% when "en" %}{% assign lang = "en" %}
	{% when "fr" %}{% assign lang = "fr" %}
	{% else %}     {% assign lang = "fr" %}
{% endcase %}

Langue : {{ lang }}

{% if lang == "en" %}
	{% assign otherlang     = "fr" %}
	{% assign codeLang      = "en-En" %}
	{% assign langVersion   = "version française" %}
{% else %}
	{% assign otherlang     = "en" %}
	{% assign codeLang      = "fr-Fr" %}
	{% assign langVersion   = "english version" %}
{% endif %}

Définition de la traduction
---------------------------
{{ page.url }}

Sur une ligne pour éviter les lignes inutiles
{% case page.translation %}
	{% when "auto" %}
		{% if lang == "fr" %}{% capture translationUrl %}{{ page.url|replace:"_fr","_en" }}{% endcapture %}fr->en{% endif %}
		{% if lang == "en" %}{% capture translationUrl %}{{ page.url|replace:"_en","_fr" }}{% endcapture %}en->fr{% endif %}
	{% when null %}
		{% assign translationUrl = false %}
	{% else %}
		{% assign translationUrl = page.translation %}
{% endcase %}

Translation originale : {{ page.translation}}
Translation finale: {{ translationUrl }}

Recherche des variables de référence
------------------------------------
{% if page.reference != true %}

	{% for p in site.posts %}
		{{ p.url }}
		{% if p.url == translationUrl %}
			Translated post : {{ p.id }}
			{% assign translation = p %}
		{% endif %}
	{% endfor %}

	{% assign compliances = translation.compliances %}
	{% assign compatibilities = translation.compatibilities %}
	{% assign free = translation.free %}
	{% assign css = translation.css %}
	{% assign langref = translation.lang %}

{% else %}

	{% assign compliances = page.compliances %}
	{% assign compatibilities = page.compatibilities %}
	{% assign free = page.free %}
	{% assign css = page.css %}
	{% assign langref = page.lang %}

{% endif %}

{% endcapture %}{% assign llogTranslation = nologTranslation %}
{{ page.translation}} {{ page.url|replace:"_fr","_en" }}
Translation finale: {{ translationUrl }}
{{ logTranslation }}