---
layout: default
title: Blog about projects and developpements present in git
---
 
# Journal
{% assign post = null %}
 
{% for p in site.posts %}
        {% assign cats = null %}

        {% for cat in p.categories %}
                {% assign cats = true %}
        {% endfor %}

        {% if post == null %}
                {% if cats == null %}
                        {% assign post = p %}
                {% endif %}
        {% endif %}
{% endfor %}
 
<div class="entry">
	<h2><a href='{{post.url}}'>{{post.title}}</a></h2>
	{{ post.content }}
	<a href="{{ site.url }}/{{ post.url }}#disqus_thread" data-disqus-identifier="{{ post.url }}">Comments</a>
</div>

<h2>Archives</h2>
<ul class="posts">
	{% for post in site.posts limit:5 %}
	<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
	{% endfor %}
	<li><a href="/pages/archives">Complete archive</a></li>
</ul>
 
# About
 
{% include about.markdown %}
