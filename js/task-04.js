const value = document.querySelector("#value")
const btnPlus = document.querySelector("button[data-action='increment']")
const btnMinus = document.querySelector("button[data-action='decrement']")

let counterValue = 0

btnPlus.addEventListener("click", clickPlus)
btnMinus.addEventListener("click", clickMinus)


function clickPlus() {
    counterValue += 1;
    value.textContent = counterValue;
}

function clickMinus() {
    counterValue -= 1;
    value.textContent = counterValue;
}
