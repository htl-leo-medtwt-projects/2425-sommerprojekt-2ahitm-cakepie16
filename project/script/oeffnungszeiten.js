var map = L.map('map').setView([48.216694, 14.085694], 17);

var marker = L.marker([48.216694, 14.085694]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 15,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//marker.bindPopup("Landgärtnerei Ehmeier").openPopup();

document.addEventListener('DOMContentLoaded', () => {
  let openingTimesElement = document.getElementById('aktuelle-oeffnungszeiten');

  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  let seasons = [
      {
          name: "January",
          months: [1],
          text: `
              <h3>Jänner:</h3>
              <table class="oeffnungszeiten-table">
                  <tr>
                      <td>Ganztags</td>
                      <td>Geschlossen</td>
                  </tr>
                  <tr>
                      <td colspan="2" class="info">Telefonische Voranmeldung möglich! (07243 57187)</td>
                  </tr>
              </table>
          `
      },
      {
          name: "Main Season",
          months: [2, 3, 4, 5],
          text: `
              <h3>1. Februar bis 29. Juni:</h3>
              <table class="oeffnungszeiten-table">
                  <tr>
                      <td>Montag bis Freitag</td>
                      <td>8:00 - 12:00 und 13:00 - 17:00</td>
                  </tr>
                  <tr>
                      <td>Samstag</td>
                      <td>8:00 - 12:00</td>
                  </tr>
                  <tr>
                      <td>Sonn- und Feiertage</td>
                      <td>Geschlossen</td>
                  </tr>
              </table>
          `
      },
      {
          name: "End of June",
          months: [6],
          specialRange: { from: 1, to: 29 },
          text: `
              <h3>1. Februar bis 29. Juni:</h3>
              <table class="oeffnungszeiten-table">
                  <tr>
                      <td>Montag bis Freitag</td>
                      <td>8:00 - 12:00 und 13:00 - 17:00</td>
                  </tr>
                  <tr>
                      <td>Samstag</td>
                      <td>8:00 - 12:00</td>
                  </tr>
                  <tr>
                      <td>Sonn- und Feiertage</td>
                      <td>Geschlossen</td>
                  </tr>
              </table>
          `
      },
      {
          name: "Summer",
          months: [6, 7, 8, 9],
          specialRange: { from: 30, to: 14 },
          text: `
              <h3>30. Juni bis 14. September:</h3>
              <table class="oeffnungszeiten-table">
                  <tr>
                      <td>Montag bis Samstag</td>
                      <td>8:00 - 12:00</td>
                  </tr>
                  <tr>
                      <td>Sonn- und Feiertage</td>
                      <td>Geschlossen</td>
                  </tr>
              </table>
          `
      },
      {
          name: "Autumn/Winter",
          months: [9, 10, 11, 12],
          specialRange: { from: 15, to: 31 },
          text: `
              <h3>15. September bis Ende Dezember:</h3>
              <table class="oeffnungszeiten-table">
                  <tr>
                      <td>Montag bis Freitag</td>
                      <td>8:00 - 12:00 und 13:00 - 17:00</td>
                  </tr>
                  <tr>
                      <td>Samstag</td>
                      <td>8:00 - 12:00</td>
                  </tr>
                  <tr>
                      <td>Sonn- und Feiertage</td>
                      <td>Geschlossen</td>
                  </tr>
              </table>
          `
      }
  ];

  let currentSeasonHTML = "<p>Keine Öffnungszeiten verfügbar.</p>";

  for (let season of seasons) {
      if (season.months.includes(month)) {
          let inSpecialRange = true;

          if (season.specialRange) {
              if (month === 6 && (day < season.specialRange.from || day > season.specialRange.to)) {
                  inSpecialRange = false;
              }
              if (month === 9 && day < season.specialRange.from) {
                  inSpecialRange = false;
              }
          }

          if (inSpecialRange) {
              currentSeasonHTML = season.text;
              break;
          }
      }
  }

  openingTimesElement.innerHTML = currentSeasonHTML;
});
