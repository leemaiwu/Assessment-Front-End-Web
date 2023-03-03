let colorButton = document.querySelector('#color')
let placeButton = document.querySelector('#place')
let ritualButton = document.querySelector('#ritual')

function clickedFavColor() {
    alert('Black, of course!')
}

function clickedFavPlace() {
    alert('London. I\'m meant to have afternoon tea every day.')
}

function clickedFavRitual() {
    alert('Each night when my husband and I watch our favorite shows.')
}

colorButton.addEventListener('click', clickedFavColor)
placeButton.addEventListener('click', clickedFavPlace)
ritualButton.addEventListener('click', clickedFavRitual)
