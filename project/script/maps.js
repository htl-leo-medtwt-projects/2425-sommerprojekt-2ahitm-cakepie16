var map = L.map('map').setView([48.216694, 14.085694], 17);

var marker = L.marker([48.216694, 14.085694]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 15,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//marker.bindPopup("Landgärtnerei Ehmeier").openPopup();
