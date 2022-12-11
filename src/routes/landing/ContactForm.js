import React from "react";
//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import { useState } from 'react';


let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [37.0902, -93.7129];


const ContactForm = () => {
  const [formValue, setFormValue] = useState({ fullname: '', email: '', message: "" });
  const [submit, setSubmit] = useState(false);
  const [formError, setFormError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(validateForm(formValue));
    setSubmit(true);
  }


  const handleValidation = async (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }
  const validateForm = (value) => {
    let errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
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

    return errors;
  }
  return (
    <article className="section-10  flex-container flex-column">
      <section className="map">
        <MapContainer
          id="map"
          center={position}
          zoom={9}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </section>
      {submit && Object.keys(formError).length === 0 ?
        <section className="contact-section-success">
          <p>We have recieved your message and we will get back to you shortly! 🍕</p>
        </section>
        :
        <section className="contact-section">
          <form className="contact-form  flex-container flex-column" onSubmit={handleSubmit}>
            <h2 className="txt-center pop-font txt-white">Contact Us</h2>
            <div className="contact-form-item webflow-style-input">
              <input
                onChange={handleValidation}
                value={formValue.fullname}
                name="fullname"
                className="fullname-input  pop-font"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <span className="fullname-error-cpage">{formError.fullname}</span>
            <div className="contact-form-item webflow-style-input">
              <input
                onChange={handleValidation}
                value={formValue.email}
                name="email"
                className="email-input pop-font"
                type="text"
                placeholder="Email"
              />
            </div>
            <span className="fullname-error-cpage">{formError.email}</span>
            <div className="contact-form-item webflow-style-input">
              <textarea
                onChange={handleValidation}
                value={formValue.message}
                name="message"
                className="textarea-input  pop-font"
                placeholder="Message"
              />
            </div>
            <span className="fullname-error-cpage">{formError.message}</span>
            <button type="submit" className="active-button-style">
              Send
            </button>
          </form>
        </section>}
    </article>
  );
}
// }

export default ContactForm;
