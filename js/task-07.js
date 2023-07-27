const inputControl = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

inputControl.addEventListener("input", getNewWidth);

function getNewWidth(evt) {
    spanText.style.fontSize = `${evt.currentTarget.value}px`;
}
