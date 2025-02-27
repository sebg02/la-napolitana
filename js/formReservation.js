import {
  isEmailInvalid,
  isFieldEmpty,
  isNameInvalid,
  isPhoneNumberInvalid,
} from "./formValidators.js";

const reservationForm = document.querySelector("#reservationForm");

reservationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let dateRf = document.querySelector("#dateReservationForm");
  let timeRf = document.querySelector("#timeReservationForm");
  let sizeGroupRf = document.querySelector("#sizeGroupReservationForm");
  let nameRf = document.querySelector("#nameReservationForm");
  let emailRf = document.querySelector("#emailReservationForm");
  let phoneNumberRf = document.querySelector("#phoneNumberReservationForm");
  let notesRf = document.querySelector("#notesReservationForm");

  let isValid = true;

  if (isNameInvalid(nameRf.value)) {
    alert("Por favor ingrese un nombre válido.");
    isValid = false;
  }

  if (isEmailInvalid(emailRf.value)) {
    alert("Por favor ingrese un correo válido.");
    isValid = false;
  }

  if (isPhoneNumberInvalid(phoneNumberRf.value)) {
    alert("Por favor ingrese un teléfono válido.");
    isValid = false;
  }

  if (sizeGroupRf.value === "") {
    alert("Por favor ingrese un tamaño de grupo válido.");
    isValid = false;
  }

  if (isValid) {
    alert("Solicitud de reservación realizada.");
    // Quitar esto después
    console.log(
      dateRf.value,
      timeRf.value,
      sizeGroupRf.value,
      nameRf.value,
      emailRf.value,
      phoneNumberRf.value,
      notesRf.value
    );

    // this.submit()
  }
});
