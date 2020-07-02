function validateLength(password) {
  if (password.length < 8) {
    return false;
  }

  return true;
}

function validateUpperCaseLetter(password) {
  for (let char of password) {
    if (
      !validateSpecialChars(char) &&
      isNaN(char) &&
      char === char.toUpperCase()
    ) {
      return true;
    }
  }
  return false;
}

function validateLowerCaseLetter(password) {
  for (let char of password) {
    if (
      !validateSpecialChars(char) &&
      isNaN(char) &&
      char === char.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}

function validateSpecialChars(password) {
  const specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
  for (let char of specialChars) {
    if (password.includes(char)) {
      return true;
    }
  }
  return false;
}

function validateNumericValue(password) {
  for (let char of password) {
    if (!isNaN(char)) {
      return true;
    }
  }
  return false;
}

function validatePassword(password) {
  if (
    validateLength(password) &&
    validateUpperCaseLetter(password) &&
    validateLowerCaseLetter(password) &&
    validateNumericValue(password) &&
    validateSpecialChars(password)
  ) {
    return true;
  }
  return false;
}
module.exports = validatePassword;
