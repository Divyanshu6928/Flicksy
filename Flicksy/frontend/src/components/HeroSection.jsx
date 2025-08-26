import React from "react";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="main-hero">
      <div className="hero-section m-5">
        <div className="center-box">
          <h1>Hostel Adda for Food & Essentials</h1>
          <div className="btn-container">
            <button className=" btnBrowse">Browse Products <span className="bi bi-cart-fill"> </span></button>
            <button className=" btnEmergency">Emergency Kit !! <span className="bi bi-brightness-alt-high"> </span> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
