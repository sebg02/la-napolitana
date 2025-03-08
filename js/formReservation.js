import {
    isEmailValid,
    isFieldEmpty,
    isNameValid,
    isPhoneNumberValid,
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

        //

        fetch("http://127.0.0.1:8000/api/reservation/", {
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

        reservationForm.reset();
        // Y llevarlo al inicio de la página o a home

        alert("¡Solicitud de reservación realizada!");
        console.log(data);
    }
});
