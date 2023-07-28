const form = document.querySelector('.login-form')

form.addEventListener('submit', getValues)

function getValues(evt) {
    evt.preventDefault()
    const {
        elements: { email, password },
    } = evt.currentTarget

    if (email.value === "" || password.value === "") {
        return alert("All fields must be filled!")
    }
    const userValues = { email: email.value, password: password.value }
    
    console.log(userValues);
    evt.currentTarget.reset()
}
