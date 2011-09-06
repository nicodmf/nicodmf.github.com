{% capture logTranslation %}

{% if lang == null %}{% include translation.markdown %}{% endif %}

{% if lang == "fr" %}
	{% capture text %}
	Ce site est destiné à présenté les différentes interfaces modules et bout de code produit sur github. Il est écrit à l'aide de jekyll.
	{% endcapture %}
	{% assign posted = "Posté le" %}
{% else %}
	{% capture text %}
	This website is destined to presentate the different interfacaces and coding part make on github. It is write with Jekyll.
	{% endcapture %}
	{% assign posted = "Posted the" %}
{% endif %}

{% endcapture %}
{{text}}
