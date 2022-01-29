// Operate function
const operate = (numX, numY, operator) => {

  if (operator == '+') {
    return add(numX, numY);
  } else if (operator == '-') {
    return subtract(numX, numY);
  } else if (operator == '*') {
    return multiply(numX, numY);
  }
};

// Basic math operations
const add = (x, y) => {
  return x + y;
};

const subtract = (x, y) => {
  return x - y;
};

const multiply = (x, y) => {
  return x * y;
};

const divide = (x, y) => {
  return x / y;
};

const numberButtons = document.querySelectorAll('[data-number]');

const operationButtons = document.querySelectorAll('[data-operation]');

const equalsButton = document.querySelector('[data-equals]');

const deleteButton = document.querySelector('[data-delete]');

const allClearButton = document.querySelector('[data-all-clear]');

const previousOperandTextElement = document.querySelector('[data-previous-operand]');

const currentOperandTextElement = document.querySelector('[data-current-operand]');