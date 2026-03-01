// ............Basic Count App

// Your counter should:

        // Display a number (start at 0)

        // Increase when clicking "+"

        // Decrease when clicking "–"

        // Reset to 0 when clicking "Reset"

let number = document.getElementById('number')
let increase = document.getElementById('increase')
let decrease = document.getElementById('decrease')
let reset = document.getElementById('reset')

let storeCount = 0;

increase.addEventListener('click', () => {
    storeCount++
    count.innerText = storeCount
})
decrease.addEventListener('click', () => {
    storeCount--
    count.innerText = storeCount
})
reset.addEventListener('click', () => {
    count.innerText = 0
})

