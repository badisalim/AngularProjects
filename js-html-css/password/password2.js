// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// const name = [];
// readline.question(`What's your username?`, (username) => {
//             name.push(username)

//             console.log(username);
//             readline.question(`What's your password?`, (password1) => {
//                         name.push(password1)

//                         console.log(password1);

//                         readline.question(`confirmed password?`, (password2) => {
//                             name.push(password2)

//                             console.log(name)
//                             readline.close()
//------------------------------------------------------

const checkPassword = (password1, password2) => {
    if (password1 === '' && password2 === '') {
       console.log("Please enter Password")
        return false;
    } else if (password1 !== password2) {
        return false;
    }
    return true;
}

const isLargerThan8 = password => {
    return password.length > 8;
}

const isNumber = password => {
    const regExp = /[0-9]/;
    return regExp.test(password)
}

const isLowerCase = password => {
    const regExp = /[a-z]/;
    return regExp.test(password)
}
const isUpperCase = password => {
    const regExp = /[A-Z]/;
    return regExp.test(password)
}
const verification = (password1, password2) => {
    return checkPassword(password1, password2) && isLargerThan8(password1) && isNumber(password1) && isLowerCase(password1) && isUpperCase(password1) ? true : false;
}

console.log(verification("ll2lllllkL", "ll2lllllkL"))

module.exports = {
    checkPassword,
    isLargerThan8,
    isNumber,
    isLowerCase,
    isUpperCase,
    verification
}