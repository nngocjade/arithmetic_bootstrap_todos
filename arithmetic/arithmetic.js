// Write the logic for each function that will return the given arithmetic described by the function name
const add = function(num1, num2) {
  let x = num1 + num2;
  console.log(x);
  return x;
};

const subtract = function(num1, num2) {
  let x = num1 - num2;
  console.log(x);
  return x;
};

const multiply = function(num1, num2) {
  let x = num1 * num2;
  console.log(x);
  return x;
};

const divide = function(num1, num2) {
  let x = num1 / num2;
  console.log(x);
  return x;
};

// Invoke each function with sample numbers to test
console.log(add(3, 7));
console.log(subtract(9, 2));
console.log(multiply(8, 2));
console.log(divide(12, 3));

// As a bonus, add a form to the html file that will allow a user to input the two number parameters

let radioButton = document.getElementById("form_id");

document.addEventListener("submit", function(event) {
  event.preventDefault();
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let arithmetic = document.querySelector('input[name="arithmetic"]:checked')
    .value;

  switch (arithmetic) {
    case "add":
      // let result = add(num1,num2)
      // document.getElementById('result_id').innerHTML = result
      document.getElementById("result_id").innerHTML = add(num1, num2);
      break;

    case "subtract":
      document.getElementById("result_id").innerHTML = subtract(num1, num2);
      break;

    case "multiply":
      document.getElementById("result_id").innerHTML = multiply(num1, num2);
      break;

    case "divide":
      document.getElementById("result_id").innerHTML = divide(num1, num2);
      break;
  }
});
