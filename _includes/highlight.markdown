{% capture lines %}{% for line in code %}{% if forloop.rindex > 4 %}<div>{{ forloop.index }}</div>{% endif %}{% endfor %}{% endcapture %}
<table class="highlightcode">
	<tr>
		<td class="linenumber">{{ lines }}</td>
		<td class="linecode">{{ code }}</td>
	</tr>
</table>
