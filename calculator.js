function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) * Number(b);
}

function operate(operator, a, b) {
    let result;
    switch(operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
    }
    return result;
}

const enteredValues = [];

function updateEntered(btnValue) {
    console.log(btnValue);
    if (Number(btnValue)) {
        enteredValues.push(Number(btnValue));
    } else {
        enteredValues.push(btnValue);
    }
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('#calc-display').textContent = enteredValues.join('');
}

const buttons = document.querySelectorAll('.calc-btn');

buttons.forEach(button => {
    button.addEventListener('click', (event) => updateEntered(event.currentTarget.textContent));
});