let months = [
    "Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" 
]
let months_letter = [
    "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D" 
]
function loadMonth() {
    let month = ""
    for (let i = 0; i < months.length;i++) {
        month += `
        <div class="month" id="month${i}"  onclick="showMonth(${i})">
            <p>${months_letter[i]}</p>
        </div>`;
    }
    document.getElementById('months').innerHTML = month;
}
loadMonth();
showMonth()
function showMonth(month = new Date().getMonth()) {
    for (let i = 0; i < months.length; i++) {
        document.getElementById(`month${i}`).classList.remove('activeMonth')
        
    }
    document.getElementById('chosenMonth').innerHTML = months[month]
    document.getElementById(`month${month}`).classList.add("activeMonth");
}