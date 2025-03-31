import React from "react";
import "./contactUs.css"; // Custom CSS

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="contact-hero text-center text-dark">
        <div className="container">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="lead">We would love to hear from you!</p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <h5>📍 Address</h5>
            <p>123 Business Street, City, Country</p>
          </div>
          <div className="col-md-4">
            <h5>📞 Phone</h5>
            <p>+1 234 567 890</p>
          </div>
          <div className="col-md-4">
            <h5>📧 Email</h5>
            <p>info@example.com</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="container contact-form">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="4" placeholder="Write your message" required></textarea>
          </div>
          <button type="submit" className="btn btn-dark w-100">Send Message</button>
        </form>
      </section>

      {/* Google Map Embed (Optional) */}
      <section className="map-container mt-5">
        <iframe
          title="Google Map"
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509406!2d144.95565131590456!3d-37.817327979751575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1632110000000!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
