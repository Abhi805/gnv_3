import { EnvelopeFill, GeoAltFill, TelephoneFill, Globe } from "react-bootstrap-icons";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-5">
      <div className="container text-center">
        <div className="row justify-content-between">
          <div className="col-md-3 text-start">
            {" "}
            {/* Left Align */}
            <h5 className="fw-bold">About GnvIndia EnterTainment</h5>
            <p>
              GNV INDIA ENTERTAINMENT is a Central India based Event Management
              and Advertisement company. We are best in industry for providing
              international acts and artists...we also provide celebrities from
              Bollywood, tv actors, sports personalities for all events
              appearances and all kind of events etc.
            </p>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled useful-links">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled useful-links">
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-start">
  <h5 className="fw-bold">CONTACT</h5>
  
  <p>
    <GeoAltFill className="me-2" /> Shop No. 19, Shraddha Shree Colony, MR-9, Infront of Rajlaxmi Showroom, Indore.
  </p>
  
  <p>
    <EnvelopeFill className="me-2" />
    <a href="mailto:gnvindia7@gmail.com" className="text-dark text-decoration-none">gnvindia7@gmail.com</a>
  </p>
  
  <p>
    <EnvelopeFill className="me-2" />
    <a href="mailto:gnvindiaentertainment@gmail.com" className="text-dark text-decoration-none">gnvindiaentertainment@gmail.com</a>
  </p>
  
  <p>
    <TelephoneFill className="me-2" />
    <a href="tel:+919691474449" className="text-dark text-decoration-none">+91 9691474449</a>
  </p>
  
  <p>
    <Globe className="me-2" />
    <a href="https://gnvindia.in" target="_blank" rel="noopener noreferrer" className="text-dark text-decoration-none">gnvindia.in</a>
  </p>
</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
