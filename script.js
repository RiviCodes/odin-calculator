class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()  // Default values when creating the calculator
  }

  // Main functions of the calculator

  clear() {   // Clear ALL the user inputs
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {  // Adds the clicked number to the output screen
    if (number === '.' && this.currentOperand.includes('.')) {  // User can only use one dot '.'
      return
    }
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) { // Picks the operator
    if (this.currentOperand === '') return  // Be sure operators cannot be used if there are no numbers clicked
    if (this.previousOperand !== '') {
      this.operate()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  operate() { // Picks the values and computates the result
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return

    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  updateDisplay() {  // Updates the values in the output screen
    this.currentOperandTextElement.innerText = this.currentOperand
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

const operationButtons = document.querySelectorAll('[data-operation]');
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

const equalsButton = document.querySelector('[data-equals]');
equalsButton.addEventListener('click', button => {
  calculator.operate()
  calculator.updateDisplay()
})

const deleteButton = document.querySelector('[data-delete]');
deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

const allClearButton = document.querySelector('[data-all-clear]');
allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

// Operands
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
