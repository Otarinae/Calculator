const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");

const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnEqual = document.getElementById("btnEqual");

let firstOperand;
let operator;
let secondOperand;

function getOperand(event) {
  if (firstOperand !== undefined && operator !== undefined) {
    secondOperand = event.target.textContent;
  } else {
    firstOperand = event.target.textContent;
  }
}

function getOperator(event) {
  operator = event.target.textContent;
}

function getResult() {
  let result = eval(
    String(firstOperand) + String(operator) + String(secondOperand)
  );
  firstOperand = undefined;
  operator = undefined;
  secondOperand = undefined;
  console.log(result);
}

btn0.addEventListener("click", getOperand);
btn1.addEventListener("click", getOperand);
btn2.addEventListener("click", getOperand);
btn3.addEventListener("click", getOperand);
btn4.addEventListener("click", getOperand);
btn5.addEventListener("click", getOperand);
btn6.addEventListener("click", getOperand);
btn7.addEventListener("click", getOperand);
btn8.addEventListener("click", getOperand);
btn9.addEventListener("click", getOperand);

btnPlus.addEventListener("click", getOperator);
btnMinus.addEventListener("click", getOperator);
btnMultiply.addEventListener("click", getOperator);
btnDivide.addEventListener("click", getOperator);
btnEqual.addEventListener("click", getResult);
