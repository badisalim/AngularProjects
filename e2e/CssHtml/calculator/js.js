function sum() {
    let x = Number(window.text.value);
    let y = Number(window.text1.value);
    let cal = x + y;
    document.getElementById("write").innerHTML = Number(cal);
}

function minus() {
    let x = window.text.value;
    let y = window.text1.value;
    let cal = x - y;
    document.getElementById("write").innerHTML = cal;
}

function multiply() {
    let x = window.text.value;
    let y = window.text1.value;
    let cal = x * y;
    document.getElementById("write").innerHTML = cal;
}

function devide() {
    let x = window.text.value;
    let y = window.text1.value;
    let cal = x / y;
    document.getElementById("write").innerHTML = cal;
}