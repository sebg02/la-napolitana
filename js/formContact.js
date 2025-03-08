import {
    isEmailValid,
    isFieldEmpty,
    isNameValid,
    hasAtLeast10Char,
} from "./formValidators.js";

import { setBtnLoadingView, setBtnOriginalView } from "./miscellaneus.js";
import { sendData } from "./sendData.js";

const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);

    let name = formData.get("full_name").trim().toLowerCase();
    let email = formData.get("email").trim().toLowerCase();
    let message = formData.get("message").trim();

    let isValid = true;

    if (!isNameValid(name)) {
        alert("Por favor ingrese un nombre válido.");
        isValid = false;
    }

    if (!isEmailValid(email)) {
        alert("Por favor ingrese un correo válido.");
        isValid = false;
    }

    if (isFieldEmpty(message) || !hasAtLeast10Char(message)) {
        alert(
            "Por favor no deje el campo de mensaje vacío o que no sea tan corto."
        );
        isValid = false;
    }

    if (isValid) {
        const data = {
            name: name,
            email: email,
            message: message,
        };

        const btnSubmit = document.getElementById("btnSubmitContactForm");
        const btnSubmitOriginalText = btnSubmit.textContent;

        const url = "http://127.0.0.1:8000/api/contact/";

        setBtnLoadingView(btnSubmit);
        sendData(url, data).then((success) => {
            if (success) {
                alert("¡Mensaje enviado!");
                contactForm.reset();
            } else {
                alert("Error al enviar el mensaje.");
            }
            setBtnOriginalView(btnSubmit, btnSubmitOriginalText);
        });

        // quitar
        console.log(data);
    }
});
