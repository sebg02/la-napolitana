import {
  isEmailInvalid,
  isFieldEmpty,
  isNameInvalid,
  isPhoneNumberInvalid,
} from "./formValidators.js";

const orderForm = document.querySelector("#orderForm");

orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let nameOf = document.querySelector("#nameOf");
  let emailOf = document.querySelector("#emailOf");
  let addressOf = document.querySelector("#addressOf");
  let notesOf = document.querySelector("#notesOf");

  let isValid = true;

  if (isNameInvalid(nameOf.value)) {
    alert("Por favor ingrese un nombre válido.");
    isValid = false;
  }

  if (isEmailInvalid(emailOf.value)) {
    alert("Por favor ingrese un correo válido.");
    isValid = false;
  }

  if (isFieldEmpty(addressOf.value)) {
    alert("Por favor no deje el campo de dirección vacío.");
    isValid = false;
  }

  if (notesOf.value.length > 250) {
    alert("El mensaje es muy largo.");
    isValid = false;
  }
});
