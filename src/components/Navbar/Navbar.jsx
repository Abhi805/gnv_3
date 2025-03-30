

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <nav
        className=" navbar navbar-expand-lg navbar-light fixed-top shadow_111 "
        style={{ top: "2px", background: "white" }}
      >
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img src="/assets/logos/favicon.png" alt="Logo" height="40" />
          </a>
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
                <Link  style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/">
                  About Us
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/">
                  Our Team
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/">
                  Infrastructure
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/">
                  Services
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/">
                  Why Us
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/">
                  Our Clients
                </Link>
              </li>
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/">
                  Gallery
                </Link>
              </li>
           
              <li className="nav-item  custom-link">
                <Link style={{color:"#D90429"}} class="nav-link " aria-current="page" to="/">
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
