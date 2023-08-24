import React from "react";
import { motion } from "framer-motion";
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


const ContactLanding = () => {
  return (
    <article className="section-10  flex-container flex-column">
      <motion.div
        className="map"
        initial={{ opacity: 0, translateX: -300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: -300 }}
        transition={{ duration: 2 }}
      >
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
      </motion.div>
      <motion.div
        className="contact-emails"
        initial={{ opacity: 0, translateX: 300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 300 }}
        transition={{ duration: 2 }}
      >
        <h3>Contact Us</h3>
        <p>Have a question, suggestion, or just want to say hello? We'd love to hear from you!</p>
        <section>
          <h4>Customer Support:</h4>
          <p>Our dedicated customer support team is ready to assist you with any inquiries you may have.</p>
          <ul>
            <li>- Email: support@pizzatime.com</li>
            <li>- Phone: 000 (000) 123 4567</li>
            <li>- Hours: Monday - Friday, 8:00am - 9:00pm (EST)</li>
          </ul>
        </section>
        <section>
          <h4>General Inquiries:</h4>
          <p>If you have general questions about our company, partnerships, or anything else, feel free to get in touch.</p>
          <ul>
            <li>- Email: info@pizzatime.com</li>
          </ul>
        </section>
        <section>
          <h4>Feedback and Suggestions:</h4>
          <p>We value your feedback and are always striving to improve. If you have any suggestions, comments, or ideas on how we can enhance our offerings, please let us know.</p>
          <ul>
            <li>- Email: feedback@pizzatime.com</li>
          </ul>
        </section>
      </motion.div>
    </article>
  );
}


export default ContactLanding;
