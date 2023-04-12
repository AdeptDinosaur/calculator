function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let operator = "";
let num1 = 0;
let num2 = 0;

function operate(operator, num1, num2) {
    if(operator === "+"){
        add(num1, num2);
    } else if (operator === "-"){
        subtract(num1, num2);
    } else if (operator === "*"){
        multiply(num1, num2);
    } else if (operator === "/"){
        divide(num1, num2);
    }
}
const display = document.getElementById("display");
let currentValue = "";

const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    currentValue += "0"
    display.innerHTML = currentValue;
})

const one = document.getElementById("one");
one.addEventListener("click", () => {
    currentValue += "1"
    display.innerHTML = currentValue;
})

const two = document.getElementById("two");
two.addEventListener("click", () => {
    currentValue += "2"
    display.innerHTML = currentValue;
})

const three = document.getElementById("three");
three.addEventListener("click", () => {
    currentValue += "3"
    display.innerHTML = currentValue;
})

const four = document.getElementById("four");
four.addEventListener("click", () => {
    currentValue += "4"
    display.innerHTML = currentValue;
})

const five = document.getElementById("five");
five.addEventListener("click", () => {
    currentValue += "5"
    display.innerHTML = currentValue;
})

const six = document.getElementById("six");
six.addEventListener("click", () => {
    currentValue += "6"
    display.innerHTML = currentValue;
})

const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    currentValue += "7"
    display.innerHTML = currentValue;
})

const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    currentValue += "8"
    display.innerHTML = currentValue;
})

const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    currentValue += "9"
    display.innerHTML = currentValue;
})