import React from "react";
import "./ourServices.css"; // Custom CSS

const OurServices = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="services-hero text-center text-white">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p className="lead">Premium event planning & management solutions</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">What We Offer</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-calendar-event text-primary fs-1"></i>
            <h4>Corporate Events</h4>
            <p>Professional event management for businesses.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-gem text-danger fs-1"></i>
            <h4>Weddings & Parties</h4>
            <p>Luxury wedding and private party arrangements.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-megaphone text-success fs-1"></i>
            <h4>Brand Promotions</h4>
            <p>Marketing and promotional event planning.</p>
          </div>
        </div>

        <div className="row text-center mt-4">
          <div className="col-md-4">
            <i className="bi bi-stars text-warning fs-1"></i>
            <h4>Celebrity Management</h4>
            <p>Organizing celebrity appearances & shows.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-people text-info fs-1"></i>
            <h4>Conference & Exhibitions</h4>
            <p>Planning large-scale corporate conferences.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-camera-reels text-secondary fs-1"></i>
            <h4>Media & PR</h4>
            <p>Public relations & media coverage solutions.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Why Choose Our Services?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <i className="bi bi-award text-danger fs-1"></i>
              <h4>Experienced Team</h4>
              <p>Highly skilled professionals in event management.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-graph-up-arrow text-info fs-1"></i>
              <h4>Proven Success</h4>
              <p>We have successfully managed 500+ events.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-hand-thumbs-up-fill text-warning fs-1"></i>
              <h4>Customer Satisfaction</h4>
              <p>Our clients trust us for high-quality services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="container my-5">
        <h2 className="text-center mb-4">What Our Clients Say</h2>
        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <p>"They made our wedding unforgettable! The team is amazing."</p>
              <h5>- Ayesha Sharma</h5>
            </div>
            <div className="carousel-item text-center">
              <p>"The best corporate event planning service. Highly recommended!"</p>
              <h5>- Rahul Mehta</h5>
            </div>
            <div className="carousel-item text-center">
              <p>"Professional and creative team. Loved their work!"</p>
              <h5>- Sneha Kapoor</h5>
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

      {/* Call to Action Section */}
      <section className="cta text-white text-center py-5">
        <div className="container">
          <h2>Need Our Services?</h2>
          <p>Contact us today to plan your next big event.</p>
          <a href="/contact" className="btn btn-warning btn-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
