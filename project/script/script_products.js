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
  for (let i = 0; i < result.length; i++) {
    output += `
      <div class="product">
        <i class="fa fa-shopping-cart cart-icon" onclick="addItemToList('${result[i].name}', '${category}')"></i>
        <div onclick="openModal('${result[i].img}', '${result[i].name}', \`${result[i].beschreibung}\`)">
          <img src="${result[i].img}">
          <h2>${result[i].name}</h2>
        </div>
      </div>`;
  }
  
  document.getElementById('products').innerHTML = output;
}
function openModal(img, name, description) {
    document.getElementById('productModal').style.display = 'block';
    document.getElementById('modalImg').src = img;
    document.getElementById('modalTitle').innerHTML = name;
    document.getElementById('modalDescription').innerHTML = description;
}

document.querySelector(".close").onclick = function () {
  document.getElementById('productModal').style.display = 'none';
};

window.onclick = function (event) {
  let modal = document.getElementById('productModal');
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


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

function showShoppingList(externalList = null) {
  let shoppingList = externalList || JSON.parse(localStorage.getItem('products') || '[]');
  let output = `<h2>Einkaufsliste</h2>`;
  let total = 0;
  let totalItems = 0;

  for (let i = 0; i < shoppingList.length; i++) {
    let item = shoppingList[i];
    let result = [];

    switch (item.category) {
      case 'herbs': result = herbs; break;
      case 'chili': result = chili; break;
      case 'vegetables': result = vegetables; break;
      case 'tomatoes': result = tomatoes; break;
      case 'ooeGaertnerProdukte': result = ooeGaertnerProdukte; break;
    }

    let product = result.find(p => p.name === item.name);

    if (product) {
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
            ${externalList ? "" : `
              <div class="add_remove" onclick="removeOne('${item.name}')">-</div>
              <div class="counter">${item.count}</div>
              <div class="add_remove" onclick="addItemToList('${item.name}', '${item.category}')">+</div>
              <div class="shopping-remove" onclick="removeAll('${item.name}')">x</div>
            `}
            ${externalList ? `<div class="counter">${item.count}</div>` : ""}
          </div>
        </div>`;
    }
  }

  output += `
    <div class="summary">
      <p>${totalItems} Produkte | <strong>€ ${total}</strong></p>
      ${externalList ? "" : `<div class="button" onclick="showQRCode()">ABHOLEN</div>`}
      <div id="qrcode"></div>
    </div>`;

  document.getElementById('product_page').innerHTML = output;
}

function showQRCode() {
  let shoppingList = JSON.parse(localStorage.getItem('products') || '[]');
  let data = encodeURIComponent(JSON.stringify(shoppingList));

  let url = window.location.origin + window.location.pathname + '?json=' + data;

  document.getElementById("qrcode").innerHTML = "";

  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 200,
    height: 200,
  });
  console.log(url)
}