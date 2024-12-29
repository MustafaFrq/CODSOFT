let currentInput = '';
let operator = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = String(number);
        resultDisplayed = false;
    } else {
        currentInput += String(number);
    }
    document.getElementById('result').value = currentInput;
}

function appendOperator(op) {
    if (operator && !resultDisplayed) {
        return;
    }
    if (currentInput === '') {
        return;
    }
    operator = op;
    currentInput += ' ' + op + ' ';
    document.getElementById('result').value = currentInput;
    resultDisplayed = false;
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        document.getElementById('result').value = currentInput;
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}
