const firstOperand = [];
const secondOperand = [];
let operator = "";

const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {  
	return num1 - num2;
};

const multiply = function(num1, num2) { 
    return num1 * num2;
};

const divide = function(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2){
    const result = operator === '+' ? add(num1, num2) :
                   operator === '-' ? subtract(num1, num2) :
                   operator === '*' ? multiply(num1, num2) :
                                      divide(num1, num2);
    return result;
}

const display = document.querySelector('#display');
const numbers = document.querySelectorAll(".btn");

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        const number = button.textContent;
        if (operator === "") {
            firstOperand.push(number);
        } else {
            secondOperand.push(number);
        }
        const numberDiv = document.createElement('div');
        numberDiv.textContent = number;
        numberDiv.classList.add('exp');
        display.appendChild(numberDiv);
    });
});

const operators = document.querySelectorAll(".op");
operators.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        const operatorDiv = document.createElement('div');
        operatorDiv.textContent = operator;
        operatorDiv.classList.add('exp');
        display.appendChild(operatorDiv);
    });
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    const firstNum = parseInt(firstOperand.flat().join(''));
    const secondNum = parseInt(secondOperand.flat().join(''));
    const expression = document.querySelectorAll('.exp');
    expression.forEach(element => element.remove());
    const result = operate(operator, firstNum, secondNum);
    const resultDiv = document.createElement('div');
    resultDiv.textContent = result;
    resultDiv.classList.add('exp');
    display.appendChild(resultDiv);
    secondOperand.length = 0;
});

const AC = document.querySelector('#AC');
AC.addEventListener('click', () => {
    const expression = document.querySelectorAll('.exp');
    expression.forEach(element => element.remove());
    firstOperand.length = 0;
    secondOperand.length = 0;
    operator = "";
});
