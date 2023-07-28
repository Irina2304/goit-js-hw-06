function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const mainDiv = document.querySelector("#controls")
const box = document.querySelector("#boxes")


mainDiv.children[1].addEventListener("click", addDiv)
mainDiv.children[2].addEventListener("click", destroyBoxes)


function addDiv() {
  let amount = mainDiv.children[0].value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const list = [];
  
  for ( let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div")
    div.style.width = `${30 + 10 * i}px`;
    div.style.height = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    list.push(div);
  }

  box.append(...list);
}

function destroyBoxes() {
  box.innerHTML = ''
}
