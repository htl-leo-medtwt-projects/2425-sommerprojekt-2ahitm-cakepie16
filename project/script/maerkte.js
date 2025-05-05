// Erste Karte
var map1 = L.map('map1').setView([48.279167, 14.248083], 17);

var marker1 = L.marker([48.279167, 14.248083]).addTo(map1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 15,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map1);

// Zweite Karte
var map2 = L.map('map2').setView([48.221139, 14.239028], 17);

var marker2 = L.marker([48.221139, 14.239028]).addTo(map2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 15,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map2);
