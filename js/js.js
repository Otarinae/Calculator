let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnDivide = document.getElementById("btnDivide");
let btnMultiply = document.getElementById("btnMultiply");
let btnEqual = document.getElementById("btnEqual");

let operand1;
let operator;
let operand2;

function getOperand(event) {
  if (operand1 !== undefined && operator !== undefined) {
    operand2 = event.target.textContent;
  } else {
    operand1 = event.target.textContent;
  }
}

function getOperator(event) {
  operator = event.target.textContent;
}

function getResult() {
  let result = eval(String(operand1) + String(operator) + String(operand2));
  operand1 = undefined;
  operator = undefined;
  operand2 = undefined;
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
btnDivide.addEventListener("click", getOperator);
btnMultiply.addEventListener("click", getOperator);
btnEqual.addEventListener("click", getResult);
