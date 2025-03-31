import React from "react";
import "./infrastructure.css"; // Custom CSS

const Infrastructure = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="infra-hero text-center text-white">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Infrastructure</h1>
          <p className="lead">State-of-the-art facilities for world-class events</p>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Facilities</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-building text-primary fs-1"></i>
            <h4>Spacious Venues</h4>
            <p>Large capacity halls for grand events.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-lightning-charge text-warning fs-1"></i>
            <h4>Power Backup</h4>
            <p>24/7 power supply for uninterrupted functions.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-wifi text-success fs-1"></i>
            <h4>High-Speed WiFi</h4>
            <p>Seamless internet connectivity for events.</p>
          </div>
        </div>
      </section>

      {/* Infrastructure Gallery */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Gallery</h2>
        <div className="row">
          <div className="col-md-4 mb-3">
            <img src="https://via.placeholder.com/400x250" alt="Facility 1" className="infra-img"/>
          </div>
          <div className="col-md-4 mb-3">
            <img src="https://via.placeholder.com/400x250" alt="Facility 2" className="infra-img"/>
          </div>
          <div className="col-md-4 mb-3">
            <img src="https://via.placeholder.com/400x250" alt="Facility 3" className="infra-img"/>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Why Choose Our Infrastructure?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <i className="bi bi-tools text-danger fs-1"></i>
              <h4>Modern Equipment</h4>
              <p>Latest technology for smooth event execution.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-shield-lock text-info fs-1"></i>
              <h4>Security & Safety</h4>
              <p>24/7 security monitoring and safety measures.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-geo-alt-fill text-warning fs-1"></i>
              <h4>Prime Location</h4>
              <p>Easy access and ample parking space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta text-white text-center py-5">
        <div className="container">
          <h2>Want to Visit Our Infrastructure?</h2>
          <p>Contact us today to schedule a tour.</p>
          <a href="/contact" className="btn btn-warning btn-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
