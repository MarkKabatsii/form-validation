const form = document.querySelector('#form')
const messageContainer = document.querySelector('.message-container')
const message = document.querySelector('#message')

let isValid = false
let passwordMatch = false

function isFromNotValid(text) {
    message.textContent = text
    messageContainer.style.borderColor = 'red'
    messageContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
    messageContainer.style.color = 'red'
}

function isFormValid(text='Don\'t Hesitate!') {
    message.textContent = text
    messageContainer.style.borderColor = 'green'
    messageContainer.style.backgroundColor = 'rgba(0, 128, 0, 0.2)'
    messageContainer.style.color = 'green'
    form.elements.password1.style.borderColor = 'green'
    form.elements.password2.style.borderColor = 'green'
}

function validateForm() {
    isValid = form.checkValidity()
    console.log(isValid)
    if(!isValid) {
        isFromNotValid("Please fill out all fields")
        return
    }
    if(form.elements.password1.value === form.elements.password2.value) {
        passwordMatch = true
        isFormValid()
    }else {
        passwordMatch = false
        isFromNotValid("Make sure passwords match")
        form.elements.password1.style.borderColor = 'red'
        form.elements.password2.style.borderColor = 'red'
        return
    }
    if(isValid && passwordMatch) {
        isFormValid('Register Successful')
    }
}

function storeFormData() {
    const user = {
        name: form.elements.name.value,
        phone: form.elements.phone.value,
        mail: form.elements.mail.value,
        website: form.elements.website.value,
        password: form.elements.password2.value,
    }
}

function processFormData(event) {
    event.preventDefault()
    validateForm()
    if(isValid && passwordMatch) {
        storeFormData();
    }
}



// Event Listener
form.addEventListener('submit', processFormData)