import "./newsletter.css";
import { useState } from "react";
import validateForm from "../../../components/validateForm";

const Newsletter = () => {
  const [formValue, setFormValue] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setSubmit(true);
  };
  const handleValidation = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const validate = validateForm("newsletter");
  return (
    <section className="homepage__newsletter">
      <h2 className="newsletter__title">
        ¡Suscríbete a nuestro boletín para recibir actualizaciones sobre el menú y disfrutar de regalos increíbles!
      </h2>
      {submit && Object.keys(formError).length === 0 ? (
        <p className="newsletter__success">
          ¡Te has suscrito exitosamente a nuestro boletín!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="newsletter__form">
          <div className="webflow-style-input">
            <label htmlFor="email" className="visually-hidden">
              Tu correo electrónico
            </label>
            <input
              id="email"
              name="email"
              onChange={handleValidation}
              value={formValue.email}
              autoComplete="email"
              placeholder="¿Cuál es tu correo electrónico?"
              aria-errormessage="email-error"
              aria-invalid={formError.email ? "true" : "false"}
            />
          </div>
          <span
            id="email-error"
            aria-live="assertive"
            className="newsletter__error">
            {formError.email}
          </span>
          <button
            type="submit"
            className="active-button-style"
            aria-label="Inscribirme">
            Inscribirme
          </button>
        </form>
      )}
    </section>
  );
};

export default Newsletter;
