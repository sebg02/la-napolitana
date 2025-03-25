import {
    isEmailValid,
    isFieldEmpty,
    isNameValid,
    isPhoneNumberValid,
} from "./formValidators.js";
import { setBtnLoadingView, setBtnOriginalView } from "./miscellaneus.js";
import { sendData } from "./sendData.js";

const reservationForm = document.querySelector("#reservationForm");

reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(reservationForm);

    let date = formData.get("date");
    let time = formData.get("time");
    let sizeGroup = Number(formData.get("size_group"));
    let name = formData.get("name").trim().toLowerCase();
    let email = formData.get("email").trim().toLowerCase();
    let phone = formData.get("phone").trim();
    let notes = formData.get("notes").trim();

    let isValid = true;

    if (!isNameValid(name)) {
        alert("Por favor ingrese un nombre válido.");
        isValid = false;
    }

    if (!isEmailValid(email)) {
        alert("Por favor ingrese un correo válido.");
        isValid = false;
    }

    if (!isPhoneNumberValid(phone)) {
        alert("Por favor ingrese un teléfono válido.");
        isValid = false;
    }

    if (sizeGroup === "" || sizeGroup < 0) {
        alert("Por favor ingrese un tamaño de grupo válido.");
        isValid = false;
    }

    if (isValid) {
        const data = {
            date: date,
            time: time + ":00",
            size_group: sizeGroup,
            name: name,
            email: email,
            phone: phone,
            notes: notes,
        };

        const btnSubmit = document.getElementById("btnSubmitReservationsForm");
        const btnSubmitOriginalText = btnSubmit.textContent.trim();

        /**
         * CAMBIAR u OFUSCAR?
         */
        // const url = "http://127.0.0.1:8000/api/reservation/";
        const url =
            "https://la-napolitana-backend.onrender.com/api/reservation/";

        setBtnLoadingView(btnSubmit);
        sendData(url, data).then((success) => {
            if (success) {
                alert("¡Solicitud de reservación realizada!");
                reservationForm.reset();
            } else {
                alert("Error al realizar la reservación");
            }

            setBtnOriginalView(btnSubmit, btnSubmitOriginalText);
        });
    }
});
