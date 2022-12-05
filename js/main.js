import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { calculateIMC } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const notANumber = weight != Number(weight) || height != Number(height);
  const emptyField = weight === "" || height === "";

  if (notANumber) {
    AlertError.open1();
    setTimeout(() => {
      AlertError.close();
    }, 2000);
    return;
  }

  if (emptyField) {
    AlertError.open2();
    setTimeout(() => {
      AlertError.close();
    }, 2000);
    return;
  }

  AlertError.close();

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;

  const imcLow = document.querySelector(".imc-low");
  const imcNormal = document.querySelector(".imc-normal");
  const imcHigh = document.querySelector(".imc-high");

  if (result < 18.5) {
    imcLow.classList.add("show");
    imcNormal.classList.remove("show");
    imcHigh.classList.remove("show");
  } else if (result > 18.5 && result < 30) {
    imcNormal.classList.add("show");
    imcLow.classList.remove("show");
    imcHigh.classList.remove("show");
  } else if (result > 30) {
    imcHigh.classList.add("show");
    imcNormal.classList.remove("show");
    imcLow.classList.remove("show");
  }

  Modal.open();
}

export function clearInputs() {
  inputHeight.value = "";
  inputWeight.value = "";
}
