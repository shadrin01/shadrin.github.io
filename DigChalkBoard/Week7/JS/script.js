document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([50.4501, 30.5234], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([50.4501, 30.5234]).addTo(map);
    marker.bindPopup("<b>Welcome to Kyiv!</b><br>This is Maidan Nezalezhnosti (Independence Square).").openPopup();

    var circle = L.circle([50.4501, 30.5234], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);    
    circle.bindPopup("You are within 300 meters from Maidan Nezalezhnosti.");

    var polygon = L.polygon([
        [50.4510, 30.5244],
        [50.4495, 30.5219],
        [50.4505, 30.5260]
    ]).addTo(map);
    polygon.bindPopup("A polygon covering various parts of Central London.");
});
