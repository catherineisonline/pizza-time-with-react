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
    document.title = "Perfil | Pizza Time";
  }, []);
  return (
    <motion.main
      className="profile"
      initial={slideInLeft.initial}
      whileInView={slideInLeft.whileInView}
      exit={slideInLeft.exit}
      transition={slideInLeft.transition}>
      <h2>Información del perfil</h2>
      <p>Detalles personales y aplicación</p>
      {loading ? (
        <div role="status" className="loader">
          <p>Casi listo...</p>
          <img
            alt="Procesando solicitud"
            src="https://media0.giphy.com/media/L05HgB2h6qICDs5Sms/giphy.gif?cid=ecf05e472hf2wk1f2jou3s5fcnx1vek6ggnfcvhsjbeh7v5u&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </div>
      ) : editForm ? (
        <form className="profile__form" onSubmit={handleSubmit}>
          <hr aria-hidden="true" />

          <label htmlFor="email" className="profile__form__info">
            Correo electrónico
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
            Contraseña
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
            Nombre completo
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
            Dirección
            <input
              id="address"
              name="address"
              type="text"
              autoComplete="billing address-level1"
              value={formValue.address}
              placeholder={
                currentUser.address !== null
                  ? currentUser.address
                  : "Añadir dirección..."
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
            Número
            <input
              id="number"
              name="number"
              type="text"
              value={formValue.number}
              autoComplete="mobile tel"
              placeholder={
                currentUser.number !== null
                  ? currentUser.number
                  : "Añadir número..."
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
              aria-label="Cancelar edición"
              type="button"
              className="active-button-style"
              onClick={() => {
                toggleForm();
              }}>
              Cancelar edición
            </button>
            <button
              type="submit"
              aria-label="Guardar cambios"
              className="passive-button-style">
              Guardar perfil
            </button>
          </div>
        </form>
      ) : (
        <React.Fragment>
          <section className="profile__info" aria-labelledby="profile-title">
            <h3 id="profile-title" className="visually-hidden">
              Información del Perfil
            </h3>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Correo electrónico</h3>
              <p>{currentUser.email}</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Contraseña</h3>
              <p>*********</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Nombre completo</h3>
              <p>{currentUser.fullname}</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Dirección</h3>
              <p>{currentUser.address ? currentUser.address : " N/D"}</p>
            </div>
            <hr aria-hidden="true" />
            <div className="profile__info__section">
              <h3>Número</h3>
              <p>{currentUser.number ? currentUser.number : "N/D"}</p>
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
              aria-label="Editar perfil">
              Editar perfil
            </button>
            <button
              type="button"
              className="passive-button-style"
              onClick={() => confirmDeleteUser()}
              aria-label="Eliminar cuenta">
              Eliminar cuenta
            </button>
          </div>
        </React.Fragment>
      )}
      {confirmationModal && (
        <section className="profile__delete-modal">
          <div className="profile__delete-window">
            <h3>Eliminar cuenta</h3>
            <p>
              ¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede revertir y todos los datos se perderán
            </p>
            <div>
              <button
                type="button"
                className="profile__delete-confirm"
                onClick={() => deleteUser(currentUser.id)}
                aria-label="Confirmar eliminación de cuenta">
                Confirmar
              </button>
              <button
                type="button"
                className="profile__delete-cancel"
                onClick={() => {
                  setConfirmationModal(false);
                  ResetLocation();
                }}
                aria-label="Cancelar eliminación de cuenta">
                Cancelar
              </button>
            </div>
          </div>
        </section>
      )}
    </motion.main>
  );
};

export default Profile;
