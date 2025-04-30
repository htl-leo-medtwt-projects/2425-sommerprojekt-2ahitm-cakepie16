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

  let output = "";
  for (let i = 0; i < result.length; i++) {// onclick="showProduct(${result[i]})"
    output += `
      <div class="product">
        <i class="fa fa-shopping-cart cart-icon" onclick="addItemToList('${result[i].name}', '${category}')"></i>
        <div>
          <img src="${result[i].img}">
          <h2>${result[i].name}</h2>
        </div>
        <!--${result[i].beschreibung}-->
      </div>`;
  }
  document.getElementById('products').innerHTML = output;
}
function showProduct(product) {
  /*document.getElementById('products').innerHTML = `
      <div>
        <img src="${product.img}">
        <h2>${product.name}</h2>
        <p>${product.beschreibung}</p>
      </div>
  `;*/
}
function addItemToList(productName, category) {
  let shoppingList = JSON.parse(localStorage.getItem('products') || '[]');
  let found = false;

  for (let i = 0; i < shoppingList.length && !found; i++) {
    if (shoppingList[i].name === productName) {
      shoppingList[i].count++;
      found = true;
    }
  }

  if (!found) {
    shoppingList.push({ name: productName, count: 1, category: category });
  }

  localStorage.setItem('products', JSON.stringify(shoppingList));
  console.log(`Produkt "${productName}" hinzugefügt.`);
  showShoppingList()
}

function removeOne(productName) {
  let shoppingList = JSON.parse(localStorage.getItem('products') || '[]');

  for (let i = 0; i < shoppingList.length; i++) {
    if (shoppingList[i].name === productName) {
      shoppingList[i].count--;
      if (shoppingList[i].count <= 0) {
        shoppingList.splice(i, 1); 
      }
      break;
    }
  }

  localStorage.setItem('products', JSON.stringify(shoppingList));
  showShoppingList();
}

function removeAll(productName) {
  let shoppingList = JSON.parse(localStorage.getItem('products') || '[]');
  shoppingList = shoppingList.filter(function (item) {
    return item.name !== productName;
  });
  localStorage.setItem('products', JSON.stringify(shoppingList));
  showShoppingList();
}

function showShoppingList() {
  let shoppingList = JSON.parse(localStorage.getItem('products') || '[]');
  let output = `<h2>Einkaufsliste</h2>`;
  let total = 0;
  let totalItems = 0;

  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    let result = [];

    if (item.category === 'herbs') {
      result = herbs;
    } else if (item.category === 'chili') {
      result = chili;
    } else if (item.category === 'vegetables') {
      result = vegetables;
    } else if (item.category === 'tomatoes') {
      result = tomatoes;
    } else if (item.category === 'ooeGaertnerProdukte') {
      result = ooeGaertnerProdukte;
    }

    let product = undefined;
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (!found && result[j].name === item.name) {
        product = result[j];
        found = true;
      }
    }

    if (found) {
      let price = product.price;
      let image = product.img;
      let subtotal = price * item.count;
      total += subtotal;
      totalItems += item.count;

      output += `
        <div class="shopping-product">
          <img src="${image}" alt="${item.name}" class="shopping-img">
          <div>
            <div class="shopping-title">${item.name}</div>
            <div class="shopping-price">€ ${price}/Stk.</div>
          </div>
          <div class="shopping-count">
            <div class="add_remove" onclick="removeOne('${item.name}')">-</div>
            <div class="counter">${item.count}</div>
            <div class="add_remove" onclick="addItemToList('${item.name}', '${item.category}')">+</div>
            <div class="shopping-remove" onclick="removeAll('${item.name}')">x</div>
          </div>
          
        </div>`;
    }
  }

  output += `
    <div class="summary">
      <p>${totalItems} Produkte | <strong>€ ${total}</strong></p>
      <div class="button" onclick="showQRCode()">ABHOLEN</div>
      <div id="qrcode"></div>
    </div>`;

  document.getElementById('product_page').innerHTML = output;
}
function showQRCode() {
  let shoppingList = JSON.parse(localStorage['products'] || '[]');
  let data = JSON.stringify(shoppingList);

  document.getElementById("qrcode").innerHTML = "";

  new QRCode(document.getElementById("qrcode"), {
    text: data,
    width: 200,
    height: 200,
  });
}
