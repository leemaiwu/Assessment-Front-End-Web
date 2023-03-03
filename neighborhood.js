let generateButton = document.querySelector('#generate-btn')

const restaurantList = ["Yummy's Korean Barbeque", "ASA Ramen", "Asado Argentinian Grill", "In-N-Out", "Waffle Love", "The Chocolate", "Tea Mate"]

function generateRandomRes() {
    const random = Math.floor(Math.random() * restaurantList.length)
    alert(`One of my favs! Try ${restaurantList[random]} tonight!`)
}

generateButton.addEventListener('click', generateRandomRes)