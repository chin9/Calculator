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

// KEEPING TRACK

const numDisplay = document.getElementById('number');
var prevOp = "none"
var prevValue = 0;
var isLastClickAnOperation = false;
const display = document.getElementById('number-display');
const calculator = document.getElementById('calculator');
const keypad = document.getElementById('keypad-container');


// HELPER
// function checkWidth() {
//        if (numDisplay.offsetWidth >= 
//     display.offsetWidth - 10) {
//         // console.log('succeed');

//         let displayHeight = display.offsetHeight;
//         display.style.height = `${displayHeight + 80}px`;

//         let newDisplayHeight = display.offsetHeight;
//         let calculatorHeight = calculator.offsetHeight;
//         let keypadHeight = keypad.offsetHeight;
//         calculator.style.height = `${newDisplayHeight + keypadHeight + 10}px`;

//     } 
// }

// BUTTONS

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
    numDisplay.textContent = '0';
})

const zeroButton = document.getElementById('0');
zeroButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '0';
        isLastClickAnOperation = false;
    } else {
           if (numDisplay.textContent == '0') {
        //do nothing
    } else {
        numDisplay.textContent += '0';
    }
}
})

const oneButton = document.getElementById('1');
oneButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '1';
        isLastClickAnOperation = false;
    } else {
            if (numDisplay.textContent == '0') {
        numDisplay.textContent = '1';
    } else {
    numDisplay.textContent += '1';
    }
    }
})

const twoButton = document.getElementById('2');
twoButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '2';
        isLastClickAnOperation = false;
    } else {
        if (numDisplay.textContent == '0') {
            numDisplay.textContent = '2';
        } else {
        numDisplay.textContent += '2';
        }
    }

})

const threeButton = document.getElementById('3');
threeButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '3';
        isLastClickAnOperation = false;
    } else {
            if (numDisplay.textContent == '0') {
        numDisplay.textContent = '3';
    } else {
    numDisplay.textContent += '3';
    }
    }

})

const fourButton = document.getElementById('4');
fourButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '4';
        isLastClickAnOperation = false;
    } else {
            if (numDisplay.textContent == '0') {
        numDisplay.textContent = '4';
    } else {
    numDisplay.textContent += '4';
    }
    }

})

const fiveButton = document.getElementById('5');
fiveButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '5';
        isLastClickAnOperation = false;
    } else {
            if (numDisplay.textContent == '0') {
        numDisplay.textContent = '5';
    } else {
    numDisplay.textContent += '5';
    }
    }

})

const sixButton = document.getElementById('6');
sixButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '6';
        isLastClickAnOperation = false;
    } else {
           if (numDisplay.textContent == '0') {
        numDisplay.textContent = '6';
    } else {
    numDisplay.textContent += '6';
    } 
    }

})

const sevenButton = document.getElementById('7');
sevenButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '7';
        isLastClickAnOperation = false;
    } else {
            if (numDisplay.textContent == '0') {
        numDisplay.textContent = '7';
    } else {
    numDisplay.textContent += '7';
    }
    }

})

const eightButton = document.getElementById('8');
eightButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '8';
        isLastClickAnOperation = false;
    } else {
           if (numDisplay.textContent == '0') {
        numDisplay.textContent = '8';
    } else {
    numDisplay.textContent += '8';
    } 
    }
})

const nineButton = document.getElementById('9');
nineButton.addEventListener('click', function() {
    if (isLastClickAnOperation) {
        prevValue = numDisplay.textContent;
        numDisplay.textContent = '9';
        isLastClickAnOperation = false;
    } else {
           if (numDisplay.textContent == '0') {
        numDisplay.textContent = '9';
    } else {
    numDisplay.textContent += '9';
    } 
    }

})

const dotButton = document.getElementById('dot');
dotButton.addEventListener('click', function() {

    if (!numDisplay.textContent.includes('.')) {
    numDisplay.textContent += '.';
}
})

function performDivision(currentNum) {
    if (currentNum == 0) {
        document.getElementById('message').textContent = 
        'Division by a zero? Are you sure about that?'
        return 0;
    } else {
        return prevValue / currentNum;
    }
}


function calculateNewNum(currentNum) {
    switch(prevOp) {
        case 'none': return currentNum;
        case 'plus': return Number(prevValue) + Number(currentNum);
        case 'minus': return prevValue - currentNum;
        case 'multiply': return prevValue * currentNum;
        case 'divide': return performDivision(currentNum);
    }
}

const plusButton = document.getElementById('plus');
plusButton.addEventListener('click', function() {
    let currentNum = Number(numDisplay.textContent);
    let newNum = calculateNewNum(currentNum);
    prevOp = 'plus';
    prevValue = newNum;
    numDisplay.textContent = newNum;
    isLastClickAnOperation = true;
})

const minusButton = document.getElementById('minus');
minusButton.addEventListener('click', function() {
    let currentNum = Number(numDisplay.textContent);
    let newNum = calculateNewNum(currentNum);
    prevOp = 'minus';
    prevValue = newNum;
    numDisplay.textContent = newNum;
    isLastClickAnOperation = true;
})

const multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener('click', function() {
    let currentNum = Number(numDisplay.textContent);
    let newNum = calculateNewNum(currentNum);
    prevOp = 'multiply';
    prevValue = newNum;
    numDisplay.textContent = newNum;
    isLastClickAnOperation = true;
})

const divideButton = document.getElementById('divide');
divideButton.addEventListener('click', function() {
    let currentNum = Number(numDisplay.textContent);
    let newNum = calculateNewNum(currentNum);
    prevOp = 'divide';
    prevValue = newNum;
    numDisplay.textContent = newNum;
    isLastClickAnOperation = true;
})

const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', function() {
    let currentNum = Number(numDisplay.textContent);
    let newNum = calculateNewNum(currentNum);
    prevOp = 'none';
    prevValue = newNum;
    numDisplay.textContent = newNum;
})














