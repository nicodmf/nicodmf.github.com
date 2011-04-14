{% capture logTranslation%}
Translation
===========

Page en langue : {{ page.lang }}

{{ page.css }}

Recherche des variables de référence
------------------------------------
{% if page.reference != true %}

	{% for post in site.posts %}
		{% if post.id == page.translation %}
			{{ post.id }}
			{% assign translation = post %}
		{% endif %}
	{% endfor %}

	{% assign compliances = translation.compliances %}
	{% assign compatibilities = translation.compatibilities %}
	{% assign free = translation.free %}
	{% assign css = translation.css %}
	{% assign lang = translation.lang %}

{% else %}

	{% assign compliances = page.compliances %}
	{% assign compatibilities = page.compatibilities %}
	{% assign free = page.free %}
	{% assign css = page.css %}
	{% assign lang = page.lang %}

{% endif %}

Assignation des traductions
---------------------------
{% case page.lang %}
	{% when "en" %}
		{% assign codeLang      = "en-En" %}
		{% assign langVersion   = "version française" %}
		{% assign compliance    = "compliance" %}
		{% assign compatibility = "compatibility" %}
	{% when "fr" %}
		{% assign codeLang      = "fr-Fr" %}
		{% assign langVersion   = "english version" %}
		{% assign compliance    = "qualité" %}
		{% assign compatibility = "compatibilité" %}
{% endcase %}

{% endcapture %}
{% assign logTranslation = noLogTranslation %}

