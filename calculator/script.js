var n1 = "0";
var n2 = "";
var operator = null;

function includeDigit(digit) {
  if (n2 && operator && clickedEqual) {
    clickedEqual = false;
    clean();
    n1 = digit;
    showNoDisplay(n1);
    return;
  }
  if (operator !== null) {
    n2 = n2 + digit;
    showNoDisplay(n2);
  } else {
    if (n1 === "0") {
      n1 = digit;
    } else {
      n1 = n1 + digit;
      //n1 = n1 + digit is the same as n1 += digit
    }
    showNoDisplay(n1);
  }
}

function calculate() {
  var _n1 = parseFloat(n1);
  var _n2 = parseFloat(n2);
  var calculatedNumber = 0;
  switch (operator) {
    case "+":
      calculatedNumber = _n1 + _n2;
      break;
    case "-":
      calculatedNumber = _n1 - _n2;
      break;
    case "*":
      calculatedNumber = _n1 * _n2;
      break;
    case "/":
      calculatedNumber = _n1 / _n2;
      break;
  }
  return calculatedNumber;
}

function showNoDisplay(value) {
  document.querySelector("#display").innerHTML = value;
}

function startCalculation(symbol) {
  if (clickedEqual) {
    clickedEqual = false;
    n2 = "";
  }
  if (operator === null || n2 === "") {
    operator = symbol;
  } else {
    var result = calculate();
    n1 = result;
    operator = symbol;
    n2 = "";
    showNoDisplay(n1);
  }
}
var clickedEqual = false;
function finalizeCalculation() {
  clickedEqual = true;
  var result = calculate();
  n1 = result;
  showNoDisplay(n1);
}

function includePoint() {
  if (operator && n2 === "") {
    n2 = "0.";
  } else if (operator && n2) {
    n2 = n2 + ".";
  } else {
    n1 = n1 + ".";
  }
  showNoDisplay(n1);
}

function clean() {
  n1 = "0";
  operator = null;
  n2 = "";
  showNoDisplay(n1);
}

function getPercent() {
  if (!n2) {
    clean();
    showNoDisplay(n1);
  } else {
    var percent = (n1 * n2) / "100";
    n2 = percent;
  }
  showNoDisplay(n2);
}