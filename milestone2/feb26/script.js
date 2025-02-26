
// document.getElementById("firstname").addEventListener("invalid", (event) => {
//     event.target.setCustomValidity("This field is empty!")
// })

const form = document.getElementById("form")
const fullname = document.getElementById("fullname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const terms = document.getElementById("terms")
const sumbitBtn = document.getElementById("sumbitBtn")

function validateInput(element, regex, message) {
    let error = element.nextElementSibling;
    if (regex.test(element.value)) {
        // input is valid!
        error.style.display = "none"
        element.style.borderColor = "grey"
        return true
    } else {
        // if regex test didn't pass. Input is not valid
        error.textContent = message;
        error.style.display = "block"
        element.style.borderColor = "red"
        return false
    }
}



fullname.addEventListener("input", () => {
    // regex for valid
    validateInput(fullname, /[A-Za-z\s]{3,30}$/, "Name must be between 3 to 30 letters")
    // validateInput(fullname, /[0-9]+/, "Name can't contain a number")
})


email.addEventListener("input", () => {
    validateInput(email, /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, "Please enter a valid email address")
})

// password.addEventListener("input", () => {
//     validateInput(password,  , "")
//     validateInput(password,  , "")
//     validateInput(password,  , "")
// })

confirmPassword.addEventListener("input", () => {
    let error = confirmPassword.nextElementSibling;
    if (confirmPassword.value != password.value) {
        // passwords do not match
        error.textContent = "Passwords do not match!"
        error.style.display = "block"
        confirmPassword.style.borderColor = "red"
    } else {
        error.style.display = "none";
        confirmPassword.style.borderColor = "grey"
    }
})


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let error = terms.nextElementSibling;
    console.log(terms.value)
    if (!terms.checked) {
        error.textContent = "Please agree to the terms!"
        error.style.display = "block"
        return false
    } else {
        error.style.display = "none";
        return true
    }
})