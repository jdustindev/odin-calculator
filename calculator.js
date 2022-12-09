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
    return Number(a) / Number(b);
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
    } else if (btnValue === 'C') {
        while(enteredValues.length > 0) {
            enteredValues.pop();
        }
    } else {
        enteredValues.push(btnValue);
    }
    if (btnValue === '=') {
        const result = calculate(enteredValues);
        while(enteredValues.length > 0) {
            enteredValues.pop();
        }
        enteredValues[0] = result;
    }

    if (parseValues(enteredValues).length === 4) {
        const result = calculate(enteredValues);
        const operator = parseValues(enteredValues)[3];
        while(enteredValues.length > 0) {
            enteredValues.pop();
        }
        enteredValues.push(result);
        enteredValues.push(operator);
    }
    updateDisplay();
}

function updateDisplay() {
    document.querySelector('#calc-display').textContent = enteredValues.join('');
}

function parseValues(values) {
    if (values.length === 1) {
        return values;
    }
    let number = '';
    let parsedValues = [];
    values.forEach((value) => {
        if (!isNaN(value)) {
            number += value;
        } else {
            parsedValues.push(number);
            parsedValues.push(value);
            number = '';
        }
    });
    return parsedValues;
}

function calculate(values) {
    const calcValues = parseValues(values);
    let result = Number(calcValues[0]);
    console.log(result);
    calcValues.forEach((value, index) => {
        if (index === calcValues.length - 1) {
            return;
        }
        switch (value) {
            case '+':
                result = add(result, Number(calcValues[index + 1]));
                break;
            case '-':
                result = subtract(result, Number(calcValues[index + 1]));
                break;
            case 'X':
                result = multiply(result, Number(calcValues[index + 1]));
                break;
            case '/':
                result = divide(result, Number(calcValues[index + 1]));
                break;
            case '=':
                break;
        }
    });
    return result;
}

const buttons = document.querySelectorAll('.calc-btn');

buttons.forEach(button => {
    button.addEventListener('click', (event) => updateEntered(event.currentTarget.textContent));
});