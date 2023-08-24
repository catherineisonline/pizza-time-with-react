import React, { useEffect, useState } from "react";
import validateForm from "../../components/validateForm";
import { v4 as uuidv4 } from 'uuid';
import ResetLocation from "../../helpers/ResetLocation";
const Register = ({ activateLoginModal }) => {

  const [formValue, setFormValue] = useState({ id: '', email: '', password: '', repeatPassword: '', fullname: '', address: '', number: '' });
  const [formError, setFormError] = useState({})
  const [submit, setSubmit] = useState(false);
  const [registrationFail, setRegistrationFail] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_USERS_URL);
      const body = await response.json();
      return body.data;
    }
    catch (err) {
      console.log(err.message)
    }
  }

  const createUser = async (user) => {
    const users = await getUsers();
    //check repetitive emails
    const repetitiveEmail = users.filter((u) => u.email === user.email);
    //cretae unique id
    const id = uuidv4();
    user.id = id;
    try {
      if (repetitiveEmail.length > 0) {
        return false;
      }
      else {
        const response = await fetch(`${process.env.REACT_APP_USERS_URL}`, {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json"
          }
        });
        if (response.status === 200) {
          return true;
        }
        else {
          console.log('error with server')
          return false;
        }
      }

    }
    catch (err) {
      console.log(err.message)
      return false;
    }
  }
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setFormError(validate(formValue))
    window.scrollTo(0, 0)
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    }
    else {
      let currForm = { ...formValue }
      if (currForm.repeatPassword.length > 0) {
        delete currForm.repeatPassword;
      }
      if (currForm.address !== undefined) {
        delete currForm.address;
      }
      if (currForm.number !== undefined) {
        delete currForm.number;
      }
      currForm.email = currForm.email.toLowerCase();
      const accCreation = await createUser(currForm);
      if (accCreation === false) {
        setLoading(false);
        setSubmit(false);
        setRegistrationFail(true);
        setFormValue({ id: '', email: '', password: '', repeatPassword: '', fullname: '', address: '', number: '' })
      }
      else {
        setLoading(false);
        setRegistrationFail(false);
        setSubmit(true);
        setFormValue({ id: '', email: '', password: '', repeatPassword: '', fullname: '', address: '', number: '' })
      }
    }
  }
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }
  const validate = validateForm("registration");

  useEffect(() => {
    document.title = "Registration | Pizza Time";
  }, []);
  return (
    <main className="register-main">
      <h2>{submit && Object.keys(formError).length === 0 ? 'Success!' : 'Registration'}</h2>
      {loading ? <div role="status" className="loader">
        <p>Almost there...</p>
        <img alt="Processing request" src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
      </div> : submit && Object.keys(formError).length === 0 ?
        <section className="registration-success">
          <p className="form-submit-msg">You can now log in and make an order!</p>
          <button
            className="passive-button-style txt-white"
            onClick={() => {
              ResetLocation()
              activateLoginModal()
              setSubmit(false);
            }}
          >
            Log in
          </button>
        </section>

        :
        <form className="registration-form" onSubmit={handleSubmit}>
          {registrationFail ? <p className="registration-input-err">Seems like this email has already been registered!</p> : null}
          <section className="name-section">
            <input type="text" placeholder="Full name" name="fullname" value={formValue.fullname}
              onChange={handleValidation} />
            <span className="registration-input-err">{formError.fullname}</span>
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
            <input type="text" placeholder="Address (optional)" name="address" value={formValue.address}
              onChange={handleValidation} />
            <span className="registration-input-err">{formError.address}</span>
          </section>
          <section className="birthday">
            <input type="text" placeholder="Number (optional)" name="number" value={formValue.number}
              onChange={handleValidation} />
            <span className="registration-input-err">{formError.number}</span>
          </section>
          <p className="terms-warning">
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
            Policy. You may receive an email notification from us and can opt
            out any time.
          </p>
          <button className="register-btn" type="submit">Sign up</button>
        </form>
      }

    </main>
  );
}


export default Register;