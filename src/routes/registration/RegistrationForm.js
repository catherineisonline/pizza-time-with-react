import React, { useEffect, useState } from "react";


const months = [
    {
        option: "January"
    },
    {
        option: 'February'
    },
    {
        option: 'March'
    },
    {
        option: 'April'
    },
    {
        option: 'May'
    },
    {
        option: 'June'
    },
    {
        option: 'July'
    },
    {
        option: 'August'
    },
    {
        option: 'September'
    },
    {
        option: 'October'
    },
    {
        option: 'November'
    },
    {
        option: 'December'
    },
]

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


export default function RegistrationForm() {
    const [formValue, setFormValue] = useState({ firstName: '', lastName: '', email: '', password: '', repeatPassword: '', month: '', day: '', year: '', checkbox: false });
    const [formError, setFormError] = useState({})
    const [submit, setSubmit] = useState(false);
    const [years, setYears] = useState([]);
    useEffect(() => {
        function generateArrayOfYears() {
            let max = new Date().getFullYear();
            let min = max - 40;
            for (let i = max; i >= min; i--) {
                setYears(prevYears => [...prevYears, i])
            }
        }
        generateArrayOfYears();

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validateForm(formValue))
        setSubmit(true);

    }


    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }
    const validateForm = (value) => {
        let errors = {}
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.firstName) {
            errors.firstName = "Please enter first name"
        }
        if (!value.lastName) {
            errors.lastName = "Please enter last name"
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
        if (!value.month) {
            errors.month = "Please enter your birth month"
        }
        if (!value.day) {
            errors.day = "Please enter your birth day"
        }
        if (!value.year) {
            errors.year = "Please enter your birth year"
        }
        if (!value.year) {
            errors.year = "Please enter your birth year"
        }

        return errors;
    }
    return (
        <React.Fragment>
            {submit && Object.keys(formError).length === 0 ? <p className="form-submit-msg">Success! Please check your email to verify your account</p> :
                <form className="registration-form" onSubmit={handleSubmit}>
                    <section className="name-section">
                        <input type="text" placeholder="First name" name="firstName" value={formValue.firstName}
                            onChange={handleValidation} />
                        <span className="registration-input-err">{formError.firstName}</span>
                        <input type="text" placeholder="Last name" name="lastName" value={formValue.lastName}
                            onChange={handleValidation} />
                        <span className="registration-input-err">{formError.lastName}</span>
                    </section>
                    <section className="email-section">
                        <input type="text" placeholder="Email" name="email" value={formValue.email}
                            onChange={handleValidation} />
                        <span className="registration-input-err">{formError.email}</span>
                    </section>
                    <section className="password-section">
                        <input type="password" placeholder="New password" name="password" value={formValue.password}
                            onChange={handleValidation} />
                        <span className="registration-input-err">{formError.password}</span>
                        <input type="password" placeholder="Repeat password" name="repeatPassword" value={formValue.repeatPassword}
                            onChange={handleValidation} />
                        <span className="registration-input-err">{formError.repeatPassword}</span>
                    </section>
                    <section className="birthday">
                        <section>
                            <label htmlFor="birthday">Birthday</label>
                        </section>
                        <section className="birthday-section">
                            <select name="month" value={formValue.month} onChange={handleValidation}
                            >
                                {months.map((month) => (<option value={month.option} key={month.option}>{month.option}</option>))}
                            </select>
                            <span className="registration-input-err">{formError.month}</span>
                            <select name="day" value={formValue.day} onChange={handleValidation}>
                                {days.map((day) => (<option value={day} key={day}>{day}</option>))}
                            </select>
                            <span className="registration-input-err">{formError.day}</span>
                            <select name="year" className="year" value={formValue.year} onChange={handleValidation}>
                                {years.map((year, index) => <option value={year} key={index}>{year}</option>)}
                            </select>
                            <span className="registration-input-err">{formError.year}</span>
                        </section>
                    </section>
                    {/* <section className="register-section"> */}
                    <p className="terms-warning">
                        By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
                        Policy. You may receive an email notification from us and can opt
                        out any time.
                    </p>
                    <button className="register-btn" type="submit">Sign up</button>
                </form>
            }
        </React.Fragment>

    )
}