import {
  blockedEmails,
  blockedNames,
  blockedPasswords,
} from "../data/validations";

const validationMessages = {
  empty: (field) => `Please enter your ${field}`,
  short: (field) => `${field} is too short!`,
  invalid: (field) => `Please enter a valid ${field}`,
  insecurePass: "Insecure password! Include letters and numbers",
  shortPass: "Password should be min. 8 characters",
  shortText: "The message should be min. 10 characters",
  matchPass: "Passwords don't match",
  spacedPass: "Password should not have empty spaces",
};

const isValidEmail = (email) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
const isBlockedEmail = (email) =>
  blockedEmails.includes(email.toLowerCase().trim());
const isBlockedName = (name) =>
  blockedNames.includes(name.toLowerCase().trim());
const isTooSimple = (password) =>
  /^[a-zA-Z]+$/.test(password) || /^\d+$/.test(password);
const includesPasswordWord = (password) =>
  password.toLowerCase().includes("password");

const isInsecurePassword = (password) => {
  return (
    blockedPasswords.includes(password.toLowerCase()) ||
    isTooSimple(password) ||
    includesPasswordWord(password)
  );
};

const validateForm = (form) => (value) => {
  let errors = {};
  const numberRegex = /\d/;
  if (form === "newsletter") {
    if (!value.email) {
      errors.email = validationMessages.empty("email");
    } else if (!isValidEmail(value.email) || isBlockedEmail(value.email)) {
      errors.email = validationMessages.invalid("email");
    }
  } else if (form === "registration") {
    if (!value.fullname) {
      errors.fullname = validationMessages.empty("full name");
    } else if (value.fullname.length < 3) {
      errors.fullname = validationMessages.short("Name");
    } else if (isBlockedName(value.fullname)) {
      errors.fullname = validationMessages.invalid("full name");
    }
    if (!value.email) {
      errors.email = validationMessages.empty("email");
    } else if (!isValidEmail(value.email) || isBlockedEmail(value.email)) {
      errors.email = validationMessages.invalid("email");
    }
    if (!value.password) {
      errors.password = validationMessages.invalid("password");
    } else if (value.password.length < 8 || value.repeatPassword.length < 8) {
      errors.password = validationMessages.shortPass;
    } else if (isInsecurePassword(value.password)) {
      errors.password = validationMessages.insecurePass;
    } else if (/\s/.test(value.password)) {
      errors.password = validationMessages.spacedPass;
    }
    if (!value.repeatPassword) {
      errors.repeatPassword = validationMessages.empty("password");
    }
    if (value.password !== value.repeatPassword) {
      errors.password = validationMessages.matchPass;
    }
  } else if (form === "profile") {
    if (value.fullname.length !== 0 && value.fullname.length < 3) {
      errors.fullname = validationMessages.invalid("full name");
    } else if (isBlockedName(value.fullname)) {
      errors.fullname = validationMessages.invalid("full name");
    }
    if (value.address.length !== 0 && value.address.length < 5) {
      errors.address = validationMessages.short("Address");
    }
    if (value.email.length !== 0 && !isValidEmail(value.email)) {
      errors.email = validationMessages.invalid("email");
    } else if (isBlockedEmail(value.email)) {
      errors.email = validationMessages.invalid("email");
    }
    if (value.password.length !== 0 && value.password.length < 8) {
      errors.password = validationMessages.shortPass;
    } else if (isInsecurePassword(value.password)) {
      errors.password = validationMessages.insecurePass;
    }
    if (value.number.length !== 0 && value.number.length < 5) {
      errors.number = validationMessages.short("Phone number");
    } else if (value.number.length !== 0 && !numberRegex.test(value.number)) {
      errors.number = validationMessages.invalid("phone number");
    }
  } else if (form === "login") {
    if (!value.email) {
      errors.email = validationMessages.empty("email");
    } else if (!isValidEmail(value.email)) {
      errors.email = validationMessages.invalid("email");
    }

    if (!value.password) {
      errors.password = validationMessages.empty("password");
    } else if (value.password.length < 8) {
      errors.password = validationMessages.shortPass;
    }
  } else if (form === "contact") {
    if (!value.fullname) {
      errors.fullname = validationMessages.empty("full name");
    } else if (numberRegex.test(value.fullname)) {
      errors.fullname = validationMessages.invalid("full name");
    } else if (value.fullname && value.fullname.length < 3) {
      errors.fullname = validationMessages.invalid("full name");
    }
    if (!value.email) {
      errors.email = validationMessages.empty("email");
    } else if (!isValidEmail(value.email) || isBlockedEmail(value.email)) {
      errors.email = validationMessages.invalid("email");
    }
    if (!value.message) {
      errors.message = validationMessages.empty("message");
    } else if (value.message && value.message.length < 10) {
      errors.message = validationMessages.shortText;
    }
  } else if (form === "payment") {
    if (!value.firstname) {
      errors.firstname = validationMessages.empty("first name");
    }
    if (!value.lastname) {
      errors.lastname = validationMessages.empty("last name");
    }
    if (!value.cardNumber || value.cardNumber.length < 16) {
      errors.cardNumber = validationMessages.invalid("card number");
    }
    if (!value.cvv || value.cvv.length < 3) {
      errors.cvv = validationMessages.invalid("CVV");
    }
    if (!value.month || value.month > 12 || value.month < 1) {
      errors.year = validationMessages.invalid("month");
    }
    if (!value.year || value.year > 28 || value.year < 17) {
      errors.year = validationMessages.invalid("year");
    }
  }

  return errors;
};

export default validateForm;
