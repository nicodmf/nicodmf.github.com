{% capture logTranslation %}

{% if lang == null %}{% include translation.markdown %}{% endif %}

{% if lang == "fr" %}
	{% capture text %}
	Ce site est destin� � pr�sent� les diff�rentes interfaces modules et bout de code produit sur github. Il est �crit � l'aide de jekyll.
	{% endcapture %}
	{% assign posted = "Post� le" %}
{% else %}
	{% capture text %}
	This website is destined to presentate the different interfacaces and coding part make on github. It is write with Jekyll.
	{% endcapture %}
	{% assign posted = "Posted the" %}
{% endif %}

{% endcapture %}
{{text}}
