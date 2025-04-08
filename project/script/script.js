function showOOEProducts() {
  let output = "";
  for (let i = 0; i < ooeGaertnerProdukte.length; i++) {
    let category = `${ooeGaertnerProdukte[i].kategorie[0]}, ${ooeGaertnerProdukte[i].kategorie[0]}`;
    output += `<div class="product">
      <img src="${ooeGaertnerProdukte[i].img}" alt="OÖ Gärtner Produkt">
      <h2>${ooeGaertnerProdukte[i].name}</h2>
      <p>${category}</p>
    </div>`
    
  }
  document.getElementById('products').innerHTML = output
}