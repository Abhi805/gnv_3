import React, { useState } from "react";
import "./gallery.css"; // Custom CSS
import { FaSearchPlus } from "react-icons/fa";

const images = [
  { src: "https://via.placeholder.com/400x300", category: "Event" },
  { src: "https://via.placeholder.com/400x300", category: "Conference" },
  { src: "https://via.placeholder.com/400x300", category: "Workshop" },
  { src: "https://via.placeholder.com/400x300", category: "Networking" },
  { src: "https://via.placeholder.com/400x300", category: "Celebration" },
  { src: "https://via.placeholder.com/400x300", category: "Seminar" }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="gallery-hero text-center text-white">
        <div className="container">
          <h1 className="display-4 fw-bold">Our Gallery</h1>
          <p className="lead">Explore the moments we've captured</p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Latest Work</h2>
        <div className="row">
          {images.map((img, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="gallery-item" onClick={() => setSelectedImage(img.src)}>
                <img src={img.src} alt="Gallery" className="gallery-img" />
                <div className="overlay">
                  <FaSearchPlus className="zoom-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Preview */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged" className="lightbox-img" />
        </div>
      )}

      {/* CTA Section */}
      <section className="cta text-white text-center py-5">
        <div className="container">
          <h2>Want to Capture Your Special Moments?</h2>
          <p>Contact us today for professional event photography!</p>
          <a href="/contact" className="btn btn-primary btn-lg">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
