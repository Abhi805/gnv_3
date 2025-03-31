import React from "react";
import "./aboutUs.css"; // Custom CSS

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero text-center text-white">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="display-4 fw-bold">About Us</h1>
          <p className="lead">Creating Unforgettable Events & Experiences</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Who We Are?</h2>
            <p>
              Gnv India Entertainment is a leading event management company
              specializing in corporate, wedding, and promotional events. We
              bring creativity, professionalism, and perfection to every event.
            </p>
          </div>
          <div className="col-md-6">
            <img src="https://via.placeholder.com/500" alt="Event Management" className="img-fluid rounded"/>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6">
              <h3>Our Mission</h3>
              <p>To create extraordinary events with precision and innovation.</p>
            </div>
            <div className="col-md-6">
              <h3>Our Vision</h3>
              <p>To be the most trusted event management company in India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-star-fill text-primary fs-1"></i>
            <h4>Experienced Team</h4>
            <p>Over 10 years of experience in event planning.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-heart-fill text-danger fs-1"></i>
            <h4>Customer Satisfaction</h4>
            <p>We prioritize customer happiness and satisfaction.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-briefcase-fill text-warning fs-1"></i>
            <h4>Professionalism</h4>
            <p>We ensure high standards and flawless execution.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h2>Meet Our Team</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mb-3"/>
              <h5>John Doe</h5>
              <p>Event Director</p>
            </div>
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mb-3"/>
              <h5>Jane Smith</h5>
              <p>Creative Head</p>
            </div>
            <div className="col-md-4">
              <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-circle mb-3"/>
              <h5>Michael Lee</h5>
              <p>Operations Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Client Testimonials</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <p>"Gnv India Entertainment made our wedding spectacular!"</p>
              <h5>- Rahul Sharma</h5>
            </div>
            <div className="carousel-item text-center">
              <p>"Professional and innovative event planning. Highly recommended!"</p>
              <h5>- Anjali Mehta</h5>
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
    </div>
  );
};

export default AboutUs;
