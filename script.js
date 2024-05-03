
const input = document.getElementById("calcInp");
const buttons = document.querySelectorAll(".num, .proces");

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    const value = e.value;

    if (value === "AC") {
      input.value = "";
    } else if (value === "DEL") {
      input.value = input.value.slice(0, -1);
    } else if (value === "=") {
      input.value = beraberdir(input.value);
    }
    else {
      input.value += value;
    }
  });
});

function beraberdir(ifade) {
  let result = 0;
  const numbers = ifade.split(/[+\-*/]/);
  const operator = ifade.match(/[+\-*/]/);
  const num1 = parseFloat(numbers[0]);
  const num2 = parseFloat(numbers[1]);

  switch (operator[0]) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result = "Error: Invalid";
      }
      result = num1 / num2;
  }

  return result;
}