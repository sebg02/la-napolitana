import {
    isEmailValid,
    isFieldEmpty,
    isNameValid,
    hasAtLeast10Char,
} from "./formValidators.js";

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

        //
        fetch("http://127.0.0.1:8000/api/contact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => console.log("Respuesta del servidor:", result))
            .catch((error) => console.error("Error:", error));

        //

        contactForm.reset();
        // Y llevarlo al inicio de la página o a home

        alert("¡Mensaje enviado!");
        console.log(data);
    }
});
