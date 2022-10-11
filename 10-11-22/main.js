// Basic function declaration
// function myFunction () {
//     let num1 = 12;
//     let num2 = 15;
//     let result = num1 + num2;
//     alert(result);
// };

// myFunction();


// function declaration with parameters
// function myFunction2(num1, num2) {
//     let result = num1 + num2;
//     alert(result);
// };

// myFunction2(15, 15);

// function declaration with parameters and return
// function myFunction3(num1, num2) {
//     let result = num1 + num2;
//     return result;
// };

// alert(myFunction3(16, 15));

// const myFunction = function () {
//     let num1 = document.getElementById("input1").value;
//     let num2 = document.getElementById("input2").value;
//     let result = Number(num1) + Number(num2);

//     return result;
// };


const convertTemp = function () {
    let num1 = document.getElementById("input1").value;
    let result = (Number(num1) * (9/5) + 32) 
    let finalResult = parseFloat(result).toFixed(2) + " " + "degrees Farenheit";
    return finalResult;
};

const clearFields = function () {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
};