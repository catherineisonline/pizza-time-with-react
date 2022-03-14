import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [37.0902, -93.7129];

const SectionTen = () => {
  return (
    <article className="section-10  flex-container flex-column">
      <section className="map">
        <MapContainer
          id="map"
          center={position}
          zoom={10}
          scrollWheelZoom={true}
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
        {/* <Map id="map" /> */}
        {/* <div id="map" /> */}
      </section>
      <section className="contact-section">
        <h2 className="txt-center pop-font txt-white">Contact Us</h2>
        <form className="contact-form  flex-container flex-column" action="get">
          <input className="pop-font" type="text" placeholder="First Name" />
          <input className="pop-font" type="text" placeholder="Last Name" />
          <textarea className="pop-font" placeholder="Message" defaultValue={""} />
          <button className="form-btn" type="submit">
            Send
          </button>
        </form>
      </section>
    </article>
  );
};

export default SectionTen;
