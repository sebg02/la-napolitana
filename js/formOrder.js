import { isEmailValid, isFieldEmpty, isNameValid } from "./formValidators.js";

const orderForm = document.querySelector("#orderForm");

orderForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(orderForm);

    let fullName = formData.get("full_name");
    let email = formData.get("email");
    let address = formData.get("address");
    let notes = formData.get("notes");

    let isValid = true;

    if (!isNameValid(fullName)) {
        alert("Por favor ingrese un nombre válido.");
        isValid = false;
    }

    if (!isEmailValid(email)) {
        alert("Por favor ingrese un correo válido.");
        isValid = false;
    }

    if (isFieldEmpty(address)) {
        alert("Por favor no deje el campo de dirección vacío.");
        isValid = false;
    }

    if (notes.length > 250) {
        alert("El mensaje es muy largo.");
        isValid = false;
    }

    // Validation of products
    const products = Array.from(
        document.querySelectorAll("input[type=number]")
    );
    const selectedProducts = products.some((p) => parseInt(p.value) > 0);
    if (!selectedProducts) {
        alert("Por favor seleccione al menos un producto");
        isValid = false;
    }

    if (isValid) {
        const data = {
            full_name: fullName,
            email: email,
            address: address,
            notes: notes,
            products: {},
        };

        products.forEach((p) => {
            const quantity = parseInt(p.value) || 0;
            if (quantity > 0) {
                data.products[p.id] = quantity;
            }
        });

        orderForm.reset();

        alert("¡Solicitud de pedido en línea realizada!");
        console.log(data);
    }
});
