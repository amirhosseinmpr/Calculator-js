const NumberBtn = document.querySelectorAll(".num");
const operation_Btn = document.querySelectorAll(".btn__operation");
const answe = document.getElementById("answe");
const result = document.getElementById("result");
const operation = document.getElementById("operation");

let prev = 0;
let operate = undefined;

NumberBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    if (answe.innerHTML === 0 || +answe.innerHTML === 0) {
      return (answe.innerHTML = +e.target.innerHTML);
    }

    if (
      answe.innerHTML !== 0 ||
      +answe.innerHTML !== 0 ||
      answe.innerHTML.lenght > 0
    ) {
      return (answe.innerHTML =
        answe.innerHTML.toString() + e.target.innerHTML.toString());
    }
  });
});

operation_Btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (operate) {
      operateIt(operate);
      operate = e.target.innerHTML;
      operation.innerHTML = operate;
    } else {
      operate = e.target.innerHTML;
      operation.innerHTML = operate;

      if (prev) {
        operateIt(operate);
      } else {
        prev = +answe.innerHTML;
        result.innerHTML = +prev;
        answe.innerHTML = 0;
      }
    }
  });
});

function operateIt(o) {
  switch (o) {
    case "+":
      prev = prev + +answe.innerHTML;
      break;
    case "-":
      prev = prev - +answe.innerHTML;
      break;
    case "/":
      prev = prev / +answe.innerHTML;
      break;
    case "X":
      prev = prev * +answe.innerHTML;
      break;
    default:
      break;
  }
  answe.innerHTML = 0;
  result.innerHTML = prev;
}

const acBtn = document.getElementsByClassName("btn__ac")[0];
acBtn.addEventListener("click", () => {
  prev = 0;
  operate = undefined;
  operation.innerHTML = "";
  answe.innerHTML = 0;
  result.innerHTML = "";
});
