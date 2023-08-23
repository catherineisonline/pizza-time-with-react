const validateForm = (form) => (value) => {
    let errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
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
        if (!value.email) {
            errors.email = "Please enter email"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Please enter valid email"
        }
        if (!value.password) {
            errors.password = "Please enter a valid password"
        }
        if (!value.repeatPassword) {
            errors.repeatPassword = "Please repeat the password"
        }
        if (value.password !== value.repeatPassword) {
            errors.password = "Passwords don't match"
        }
    }
    else if (form === "registration") {
        if (!value.fullname) {
            errors.fullname = "Please enter full name"
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
        // if (!value.repeatPassword) {
        //     errors.repeatPassword = "Please repeat the password"
        // }
        // if (value.password !== value.repeatPassword) {
        //     errors.password = "Passwords don't match"
        // }
    }
    else if (form === "contact-landing") {
        if (!value.fullname) {
            errors.fullname = "Please enter your full name"
        }
        if (!value.email) {
            errors.email = "Please enter phone an email"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Please enter valid email"
        }
        if (!value.message) {
            errors.message = "Please write a message"
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
        if (!value.email) {
            errors.email = "Please enter phone an email"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Please enter valid email"
        }
        if (!value.message) {
            errors.message = "Please write a message"
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