let months = [
    "Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" 
]
let months_letter = [
    "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" 
]
let category = [
  {
    name: "Salat",
    img: "Pfad",
    months: [1, 7, 8, 9]
  },
  {
    name: "Kräuter",
    img: "Pfad",
    months: [2, 3, 4, 5, 6], 
    plants: herbs
  },
  {
    name: "Gemüse",
    img: "Pfad",
    months: [3, 4, 5], 
    plants: vegetables
  },
  {
    name: "Chili",
    img: "Pfad",
    months: [4, 5],
    plants: chili
  },
  {
    name: "Tomaten",
    img: "Pfad",
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
    document.getElementById('chosenMonth').innerHTML = months[month]
    document.getElementById(`month${month}`).classList.add("activeMonth");

    showProductsForMonth(month);
}

function showProductsForMonth(month) {
    let productList = document.getElementById("productList");
    let output = "";
    for (let i = 0; i < category.length; i++) {
        let isRightMonth = false;
        for (let j = 0; j < category[i].months.length && !isRightMonth; j++) {
            if(month == category[i].months[j]){
                isRightMonth = true;
            }
        }
        if(isRightMonth){
            console.log(category[i].name)
        }
        
    }


}
