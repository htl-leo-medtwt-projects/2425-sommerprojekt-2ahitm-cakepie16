let markets = [
  {
    name: "Leondinger Wochenmarkt",
    weekday: "Samstag",
    time: "7:00 - 12:00",
    place: "Im Winter im Atrium des Rathauses - im Sommer am Stadtplatz",
    map: '<div id="map1"></div>'
  },
  {
    name: "Trauner Bauernmarkt",
    weekday: "Freitag",
    time: "13:00 - 17:00",
    place: "in Traun in der Linzer Straße – hinter dem Rathaus Traun",
    map: '<div id="map2"></div>'
  }
]
let output = ""
for (let i = 0; i < markets.length; i++) {
  output += `
    <div class="markt-box center">
        <h2>${markets[i].name}</h2>
        <p>jeden ${markets[i].weekday}</p>
        <p>${markets[i].time}</p>
        <p>${markets[i].place}</p>
        ${markets[i].map}
    </div>`;
  
}
document.getElementById('markets').innerHTML = output;
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
