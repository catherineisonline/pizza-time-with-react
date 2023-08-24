const validateForm = (form) => (value) => {
    let errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /\d/;
    if (form === "newsletter") {
        if (!value.email) {
            errors.email = "Please enter an email"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Please enter valid email"
        }
    }
    else if (form === "registration") {
        if (!value.fullname) {
            errors.fullname = "Please enter full name"
        }
        else if (value.fullname.length < 3) {
            errors.fullname = "Name is too short"
        }
        if (!value.email) {
            errors.email = "Please enter email"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Please enter valid email"
        }
        if (!value.password) {
            errors.password = "Please enter a valid password"
        }
        else if (value.password.length < 8 || value.repeatPassword.length < 8) {
            errors.password = "Password should be min. 8 characters"
        }
        if (!value.repeatPassword) {
            errors.repeatPassword = "Please repeat the password"
        }
        if (value.password !== value.repeatPassword) {
            errors.password = "Passwords don't match"
        }
    }
    else if (form === "profile") {
        if (value.fullname.length !== 0 && value.fullname.length < 3) {
            errors.fullname = "Full name is too short"
        }
        if (value.address.length !== 0 && value.address.length < 5) {
            errors.address = "Address is too short"
        }
        if (value.email.length !== 0 && !emailRegex.test(value.email)) {
            errors.email = "Please enter valid email"
        }
        if (value.password.length !== 0 && value.password.length < 8) {
            errors.password = "Password should be min. 8 characters"
        }
        if (value.number.length !== 0 && value.number.length < 5) {
            errors.number = "Phone number is not valid"
        }
        else if (value.number.length !== 0 && !numberRegex.test(value.number)) {
            errors.number = "Phone number is not valid"
        }
    }
    else if (form === "login") {
        if (!value.email) {
            errors.email = 'Please enter email';
        } else if (!emailRegex.test(value.email)) {
            errors.email = 'Please enter valid email';
        }

        if (!value.password) {
            errors.password = 'Please enter a valid password';
        }
        else if (value.password.length < 8) {
            errors.password = 'Password should be min. 8 characters';
        }
    }
    else if (form === "contact") {
        if (!value.fullname) {
            errors.fullname = "Please enter your full name"
        }
        else if (numberRegex.test(value.fullname)) {
            errors.fullname = "Please enter a valid full name"
        }
        else if (value.fullname && value.fullname.length < 3) {
            errors.fullname = "Please enter a valid full name"
        }
        if (!value.email) {
            errors.email = "Please enter an email"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Please enter valid email"
        }
        if (!value.message) {
            errors.message = "Please write a message"
        }
        else if (value.message && value.message.length < 10) {
            errors.message = "The message should be min. 10 characters"
        }
    }
    else if (form === "payment") {
        if (!value.firstname) {
            errors.firstname = "Please enter first name"
        }
        if (!value.lastname) {
            errors.lastname = "Please enter last name"
        }
        if (!value.cardNumber || value.cardNumber.length < 16) {
            errors.cardNumber = "Please enter a valid card number"
        }
        if (!value.cvv || value.cvv.length < 3) {
            errors.cvv = "Please enter valid CVV"
        }
        if (!value.month || value.month > 12 || value.month < 1) {
            errors.year = "Please enter valid month"
        }
        if (!value.year || value.year > 28 || value.year < 17) {
            errors.year = "Please enter valid year"
        }
    }

    return errors;
}

export default validateForm;