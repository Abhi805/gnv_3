import React from "react";
import "./ourTeam.css"; // Custom CSS

const teamMembers = [
  { name: "John Doe", role: "CEO & Founder", img: "https://via.placeholder.com/200" },
  { name: "Jane Smith", role: "Creative Director", img: "https://via.placeholder.com/200" },
  { name: "Michael Lee", role: "Event Manager", img: "https://via.placeholder.com/200" },
  { name: "Emma Brown", role: "Marketing Head", img: "https://via.placeholder.com/200" },
  { name: "David Wilson", role: "Operations Lead", img: "https://via.placeholder.com/200" },
];

const OurTeam = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="team-hero text-center text-white">
        <div className="overlay"></div>
        <div className="container">
          <h1 className="display-4 fw-bold">Meet Our Team</h1>
          <p className="lead">The Experts Behind Our Success</p>
        </div>
      </section>

      {/* Team Members */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Team Members</h2>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="team-card">
                <img src={member.img} alt={member.name} className="team-img"/>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Team? */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Why Choose Our Team?</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <i className="bi bi-people-fill text-primary fs-1"></i>
              <h4>Highly Experienced</h4>
              <p>Over 10 years of experience in event management.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-lightbulb-fill text-warning fs-1"></i>
              <h4>Innovative Solutions</h4>
              <p>We bring creative and unique event ideas to life.</p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-award-fill text-success fs-1"></i>
              <h4>Proven Success</h4>
              <p>Our team has successfully managed 500+ events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="join-team text-white text-center py-5">
        <div className="container">
          <h2>Want to Join Our Team?</h2>
          <p>We are always looking for talented professionals!</p>
          <a href="/careers" className="btn btn-warning btn-lg">Apply Now</a>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
