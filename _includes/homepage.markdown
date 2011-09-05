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
 
{% for p in site.posts %}
        {% assign cats = false %}

        {% for cat in p.categories %}
			{% if cat == 'module' %}
                {% assign cats = true %}
            {% endif %}
        {% endfor %}

        {% if post == null and ( p.lang == page.lang or p.lang == null ) %}
                {% if cats == null %}
                        {% assign post = p %}
                {% endif %}
        {% endif %}
{% endfor %}
{% endcapture %}


 
<div class="entry">
	<h2><a href='{{post.url}}'>{{post.title}}</a></h2>
	<div class="content-entry">
		{{ post.content }}
		<a href="{{ site.url }}/{{ post.url }}#disqus_thread" data-disqus-identifier="{{ post.url }}">{{ str_comments }}</a>
	</div>
</div>

{{ str_archive }}
=================
<ul class="posts">{% capture log %}

	{% assign nbposts = "5" %}

	{% assign ref = 0  %}
	{% assign lis = " " %}
	{% assign cats = true %}
	{% for post in site.posts %}
		{% assign nb = false %}
		{% assign rlang = false %}
		{% assign lang1 = false %}
		{% assign lang2 = false %}
		{% if ref != nbposts %}{% assign nb = true %}{% endif %}		
		{% if post.lang == page.lang %}{% assign lang1 = true %}{% endif %}
		{% if post.lang == null and page.lang == 'fr' %}{% assign lang2 = true %}{% endif %}
		{% if lang1 or lang2 %}{% assign rlang = true %}{% endif %}
		
		{% for cat in post.categories %}
			{% case cat %}
				{% when "tagpage" %} {% assign cats = false %}
				{% when "tags" %} {% assign cats = false %}
			{% endcase %}
		{% endfor %}

		{% if rlang and nb and cats %}
			{% capture refreal %}{{ ref|plus:1 }}{%endcapture%}
			{% assign ref = refreal %}
			{% capture lis %}{{ lis }}
	<li>
		<span class="date">{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
	</li>{% endcapture %}
	
		{% endif %}
	{% endfor %}
	{% endcapture %}{{ lis }}
	<li>
		<a href="/pages/archives_{{page.lang}}">{{ str_carchive }}</a>
	</li>
</ul>
 
{{ str_about }}
=============== 
{% include about.markdown %}
