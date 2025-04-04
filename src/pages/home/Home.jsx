import React from "react";
import "./home.css";

const cardData = [
  {
    title: "Wedding Planner",
    text: "anytime anywhere ",
    img: "/assets/home/images/cnt_2/g2.jpg",
  },

  {
    title: "Celebrity Managment",
    text: "anytime anywhere",
    img: "/assets/home/images/cnt_2/g11.jpg",
  },
  {
    title: "Corporate Events",
    text: "the best & perfect venues",
    img: "/assets/home/images/cnt_2/g16.jpg",
  },
  {
    title: "Sports Events",
    text: "We make you perfect event",
    img: "/assets/home/images/cnt_2/g27.jpg",
  },
  {
    title: "Road Shows",
    text: "the best & perfect venues",
    img: "/assets/home/images/cnt_2/g25.jpg",
  },
  {
    title: "Theme Parties",
    text: "We have million ideas",
    img: "/assets/home/images/cnt_2/g28.jpg",
  },
  {
    title: "Press Conference",
    text: "We think out of the box",
    img: "/assets/home/images/cnt_2/g29.jpg",
  },
  {
    title: "Exhibitions",
    text: "We make you perfect event",
    img: "/assets/home/images/cnt_2/g30.jpg",
  },
  {
    title: "Promotional Activities",
    text: "We have million ideas",
    img: "/assets/home/images/cnt_2/g31.jpg",
  },
  {
    title: "Event Managment",
    text: "the best & perfect venues",
    img: "/assets/home/images/cnt_2/g32.jpg",
  },
  {
    title: "Brand Managment",
    text: "We think out of the box",
    img: "/assets/home/images/cnt_2/g33.jpg",
  },
  {
    title: "Model Coordination",
    text: "We make you perfect event",
    img: "/assets/home/images/cnt_2/g34.jpg",
  },
  {
    title: "Cultural Events",
    text: "We think out of the box",
    img: "/assets/home/images/cnt_2/g8.jpg",
  },
  {
    title: "Wedding Planner",
    text: "anytime anywhere ",
    img: "/assets/home/images/cnt_2/g2.jpg",
  },
];

const cardData2 = [
  {
    title: "Wedding Planner",
    text: "anytime anywhere ",
    img: "/assets/home/images/cnt_2/g2.jpg",
  },
  {
    title: "Govt. Events",
    text: "more then 200 teams",
    img: "/assets/home/images/cnt_2/g7.jpg",
  },
  {
    title: "Celebrity Managment",
    text: "anytime anywhere",
    img: "/assets/home/images/cnt_2/g11.jpg",
  },
  {
    title: "Corporate Events",
    text: "the best & perfect venues",
    img: "/assets/home/images/cnt_2/g16.jpg",
  },
  {
    title: "Sports Events",
    text: "We make you perfect event",
    img: "/assets/home/images/cnt_2/g27.jpg",
  },
  {
    title: "Road Shows",
    text: "the best & perfect venues",
    img: "/assets/home/images/cnt_2/g25.jpg",
  },
  {
    title: "Theme Parties",
    text: "We have million ideas",
    img: "/assets/home/images/cnt_2/g28.jpg",
  },
  {
    title: "Cultural Events",
    text: "We think out of the box",
    img: "/assets/home/images/cnt_2/g8.jpg",
  },
];

