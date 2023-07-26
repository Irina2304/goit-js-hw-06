const input = document.querySelector("#validation-input");
const currentLength = Number(input.dataset.length);

input.addEventListener("blur", isValidForm);

function isValidForm(evt) {
    const inputText = evt.currentTarget.value;
    if (inputText.length === currentLength) {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}