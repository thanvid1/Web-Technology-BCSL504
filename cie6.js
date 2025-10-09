function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  switch (operation) {
    case "sum":
      result = num1 + num2;
      break;
    case "difference":
      result = num1 - num2;
      break;
    case "product":
      result = num1 * num2;
      break;
    case "quotient":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    case "remainder":
      result = num2 !== 0 ? num1 % num2 : "Cannot divide by zero";
      break;
    case "power":
      result = Math.pow(num1, num2);
      break;
    case "square":
      result = Math.pow(num1, 2);
      break;
    case "sqrt":
      result = num1 >= 0 ? Math.sqrt(num1) : "Invalid input for square root";
      break;
    default:
      result = "Unknown operation";
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}
