import React from "react";
import "./whyUs.css"; // Custom CSS
import { FaAward, FaUsers, FaChartLine, FaLightbulb, FaShieldAlt, FaHeadset } from "react-icons/fa";

const WhyUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="whyus-hero text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Why Choose Us?</h1>
          <p className="lead">Delivering excellence with innovation and commitment.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Key Advantages</h2>
        <div className="row text-center">
          <div className="col-md-4 feature-box">
            <FaAward className="feature-icon text-danger" />
            <h4>Premium Quality</h4>
            <p>Best-in-class services with top-notch quality.</p>
          </div>
          <div className="col-md-4 feature-box">
            <FaUsers className="feature-icon text-primary" />
            <h4>Experienced Team</h4>
            <p>Professional experts ensuring high success rates.</p>
          </div>
          <div className="col-md-4 feature-box">
            <FaChartLine className="feature-icon text-success" />
            <h4>Proven Track Record</h4>
            <p>1000+ successful projects delivered.</p>
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="strengths text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Sets Us Apart?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="strength-card p-4">
                <FaLightbulb className="strength-icon text-warning" />
                <h4>Innovative Solutions</h4>
                <p>Creative & custom solutions tailored to your needs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="strength-card p-4">
                <FaShieldAlt className="strength-icon text-info" />
                <h4>Security & Reliability</h4>
                <p>100% secure and dependable services.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="strength-card p-4">
                <FaHeadset className="strength-icon text-danger" />
                <h4>24/7 Support</h4>
                <p>Always available for customer support & queries.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container my-5">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <p>"They transformed our vision into reality. Truly outstanding!"</p>
              <h5>- Neha Sharma</h5>
            </div>
            <div className="carousel-item text-center">
              <p>"Excellent customer support and high-quality service!"</p>
              <h5>- Rahul Verma</h5>
            </div>
            <div className="carousel-item text-center">
              <p>"Professional, creative, and always on time!"</p>
              <h5>- Priya Kapoor</h5>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta text-white text-center py-5">
        <div className="container">
          <h2>Want to Work with Us?</h2>
          <p>Contact us today and let’s make something great together.</p>
          <a href="/contact" className="btn btn-primary btn-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
