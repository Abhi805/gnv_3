

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <nav
        className=" navbar navbar-expand-lg navbar-light fixed-top shadow_111 "
        style={{ background: "white" }}
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to='/'>
            <img src="/assets/logos/favicon.png" alt="Logo" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item custom-link">
                <Link style={{color:"#D90429"}} class="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link  style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/aboutUs">
                  About Us
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/ourTeam">
                  Our Team
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/infrastructure">
                  Infrastructure
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/whyUs">
                  Why Us
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/ourClients">
                  Our Clients
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/gallery">
                  Gallery
                </Link>
              </li>
           
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/contactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
