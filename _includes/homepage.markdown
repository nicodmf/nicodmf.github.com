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
			{% if cat == 'module' or cat == 'link' or cat == 'tagpage' %}
				{% assign cats = true %}
			{% endif %}
		{% endfor %}		
		{% if one_post.lang == page.lang  %}
			{% if cats == false %}
			
				{% capture captured %}					
<div class="entry">

<h1><a href='{{one_post.url}}'>{{one_post.title}}</a></h1>

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

{% assign max = 2 %}
{% include page_archives.html %}

<a href="/pages/archives_{{page.lang}}">{{ str_carchive }}</a>
 
{{ str_about }}
=============== 
{% include about.markdown %}