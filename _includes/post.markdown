<div class="post">
<h2><a href='{{post.url}}'>{{post.title}}</a></h2>
<div class="date">posted {{ post.date | date_to_string }}</div>

	<div class="entry">
	{{ content }}

	{% if post.link or post.mirror %}
	<p>
		{% if post.link %}
		<a href="{{ post.link }}">link</a>
		{% endif %}
		{% if post.mirror %}
		(<a href="{{ post.mirror }}">mirror</a>)
		{% endif %}
	</p>
	{% endif %}
	</div>

{% if post.topics %}
	<p>
	topics:
	{% for t in post.topics %}
	<a href='http://www.google.com/search?q={{ t | escape }}+site:nicodmf.github.com'>{{ t }}</a>{% if forloop.last == false %}, {% endif %}
	{% endfor %}
	</p>
{% endif %}

</div>