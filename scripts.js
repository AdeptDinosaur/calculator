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

let operator = null;
let num1 = null;
let num2 = null;
let currentValue = "";

function operate(operator, num1, num2) {
    document.getElementById("decimal").disabled = false;
    if(operator === "+"){
        return Math.round(add(num1, num2) * 10000) / 10000;
    } else if (operator === "-"){
        return Math.round(subtract(num1, num2) * 10000) / 10000;
    } else if (operator === "*"){
        return Math.round(multiply(num1, num2) * 10000) / 10000;
    } else if (operator === "/"){
        return Math.round(divide(num1, num2) * 10000) / 10000;
    }
    
}
const display = document.getElementById("display");


const zero = document.getElementById("zero");
zero.addEventListener("click", () => {
    currentValue += "0";
    display.innerHTML = currentValue;
})

const one = document.getElementById("one");
one.addEventListener("click", () => {
    currentValue += "1";
    display.innerHTML = currentValue;
})

const two = document.getElementById("two");
two.addEventListener("click", () => {
    currentValue += "2";
    display.innerHTML = currentValue;
})

const three = document.getElementById("three");
three.addEventListener("click", () => {
    currentValue += "3";
    display.innerHTML = currentValue;
})

const four = document.getElementById("four");
four.addEventListener("click", () => {
    currentValue += "4";
    display.innerHTML = currentValue;
})

const five = document.getElementById("five");
five.addEventListener("click", () => {
    currentValue += "5";
    display.innerHTML = currentValue;
})

const six = document.getElementById("six");
six.addEventListener("click", () => {
    currentValue += "6";
    display.innerHTML = currentValue;
})

const seven = document.getElementById("seven");
seven.addEventListener("click", () => {
    currentValue += "7";
    display.innerHTML = currentValue;
})

const eight = document.getElementById("eight");
eight.addEventListener("click", () => {
    currentValue += "8";
    display.innerHTML = currentValue;
})

const nine = document.getElementById("nine");
nine.addEventListener("click", () => {
    currentValue += "9";
    display.innerHTML = currentValue;
})

const decimal = document.getElementById("decimal");
decimal.addEventListener("click", () => {
    currentValue += ".";
    display.innerHTML = currentValue;
    if (currentValue.includes(".")) {
        document.getElementById("decimal").disabled = true;
    }

})

const del = document.getElementById("delete")
del.addEventListener("click", () => {
    currentValue = currentValue.substring(0, currentValue.length-1);
    display.innerHTML = currentValue;
})

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    document.getElementById("decimal").disabled = false;
    currentValue = "";
    num1 = null;
    num2 = null;
    operator = null;
    display.innerHTML = currentValue;
})

const subtraction = document.getElementById("subtract");
subtraction.addEventListener("click", () => {
    if (num1 !== null) {
        num2 = currentValue;
        currentValue = "";
        num1 = operate(operator, Number(num1), Number(num2))
        operator = "-";
        display.innerHTML = num1;
    } else {
        document.getElementById("decimal").disabled = false;
        num1 = currentValue;
        currentValue = "";
        operator = "-";
        display.innerHTML = num1;
    }
})

const multiplication = document.getElementById("multiply");
multiplication.addEventListener("click", () => {
    if (num1 !== null) {
        num2 = currentValue;
        currentValue = "";
        num1 = operate(operator, Number(num1), Number(num2))
        operator = "*";
        display.innerHTML = num1;
    } else {
        document.getElementById("decimal").disabled = false;
        num1 = currentValue;
        currentValue = "";
        operator = "*";
        display.innerHTML = num1;
    }
})

const division = document.getElementById("divide");
division.addEventListener("click", () => {
    if (num1 !== null) {
        num2 = currentValue;
        currentValue = "";
        num1 = operate(operator, Number(num1), Number(num2))
        operator = "/";
        display.innerHTML = num1;
    } else {
        document.getElementById("decimal").disabled = false;
        num1 = currentValue;
        currentValue = "";
        operator = "/";
        display.innerHTML = num1;
    }
})

const addition = document.getElementById("add");
addition.addEventListener("click", () => {
    if (num1 !== null) {
        num2 = currentValue;
        currentValue = "";
        num1 = operate(operator, Number(num1), Number(num2))
        operator = "+";
        display.innerHTML = num1;
    } else {
        document.getElementById("decimal").disabled = false;
        num1 = currentValue;
        currentValue = "";
        operator = "+";
        display.innerHTML = num1;
    }
})

const equals = document.getElementById("equals");
equals.addEventListener("click", () => {
    num2 = currentValue;
    display.innerHTML = operate(operator, Number(num1), Number(num2));
})

