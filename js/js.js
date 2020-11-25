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

let operator1;
let operand;
let operator2;

function getOperator(event) {
  if (operator1 !== undefined && operand !== undefined) {
    operator2 = event.target.textContent;
  } else {
    operator1 = event.target.textContent;
  }
}

function getOperand(event) {
  operand = event.target.textContent;
}

function getResult() {
  let result = eval(String(operator1) + String(operand) + String(operator2));
  operator1 = undefined;
  operand = undefined;
  operator2 = undefined;
  console.log(result);
}

btn0.addEventListener("click", getOperator);
btn1.addEventListener("click", getOperator);
btn2.addEventListener("click", getOperator);
btn3.addEventListener("click", getOperator);
btn4.addEventListener("click", getOperator);
btn5.addEventListener("click", getOperator);
btn6.addEventListener("click", getOperator);
btn7.addEventListener("click", getOperator);
btn8.addEventListener("click", getOperator);
btn9.addEventListener("click", getOperator);

btnPlus.addEventListener("click", getOperand);
btnMinus.addEventListener("click", getOperand);
btnDivide.addEventListener("click", getOperand);
btnMultiply.addEventListener("click", getOperand);
btnEqual.addEventListener("click", getResult);
