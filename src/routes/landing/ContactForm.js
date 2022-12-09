import React from "react";
//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [37.0902, -93.7129];

export default class ContactForm extends React.Component {
  SubmitContactForm(e) {
    e.preventDefault();
    const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    //Errors
    const FullnameError = document.querySelector(".fullname-error");
    const EmailError = document.querySelector(".email-error");
    const TextareaError = document.querySelector(".textarea-error");
    const BtnMsg = document.querySelector(".button-msg");
    //Inputs
    const FullnameInput = document.querySelector(".fullname-input");
    const EmailInput = document.querySelector(".email-input");
    const TextareaInput = document.querySelector(".textarea-input");

    if (FullnameInput.value.length === 0) {
      FullnameError.textContent = "First Name cannot be empty";
      FullnameInput.style.borderColor = "red";
      FullnameError.style.display = "inline";

      setTimeout(() => {
        FullnameError.textContent = "";
        FullnameInput.style.borderColor = "#ff6240";
        FullnameError.style.display = "none";
      }, 2000);
    }
    if (TextareaInput.value.length === 0) {
      TextareaError.textContent = "First Name cannot be empty";
      TextareaInput.style.borderColor = "red";
      TextareaError.style.display = "inline";

      setTimeout(() => {
        TextareaError.textContent = "";
        TextareaInput.style.borderColor = "#ff6240";
        TextareaError.style.display = "none";
      }, 2000);
    }
    if (EmailInput.value.length === 0) {
      EmailError.textContent = "Email cannot be empty";
      EmailInput.style.borderColor = "red";
      EmailError.style.display = "inline";

      setTimeout(() => {
        EmailError.textContent = "";
        EmailInput.style.borderColor = "#ff6240";
        EmailError.style.display = "none";
      }, 2000);
    }
    if (
      !EmailInput.value.match(emailValidation) &&
      EmailInput.value.length !== 0
    ) {
      EmailError.textContent = "Looks like this is not an email";
      EmailInput.style.borderColor = "red";
      EmailError.style.display = "inline";
      setTimeout(() => {
        EmailError.textContent = "";
        EmailInput.style.borderColor = "var(--grayish-blue)";
        EmailError.style.display = "none";
      }, 2000);
    }
    if (
      FullnameInput.value.length !== 0 &&
      EmailInput.value.length !== 0 &&
      EmailInput.value.match(emailValidation)
    ) {
      BtnMsg.textContent = `Thanks for contacting us, ${FullnameInput.value}! We will get back to you shortly`;
    } else {
      return;
    }
  }

  render() {
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
        <section className="contact-section">
          <form className="contact-form  flex-container flex-column">
            <h2 className="txt-center pop-font txt-white">Contact Us</h2>
            <div className="contact-form-item webflow-style-input">
              <input
                className="fullname-input  pop-font"
                type="text"
                placeholder="Full Name"
              />
              <br></br>
              <p className="fullname-error"></p>
            </div>
            <div className="contact-form-item webflow-style-input">
              <input
                className="email-input pop-font"
                type="text"
                placeholder="Email"
              />
              <br></br>
              <p className="email-error"></p>
            </div>
            <div className="contact-form-item webflow-style-input">
              <textarea
                className="textarea-input  pop-font"
                placeholder="Message"
              />
              <br></br>
              <p className="textarea-error"></p>
            </div>
            <div className="contact-form-item">
              <button onClick={this.SubmitContactForm} className="active-button-style">
                Send
              </button>
              <br></br>
              <p className="button-msg"></p>
            </div>
          </form>
        </section>
      </article>
    );
  }
}
