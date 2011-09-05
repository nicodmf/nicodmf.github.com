{% capture logTranslation %}

{% if lang == null %}{% include translation.markdown %}{{ nologTranslation }}{% endif %}

{% if lang == "fr" %}
	{% assign str_comments = "Commentaires" %}
	{% assign str_archive  = "Archives" %}
	{% assign str_carchive = "Archives complètes" %}
	{% assign str_journal  = "Journal" %}
	{% assign str_about	= "A propos" %}
{% else %}
	{% assign str_comments = "Comments" %}
	{% assign str_archive  = "Archive" %}
	{% assign str_carchive = "Complete archive" %}
	{% assign str_journal  = "Journal" %}
	{% assign str_about	= "About" %}
{% endif %}

{% endcapture %}

{% capture log %}
{% assign post = null %}
 
{% for one_post in site.posts %}
	{% if post == null %}
		{% assign cats = false %}
		{% for cat in one_post.categories %}
			{% if cat == 'module' or cat == 'link' %}
				{% assign cats = true %}
			{% endif %}
		{% endfor %}		
		{% if one_post.lang == page.lang  %}
			{% if cats == false %}
				{% capture captured %}					
<div class="entry">
<a href='{{one_post.url}}'>{{one_post.title}}</a>
=================================================

	<div class="content-entry">
		{{ one_post.content }}
		<a href="{{ site.url }}/{{ one_post.url }}#disqus_thread" data-disqus-identifier="{{ one_post.url }}">{{ str_comments }}</a>
	</div>
</div>
{% endcapture %}
{% assign post = captured %}
			{% endif %}
		{% endif %}
	{% endif %}
{% endfor %}
{% endcapture %}
{{ post }}

{% include page_archives.html %}
 
{{ str_about }}
=============== 
{% include about.markdown %}