export default function Home() {
  return (
    <div className="home" style={{ marginTop: "80px" }}>
      <div className="container-fluid   shap py-4">
        <div className="row">
          {/* Logo Image on Left */}
          <div className="col-md-6 col-sm-12 col-12 col-lg-6 text-start  mt-3 mt-md-5 custom-margin" style={{marginTop:"71px"}}>
            <h1
              style={{
                color: "#D90429",
                fontStyle: "italic",
                fontSize: "clamp(40px, 5vw, 55px)", // Responsive font size
                marginTop: "clamp(2px, 0.5vw, 20px)", // Responsive margin
                textAlign: "center",
                marginBottom: "-0.5rem",
              }}
            >
              <span>G</span>nv India
            </h1>
            <h2
              style={{
                color: "#D90429",
                fontStyle: "italic",
                fontSize: "clamp(40px, 5vw, 55px)", // Responsive font size
                textAlign: "center", 
              }}
            >
              Entertainment
            </h2>

            <h3
              style={{
                color: "#D90429",
                fontStyle: "italic",

                textAlign: "center",
              }}
            >
              Event | Promotions | Exhibition
            </h3>
            <ul className="navbar-nav ms-auto mt-5 ">
              <li className="nav-item btn_2 d-flex flex-wrap justify-content-center gap-3 mb-2">
                <a className="btn btn-hover" href="mailto:gnvindia7@gmail.com">
                  gnvindia7@gmail.com
                </a>
                <a className="btn btn-hover" href="tel:+9009081222">
                  Get a Quote 9009-081-222
                </a>
              </li>

              <li className="nav-item d-flex justify-content-center">
                <a
                  className="btn btn-hover btn_1 d-flex justify-content-center align-items-center"
                  style={{ width: "80%", marginBottom: "8px" }}
                  href="#"
                >
                  Get a Meeting
                </a>
              </li>
            </ul>
          </div>

          {/* Carousel on Right */}
          <div className="col-md-6 text-end">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="1500"
              data-bs-pause="false"
            >
              {/* Indicators */}
              <div className="carousel-indicators">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Carousel Inner */}
              <div className="carousel-inner">
                {[
                  "/assets/home/images/cnt_1/g12.jpg",
                  "/assets/home/images/cnt_1/g17.jpg",
                  "/assets/home/images/cnt_1/g28.jpg",
                ].map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image}
                      className="d-block w-100 img-fluid"
                      style={{
                        marginLeft: "auto",
                        marginRight: "0",
                        minHeight: "150px",
                        maxHeight: "450px",
                        objectFit: "cover",
                      }}
                      alt={`Slide ${index + 1}`}
                    />
                    {/* <div className="carousel-caption">
                      <h5>{`Slide ${index + 1} Title`}</h5>
                      <p>{`Your text for slide ${index + 1}.`}</p>
                    </div> */}
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="container-fluid shadow_112 container_2 pb-5" style={{ marginTop: "36px" }}>
  <p className="sub-title text-center" style={{ fontSize: "clamp(24px, 4vw, 45px)", color: "#d90429" }}>
    <u>Our Services</u>
  </p>
  <div className="row align-items-center">
    {/* Left Content */}
    <div className="col-lg-6 col-md-6 col-sm-12 px-md-4 px-sm-3">
      <div className="section-pragraph text-start">
        <h2 style={{ color: "#d90429" }} className="big-title">
          <strong>
            GnvIndia <br /> Entertainment
          </strong>
        </h2>
        <h2 style={{ color: "#d90429" }} className="big-title">
          <strong>No.1</strong> Events Management
        </h2>
        <p className="lorem mt-4 siz">
          GNV INDIA ENTERTAINMENT is a Central India-based Event Management and Advertisement company. We are best in the industry
          for providing international acts and artists...we also provide celebrities from Bollywood, TV actors, sports
          personalities for all events appearances and all kinds of events etc.
        </p>
      </div>
    </div>
    {/* Right Image */}
    <div className="col-lg-6 col-md-6 col-sm-12 px-md-4 px-sm-3">
      <img
        src="/assets/home/images/cnt_1/h91.webp"
        className="d-block w-100 img-fluid"
        alt="Slide 3"
      />
    </div>
  </div>
</div>

      {/* container_3 Card */}

      <div className="container-fluid mt-5" style={{ width: "80%" }}>
        <div className="row d-flex justify-content-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-4"
            >
              <div className="card" style={{ width: "16rem" }}>
                <img
                  src={card.img}
                  className="card-img-top img-fluid"
                  alt="Card Image"
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*container_3.1 */}

      {/* Gallery Section */}
      <div className="container" style={{ width: "80%" }}>
        <section className="gallery-section">
          <h2 className="text-primary">GNV INDIA GALLARY</h2>
          <h1>Beautiful & Unforgettable Times</h1>
          <div className="container-fluid mt-5">
            <div className="row d-flex justify-content-center">
              {cardData2.map((card, index2) => (
                <div
                  key={index2}
                  className="col-lg-3 col-md-4 col-sm-6 col-6 d-flex justify-content-center mb-4"
                >
                  <div className="card2" style={{ width: "16rem" }}>
                    <img
                      src={card.img}
                      className="card-img-top img-fluid"
                      alt="Card Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="btn btn-warning">View All Gallery</button>
        </section>
      </div>
      {/* Why Choose Us */}
      <section className="why-choose-us container2 m-4">
        <div className="container my-1">
          <div className="row">
            {/* Left Side: Why Choose Us */}
            <div className="col-md-7">
              <h5 className="text-muted">Why Choose Us?</h5>
              <h2 className="fw-bold">
                <span className="text-dark">GNV </span>
                <span className="text-primary">INDIA </span>ENTERTAINMENT
              </h2>
              <p className="text-secondary">
                Event Management Company, a group of dynamic professionals
                working with prestigious names in the industry.
              </p>
              <ul className="list-unstyled">
                <li>✅ 7000+ events in corporate fields</li>
                <li>✅ 360 Degree Full-Service Event Management</li>
                <li>✅ Fully accredited</li>
                <li>✅ Proven credential and services</li>
                <li>✅ Centrally located/prompt service</li>
                <li>✅ 23 employees at Bhopal office</li>
                <li>✅ Exclusive creative department</li>
                <li>✅ Dedicated team</li>
                <li>✅ Speedy delivery process</li>
              </ul>
            </div>

            {/* Right Side: Inquiry Form */}
            <div className="col-md-5">
              <div className="card p-4 shadow">
                <h4 className="mb-3">Request a Quote</h4>
                <form>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Email Address"
                  />
                  <input
                    type="tel"
                    className="form-control mb-3"
                    placeholder="Mobile Number"
                  />
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Your Address"
                  />
                  <button className="btn btn-warning w-100">Send Mail</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}

      <div className="container-fluid py-5">
        {/* CTA Section */}

        <div class="row g-4 align-items-stretch m-3">
          <section className="cta-section cat1 text-center bg-primary text-white py-5 rounded">
            <h3 className="fs-2 fw-bold">
              Are You Ready To Make Your Own Special Events?
            </h3>
            <button className="btn btn-light mt-3 fw-semibold shadow">
              Contact Now
            </button>
          </section>
        </div>
        <div className="row m-3">
          <section
            style={{ paddingTop: "35px" }}
            className="cta-section cat2 text-center bg-primary text-white rounded "
          >
            <div className="text-center">
              <h2 className="fw-bold ">
                Our <strong className="">Valuable Clientele</strong>
              </h2>
              <p className="mt-2">
                GNV INDIA ENTERTAINMENT believes in creating exemplary
                Productions, Events & Weddings. Your event will be our
                masterpiece, no two will be the same…
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="container-fluid shad mar p-5">
        <div className="row d-flex justify-content-center">
          {/* Left Section - First Carousel */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2 lop">
          <h2 style={{textAlign:"center"}} >TESTIMONIAL</h2>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="1500"
              data-bs-pause="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/assets/home/images/cnt_1/h7.png"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/home/images/cnt_1/h20.webp"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/home/images/cnt_1/h60.webp"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Right Section - Second Carousel */}
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2 shadow-lg">
            <h2 style={{textAlign:"center"}} >Our Respectable Client</h2>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="2000"
              data-bs-pause="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/assets/home/images/cnt_2/prt2.png"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                  
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/home/images/cnt_2/prt3.png"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/home/images/cnt_2/ptn1.png"
                    className="d-block w-100 img-fluid"
                    alt="..."
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
