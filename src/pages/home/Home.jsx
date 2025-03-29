import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

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
    <div className="home" style={{marginTop:"65px"}}>
      <div className="container-lg shadow_1">
        <div className="col">
          
        </div>
        <div className="col shadow_12">
          <div
            id="carouselExampleCaptions"
            className="carousel slide caroimg"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>
            <div className="carousel-inner">
              {/* Slide 1 */}
              <div className="carousel-item active">
                <div className="carousel-image">
                  <img
                    src="/assets/home/images/cnt_1/g14.jpg"
                    className="d-block w-100"
                    alt="Event Decoration"
                    loading="lazy"
                  />
                  <div className="overlay"></div> {/* Overlay Added */}
                </div>
                <div className="carousel-caption">
                  <h5>First Slide Title</h5>
                  <p>Your text here for the first slide.</p>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <div className="carousel-image">
                  <img
                    src="/assets/home/images/cnt_1/g41.jpg"
                    className="d-block w-100"
                    alt="Slide 2"
                  />
                  <div className="overlay"></div> {/* Overlay Added */}
                </div>
                <div className="carousel-caption">
                  <h5>Second Slide Title</h5>
                  <p>Your text here for the second slide.</p>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <div className="carousel-image">
                  <img
                    src="/assets/home/images/cnt_1/slider1.jpg"
                    className="d-block w-100"
                    alt="Slide 3"
                  />
                  <div className="overlay"></div> {/* Overlay Added */}
                </div>
                <div className="carousel-caption">
                  <h5>Third Slide Title</h5>
                  <p>Your text here for the third slide.</p>
                </div>
              </div>
            </div>

            {/* Previous Button */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>

            {/* Next Button */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div class="container-fluid shadow_112 container_2 px-3" style={{marginTop:"36px"}}>
        <p class="sub-title">Our services</p>
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="section-pragraph text-start">
              <h2 class="big-title">
                <strong>No.1</strong> Events Management
              </h2>
              <p className="lorem mt-4">
                GNV INDIA ENTERTAINMENT is a Central India based Event
                Management and Advertisement company. We are best in industry
                for providing international acts and artists...we also provide
                celebrities from Bollywood, tv actors, sports personalities for
                all events appearances and all kind of events etc.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img
              src="/assets/home/images/cnt_1/slider1.jpg"
              className="d-block w-100"
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
                  className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-4"
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
      <section className="why-choose-us container2 m-3">
        <div className="container my-5">
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

      <div className="container-fluid mt-5">
        <div className="row">
          {/* Left Section - Carousel */}
          <div className="col-lg-6">
            <div className="row">
              <div
                id="carouselLeft"
                className="carousel slide"
                data-bs-touch="false"
                data-bs-interval="2000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/assets/home/images/cnt_1/g14.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/home/images/cnt_1/g41.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/assets/home/images/cnt_1/slider1.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselLeft"
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
                  data-bs-target="#carouselLeft"
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

          {/* Right Section - Second Carousel */}
          <div className="col">
            <div className="row">
              <div className="col col-img">
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col col-img">
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>{" "}
            <div className="row">
              <div className="col col-img">
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col col-img">
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
            <div className="row">
              <div className="col col-img-2 ">
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <img
                  src="/assets/home/images/cnt_2/g11.jpg"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
