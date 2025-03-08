export function isFieldEmpty(stringy) {
    // returns true if string is empty
    return stringy.trim() === "";
}

// poner que sea mayor a por lo menos tres letras
export function isNameValid(stringy) {
    if (stringy === "") {
        return false;
    }

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑüÜ\s]+$/;
    if (!regex.test(stringy)) {
        return false;
    }

    return true;
}

export function isPhoneNumberValid(phone) {
    if (phone.trim() === "") {
        return false;
    }

    const regex = /^\d{10}$/;
    if (!regex.test(phone)) {
        return false;
    }

    return true;
}

export function isEmailValid(emailString) {
    // returns true if email string is isvalid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailString);
}

export function hasAtLeast10Char(stringy) {
    if (stringy.length > 9) {
        return true;
    }
    return false;
}
