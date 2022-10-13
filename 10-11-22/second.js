const divFunction = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = Number(num1) / Number(num2);
  let finalResult = parseFloat(result).toFixed(2);

  return finalResult;
};

const multFunction = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = Number(num1) * Number(num2);
  let finalResult = parseFloat(result).toFixed(2);

  return finalResult;
};

const subFunction = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = Number(num1) - Number(num2);
  let finalResult = parseFloat(result).toFixed(2);

  return finalResult;
};

const addFunction = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = Number(num1) + Number(num2);
  let finalResult = parseFloat(result).toFixed(2);

  return finalResult;
};

const equalFunction = () => {
  let select = document.getElementById("selection");
  let value = select.options[select.selectedIndex].value;

  if (value == "+") {
    document.getElementById("answer").innerHTML = addFunction();
  } else if (value == "-") {
    document.getElementById("answer").innerHTML = subFunction();
  } else if (value == "*") {
    document.getElementById("answer").innerHTML = multFunction();
  } else if (value == "/") {
    document.getElementById("answer").innerHTML = divFunction();
  }
};
