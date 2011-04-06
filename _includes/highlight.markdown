{% capture lines %}{% for line in code %}{% if forloop.rindex > 3 %}<div>{{ forloop.index }}</div>{% endif %}{% endfor %}{% endcapture %}
<table class="highlightcode">
	<tr>
		<td class="linenumber">{{ lines }}</td>
		<td class="linecode">{{ code }}</td>
	</tr>
</table>
