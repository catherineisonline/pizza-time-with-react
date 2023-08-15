import React, { useEffect, useState } from "react";
import { customDays, customMonths } from "../../data/datesArray";
import validateForm from "../../components/validateForm";



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
        setFormError(validate(formValue))
        setSubmit(true);
        window.scrollTo(0, 0)

    }


    const handleValidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value })
    }
    const validate = validateForm("registration");
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
                                {customMonths.map((month) => (<option value={month.option} key={month.option}>{month.option}</option>))}
                            </select>
                            <span className="registration-input-err">{formError.month}</span>
                            <select name="day" value={formValue.day} onChange={handleValidation}>
                                {customDays.map((day) => (<option value={day} key={day}>{day}</option>))}
                            </select>
                            <span className="registration-input-err">{formError.day}</span>
                            <select name="year" className="year" value={formValue.year} onChange={handleValidation}>
                                {years.map((year, index) => <option value={year} key={index}>{year}</option>)}
                            </select>
                            <span className="registration-input-err">{formError.year}</span>
                        </section>
                    </section>
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