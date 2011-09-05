{% capture logTranslation %}

{% if lang == null %}{% include translation.markdown %}{{ nologTranslation }}{% endif %}

{% if lang == "fr" %}
	{% assign str_comments = "Commentaires" %}
	{% assign str_archive  = "Archives" %}
	{% assign str_carchive = "Archives complètes" %}
	{% assign str_journal  = "Journal" %}
	{% assign str_about    = "A propos" %}
{% else %}
	{% assign str_comments = "Comments" %}
	{% assign str_archive  = "Archive" %}
	{% assign str_carchive = "Complete archive" %}
	{% assign str_journal  = "Journal" %}
	{% assign str_about    = "About" %}
{% endif %}

{% endcapture %}


{{ str_journal }}
=================
{% capture log %}
{% assign post = null %}
 
{% for one_post in site.posts %}
	{% if post == null %}
1
        {% assign cats = false %}
2
        {% for cat in one_post.categories %}
2.1
			{% if cat == 'module' %}
2.2
                {% assign cats = true %}
2.3
            {% endif %}
2.4
        {% endfor %}		
3
        {% if one_post.lang == page.lang  %}
4
                {% if cats == false %}
5
					{% capture captured %}					
<div class="entry">
	<h2><a href='{{one_post.url}}'>{{one_post.title}}</a></h2>
	<div class="content-entry">
		{{ one_post.content }}
		<a href="{{ site.url }}/{{ one_post.url }}#disqus_thread" data-disqus-identifier="{{ one_post.url }}">{{ str_comments }}</a>
	</div>
</div>
{% endcapture %}
{% assign post = captured %}
6
                {% endif %}
7
        {% endif %}
	{% endif %}
{% endfor %}
{% endcapture %}
{{ log }}
{{ post }}

{% include page_archives.html %}
 
{{ str_about }}
=============== 
{% include about.markdown %}
