import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar-container">
    <Link to="/" className='logo-section'>
      <img src={Logo} alt="logo" className="navbar-logo" />
      <div className="logo-text">Gym Guru</div>
    </Link>
    <div className="navbar-links">
      <Link to="/" className="navbar-link home-link">Home</Link>
      <Link to="/bmi" className="navbar-link bmi-link">BMI</Link>
      <Link to="/nutrient" className="navbar-link nutrient-link">Nutrient Info</Link>
      <a href="#exercises" className="navbar-link ">Exercises</a>
    </div>
  </div>
);

export default Navbar;

