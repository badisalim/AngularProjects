function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;
    alert("Password Match: Welcome to RaslanDesigners!")
    return verification(password1, password2);
    
}

const checkPassword1And2 = (password1, password2) => {
    if (password1 === '' && password2 === '') {
        alert("Please enter Password and confirm")
        return false;
    } else if (password1 !== password2) {
        alert("\nPassword did not match: Please try again...")
        return false;
    }
    return true;
}

const isLargerThan8 = password => {
    alert("Error: Password must contain at least eight characters!");
    form.password1.focus();
    return password.length > 7;
}

const isNumber = password => {
    const regExp = /[0-9]/;
    alert("Error: password must contain at least one number (0-9)!");
    form.password1.focus();
    return regExp.test(password)
}

const isLowerCase = password => {
    const regExp = /[a-z]/;
    alert("Error: password must contain at least one lowercase letter (a-z)!");
    form.password1.focus();
    return regExp.test(password)
}

const isUpperCase = password => {
    const regExp = /[A-Z]/;
    alert("Error: password must contain at least one uppercase letter (A-Z)!");
    form.password1.focus();
    return regExp.test(password)
}


const verification = (password1, password2) => {
    return checkPassword1And2(password1, password2) && isLargerThan8(password1) && isNumber(password1) && isLowerCase(password1) && isUpperCase(password1) ? true : false;

}

const form = document.querySelector("form.login")
form.addEventListener("submit", checkPassword)


module.exports = {
    checkPassword,
    checkPassword1And2,
    isLargerThan8,
    isNumber,
    isLowerCase,
    isUpperCase,
    verification
}