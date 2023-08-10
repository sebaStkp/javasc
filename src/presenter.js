import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  const clickedButtonValue = event.submitter.value; //dara el boton que fue clickeado(Sumar, multiplicar)

  let result;
  if (clickedButtonValue === "Sumar") {
    result = sumar(firstNumber, secondNumber);
  } else if (clickedButtonValue === "Mult") {
    result = multiplicar(firstNumber, secondNumber);
  }

  div.innerHTML = "<p>" + result + "</p>";
  
});



