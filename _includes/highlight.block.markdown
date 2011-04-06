{% if blockcode = null %}
{% assign blockcode = 1 %}
assign block
{% else %}
assign block else
{% assign blockcode = blockcode|plus:1 %}
{% endif %}
