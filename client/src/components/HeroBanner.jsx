import React from 'react';
import HeroBannerImage from '../assets/images/banner.png';
// import HeroBannerImage from '../assets/images/b1.jpg';

import "./Home.css"

const HeroBanner = () => (
  <div className="hero-banner-container">
    <h1 className="hero-banner-title">Fitness Club</h1>
    <h2 className="hero-banner-subtitle">
      Sweat, Smile <br />
      And Repeat
    </h2>
    <p className="hero-banner-description">
      Check out the most effective exercises personalized to you
    </p>
    <div className="hero-banner-button-container">
      <a href="#exercises" className="hero-banner-button">Explore Exercises</a>
    </div>
    <h3 className="hero-banner-bg-text">Exercise</h3>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </div>
);

export default HeroBanner;
