export function isFieldEmpty(stringy) {
  // returns true if string is empty
  return stringy.trim() === "";
}

export function isNameInvalid(stringy) {
  stringy = stringy.trim();
  if (stringy === "") {
    return true;
  }

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑüÜ\s]+$/;
  if (!regex.test(stringy)) {
    return true;
  }

  return false;
}

export function isPhoneNumberInvalid(phone) {
  if (phone.trim() === "") {
    return true;
  }

  const regex = /^\d{10}$/;
  if (!regex.test(phone)) {
    return true;
  }

  return false;
}

export function isEmailInvalid(emailString) {
  // return true if email string is isvalid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(emailString);
}
