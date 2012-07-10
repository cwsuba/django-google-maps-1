var {{ map_var }} = new google.maps.Map(document.getElementById('{{ element_id }}'), {
    center: new google.maps.LatLng({{ latitude }}, {{ longitude }}),
    zoom: {{ zoom }},
    mapTypeId: {{ map_type }}
    {% include "quakeparser/templatetags/gmaps/kwargs.js" %}
});
