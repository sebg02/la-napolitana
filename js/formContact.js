import {
  isEmailInvalid,
  isFieldEmpty,
  isNameInvalid,
} from "./formValidators.js";

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (e) => {
  // Validate contact form before submitting to the backend
  e.preventDefault();
  let nameCf = document.querySelector("#nameContactForm");
  let emailCf = document.querySelector("#emailContactForm");
  let messageCf = document.querySelector("#messageContactForm");

  let isValid = true;

  if (isNameInvalid(nameCf.value)) {
    alert("Por favor ingrese un nombre válido.");
    isValid = false;
  }

  if (isFieldEmpty(messageCf.value)) {
    alert("Por favor no deje el campo de mensaje vacío.");
    isValid = false;
  }

  if (isEmailInvalid(emailCf.value)) {
    alert("Por favor ingrese un correo válido.");
    isValid = false;
  }

  /* AGREGAR FUNCIONALIDAD BACKEND */
  if (isValid) {
    alert("Mensaje enviado!");
    // this.submit()
  }
});
