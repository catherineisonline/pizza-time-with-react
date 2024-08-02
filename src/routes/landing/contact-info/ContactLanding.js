import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import './contact-info.css'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [37.0902, -93.7129];


const ContactLanding = () => {
  const ref = useRef(null);
  const [hideMap, setHideMap] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHideMap(false);
          // console.log('ijooj')
          // element.style.display = `inline-block`;
          observer.unobserve(element); // Unobserve once loaded

        }
      });
    }, {
      threshold: 0,
    });

    observer.observe(element);

    return () => {
      if (element) {
        // setHideMap(true)
        observer.unobserve(element);
      }
    };
  }, []);
  return (
    <motion.article className="homepage__contact flex-container flex-column" ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      {!hideMap && < div
        className="map">
        <MapContainer
          id="map"
          center={position}
          zoom={9}
          scrollWheelZoom={false}
          loading="lazy"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
          </Marker>
        </MapContainer>
      </div>}
      <div
        className="contact__info"
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
      </div>
    </motion.article>
  );
}


export default ContactLanding;
