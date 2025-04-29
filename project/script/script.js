function showOOEProducts() {
  let output = "";
  for (let i = 0; i < ooeGaertnerProdukte.length; i++) {
    let category = `${ooeGaertnerProdukte[i].kategorie[0]}, ${ooeGaertnerProdukte[i].kategorie[0]}`;
    output += `<div class="product">
      <i class="fa fa-shopping-cart cart-icon" onclick="addItemToList('${ooeGaertnerProdukte[i].name}')"></i>
      <img src="${ooeGaertnerProdukte[i].img}" alt="OÖ Gärtner Produkt">
      <h2>${ooeGaertnerProdukte[i].name}</h2>
      <p>${category}</p>
    </div>`
    
  }
  document.getElementById('products').innerHTML = output
}
showArray('herbs')
function showArray(category) {
  let result = [];

  switch (category) {
      case 'herbs':
          result = herbs;
          break;
      case 'chili':
          result = chili;
          break;
      case 'vegetables':
          result = vegetables;
          break;
      case 'tomatoes':
          result = tomatoes;
          break;
      case 'ooeGaertnerProdukte':
          result = ooeGaertnerProdukte;
          break;
      default:
          result = [];
  }

  console.log(result);
  let output = ""
  for (let i = 0; i < result.length; i++) {
    output += `
    <div class="product">
      <i class="fa fa-shopping-cart cart-icon" onclick="addItemToList('${result[i].name}')"></i>
      <img src="${result[i].img}">
      <h2>${result[i].name}</h2>
      <!--${result[i].beschreibung}-->
    </div>`;
    
  }
  document.getElementById('products').innerHTML = output
}

function addItemToList(productName) {
  let shoppingList = JSON.parse(localStorage.getItem('products')) || [];

  if (!shoppingList.includes(productName)) {
    shoppingList.push(productName);
    localStorage.setItem('products', JSON.stringify(shoppingList));
    console.log(`Produkt "${productName}" wurde zur Einkaufsliste hinzugefügt.`);
  } else {
    console.log(`Produkt "${productName}" ist bereits in der Einkaufsliste.`);
  }

}
function showShoppingList() {
  let shoppingList = JSON.parse(localStorage.getItem('products')) || [];
  let output = "";

  shoppingList.forEach(item => {
    output += `<div>${item}</div>`;
  });

  document.getElementById('products').innerHTML = output;
}
