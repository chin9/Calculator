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

function operate(operator, a, b) {
    switch(operator) {
        case "add": return add(a, b);
        case "subtract": return subtract(a, b);
        case "multiply": return multiply(a, b);
        case "divide": return divide(a, b);
    }
}

const numDisplay = document.getElementById('number');

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
    numDisplay.textContent = '';
})

const zeroButton = document.getElementById('0');
zeroButton.addEventListener('click', function() {
    numDisplay.textContent += '0';
})

const oneButton = document.getElementById('1');
oneButton.addEventListener('click', function() {
    numDisplay.textContent += '1';
})

const twoButton = document.getElementById('2');
twoButton.addEventListener('click', function() {
    numDisplay.textContent += '2';
})

const threeButton = document.getElementById('3');
threeButton.addEventListener('click', function() {
    numDisplay.textContent += '3';
})

const fourButton = document.getElementById('4');
fourButton.addEventListener('click', function() {
    numDisplay.textContent += '4';
})

const fiveButton = document.getElementById('5');
fiveButton.addEventListener('click', function() {
    numDisplay.textContent += '5';
})

const sixButton = document.getElementById('6');
sixButton.addEventListener('click', function() {
    numDisplay.textContent += '6';
})

const sevenButton = document.getElementById('7');
sevenButton.addEventListener('click', function() {
    numDisplay.textContent += '7';
})

const eightButton = document.getElementById('8');
eightButton.addEventListener('click', function() {
    numDisplay.textContent += '8';
})

const nineButton = document.getElementById('9');
nineButton.addEventListener('click', function() {
    numDisplay.textContent += '9';
})

const dotButton = document.getElementById('dot');
dotButton.addEventListener('click', function() {
    // numDisplay.textContent += '.';

    if (!numDisplay.textContent.includes('.')) {
    numDisplay.textContent += '.';
}
})