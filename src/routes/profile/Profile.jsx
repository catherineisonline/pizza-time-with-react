import React, { useEffect, useState } from "react";
import ResetLocation from "../../helpers/ResetLocation";
import { useNavigate } from "react-router-dom";
import validateForm from "../../components/validateForm";
import "./profile.css";
import { USERS_URL } from "../../data/constants";
import { motion } from "framer-motion";
import { slideInLeft } from "../../data/animations";
const Profile = ({ currentUser, handleLogout, updateUser }) => {
  const [editForm, setEditForm] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    fullname: "",
    address: "",
    number: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const navigate = useNavigate();
  const validate = validateForm("profile");
  const toggleForm = () => {
    setEditForm(!editForm);
    setFormErrors({});
    setFormValue({
      email: "",
      password: "",
      fullname: "",
      address: "",
      number: "",
    });
    ResetLocation();
  };

  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setFormErrors(validate(formValue));
    window.scrollTo(0, 0);
    if (Object.keys(validate(formValue)).length > 0) {
      setLoading(false);
      return;
    } else {
      const updatedFields = {};
      for (const fieldName of Object.keys(formValue)) {
        if (
          formValue[fieldName] !== "" &&
          formValue[fieldName] !== currentUser[fieldName]
        ) {
          updatedFields[fieldName] = formValue[fieldName];
        } else {
          updatedFields[fieldName] = currentUser[fieldName];
        }
      }

      const update = await updateUser(currentUser.id, updatedFields);
      if (update) {
        setLoading(false);
        setEditForm(false);
        setFormValue({
          email: "",
          password: "",
          fullname: "",
          address: "",
          number: "",
        });
      }
    }
  };

  const confirmDeleteUser = () => {
    ResetLocation();
    setConfirmationModal(true);
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${USERS_URL}/${id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        navigate("/");
        handleLogout();
        return true;
      }
    } catch (err) {
      console.log(err.message);
      return false;
    }
  };

  useEffect(() => {
    document.title = "Profile | Pizza Time";
  }, []);
  return (
    <motion.main
      className="profile"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Profile information</h2>
      <p>Personal details and application</p>
      {loading ? (
        <div role="status" className="loader">
          <p>Almost there...</p>
          <img
            alt="Processing request"
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </div>
      ) : editForm ? (
        <form className="profile__form" onSubmit={handleSubmit}>
          <hr aria-hidden="true" />

          <label htmlFor="email" className="profile__form__info">
            Email
            <input
              name="email"
              id="email"
              type="text"
              value={formValue.email}
              placeholder={currentUser.email}
              autoComplete="email"
              onChange={handleValidation}
              aria-describedby="email-error"
            />
          </label>

          <span
            id="email-error"
            aria-live="polite"
            className="input-validation-error">
            {formErrors.email}
          </span>
          <hr aria-hidden="true" />

          <label htmlFor="password" className="profile__form__info">
            Password
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={formValue.password}
              placeholder="********"
              onChange={handleValidation}
              aria-describedby="password-error"
            />
          </label>

          <span
            aria-live="polite"
            id="password-error"
            className="input-validation-error">
            {formErrors.password}
          </span>
          <hr aria-hidden="true" />

          <label htmlFor="fullname" className="profile__form__info">
            Fullname
            <input
              name="fullname"
              id="fullname"
              type="text"
              autoComplete="name"
              value={formValue.fullname}
              placeholder={currentUser.fullname}
              onChange={handleValidation}
              aria-describedby="fullname-error"
            />
          </label>

          <span
            aria-live="polite"
            id="fullname-error"
            className="input-validation-error">
            {formErrors.fullname}
          </span>
          <hr aria-hidden="true" />

          <label htmlFor="address" className="profile__form__info">
            Address
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="billing address-level1"
              value={formValue.address}
              placeholder={
                currentUser.address !== null
                  ? currentUser.address
                  : "Add address..."
              }
              onChange={handleValidation}
              aria-describedby="address-error"
            />
          </label>

          <span
            aria-live="polite"
            id="address-error"
            className="input-validation-error">
            {formErrors.address}
          </span>
          <hr aria-hidden="true" />

          <label htmlFor="number" className="profile__form__info">
            Number
            <input
              id="number"
              name="number"
              type="text"
              value={formValue.number}
              autoComplete="mobile tel"
              placeholder={
                currentUser.number !== null
                  ? currentUser.number
                  : "Add number..."
              }
              onChange={handleValidation}
              aria-describedby="number-error"
            />
          </label>
          {/* </section> */}
          <span
            aria-live="polite"
            id="number-error"
            className="input-validation-error">
            {formErrors.number}
          </span>
          <hr aria-hidden="true" />
          <div className="profile__actions">
            <button
              aria-label="Cancel editing"
              type="button"
              className="active-button-style"
              onClick={() => {
                toggleForm();
              }}>
              Cancel edit
            </button>
            <button
              type="submit"
              aria-label="Save changes"
              className="passive-button-style">
              Save profile
            </button>
          </div>
        </form>
      ) : (
        <React.Fragment>
          <section className="profile__info" aria-labelledby="profile-title">
            <h3 id="profile-title" className="visually-hidden">
              Profile Information
            </h3>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Email</h3>
              <p>{currentUser.email}</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Password</h3>
              <p>*********</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Fullname</h3>
              <p>{currentUser.fullname}</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Address</h3>
              <p>{currentUser.address ? currentUser.address : " N/A"}</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Number</h3>
              <p>{currentUser.number ? currentUser.number : "N/A"}</p>
            </div>
            <hr aria-hidden="true" />
          </section>
          <div className="profile__actions">
            <button
              type="button"
              className="active-button-style"
              onClick={() => {
                toggleForm();
              }}
              aria-label="Edit profile">
              Edit profile
            </button>
            <button
              type="button"
              className="passive-button-style"
              onClick={() => confirmDeleteUser()}
              aria-label="Delete account">
              Delete account
            </button>
          </div>
        </React.Fragment>
      )}
      {confirmationModal && (
        <section className="profile__delete-modal">
          <div className="profile__delete-window">
            <h3>Delete account</h3>
            <p>
              Are you sure you want to delete your account? This action cannot
              be reversed and all the data will be lost
            </p>
            <div>
              <button
                type="button"
                className="profile__delete-confirm"
                onClick={() => deleteUser(currentUser.id)}
                aria-label="Confirm account deletion">
                Confirm
              </button>
              <button
                type="button"
                className="profile__delete-cancel"
                onClick={() => {
                  setConfirmationModal(false);
                  ResetLocation();
                }}
                aria-label="Cancel account deletion">
                Cancel
              </button>
            </div>
          </div>
        </section>
      )}
    </motion.main>
  );
};

export default Profile;
