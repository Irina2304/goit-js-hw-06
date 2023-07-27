function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btn = document.querySelector('.change-color')
const body = document.querySelector('body')
const colorName = document.querySelector('.color')

btn.addEventListener("click", getNewColor)

function getNewColor(evt) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorName.textContent = color;
}
