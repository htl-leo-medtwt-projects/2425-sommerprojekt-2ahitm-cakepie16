let months = [
    "Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" 
]
let months_letter = [
    "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" 
]
let category = [
  {
    name: "Salat",
    img: null,
    months: [1, 7, 8, 9]
  },
  {
    name: "Kräuter",
    img: "../img/kraeuter.png",
    months: [2, 3, 4, 5, 6], 
    plants: herbs
  },
  {
    name: "Gemüse",
    img: "../img/gemuese.png",
    months: [3, 4, 5], 
    plants: vegetables
  },
  {
    name: "Chili",
    img: "../img/chili.png",
    months: [4, 5],
    plants: chili
  },
  {
    name: "Tomaten",
    img: "../img/tomaten.png",
    months: [4, 5], 
    plants: tomatoes
  }
]
function loadMonths() {
    let month = ""
    for (let i = 0; i < months.length;i++) {
        month += `
        <div class="month" id="month${i}"  onclick="showMonth(${i})">
            <p>${months_letter[i]}</p>
        </div>`;
    }
    document.getElementById('months').innerHTML = month;
}
loadMonths();
showMonth()

function showMonth(month = new Date().getMonth()) {
    for (let i = 0; i < months.length; i++) {
        document.getElementById(`month${i}`).classList.remove('activeMonth')
    }
    document.getElementById(`month${month}`).classList.add("activeMonth");

    showProductsForMonth(month);
}

function showProductsForMonth(month) {
    let productList = document.getElementById("productList");
    let output = "";

    for (let i = 0; i < category.length; i++) {
        if (category[i].months.includes(month)) {
            if(category[i].img == null){
                output += `
                <div class="category-card">
                    <h3>${category[i].name}</h3>
                </div>
            `;
            }
            else{
                output += `
                    <div class="category-card" onclick="showPopup(${i})">
                        <img src="${category[i].img}" alt="${category[i].name}" class="category-img" />
                        <h3>${category[i].name}</h3>
                    </div>
                    `;
            }
            
        }
    }

    productList.innerHTML = output || "<p>Keine passenden Produkte für diesen Monat gefunden.</p>";
}
function showPopup(index) {
    let cat = category[index];
    document.getElementById("modalTitle").textContent = cat.name;

    let plantHTML = "";
    if (cat.plants && cat.plants.length > 0) {
        for (let plant of cat.plants) {
            plantHTML += `
                <div class="plant">
                    <img src="${plant.img}" alt="${plant.name}" />
                    <p>${plant.name}</p>
                </div>
            `;
        }
    }

    document.getElementById("modalPlants").innerHTML = plantHTML;
    document.getElementById("plantModal").style.display = "block";
}
document.getElementById("closeModal").onclick = function () {
    document.getElementById("plantModal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("plantModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


