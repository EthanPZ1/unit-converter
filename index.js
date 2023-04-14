/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.getElementById("input")
let convertBtn = document.getElementById("convertBtn")
let lengthTxt = document.getElementById("lengthTxt")
let volumeTxt = document.getElementById("volumeTxt")
let massTxt = document.getElementById("massTxt")

convertBtn.addEventListener("click", function(){
    if (input.value === "") {} else {
    lengthTxt.textContent = `${input.value} meters = ${(input.value * 3.281).toFixed(3)} feet
    | ${input.value} feet = ${(input.value * 0.3048).toFixed(3)} meters`

    volumeTxt.textContent = `${input.value} liters = ${(input.value * 0.264).toFixed(3)} gallons
    | ${input.value} gallons = ${(input.value * 3.7854).toFixed(3)} liters`

    massTxt.textContent = `${input.value} kilos = ${(input.value * 2.204).toFixed(3)} pounds
    | ${input.value} pounds = ${(input.value / 2.205).toFixed(3)} kilos`
    }
})