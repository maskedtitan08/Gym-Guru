import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png';
import menu from '../assets/icons/menu.png'
import './Navbar.css';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
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

      <div className="sideMenu">
        <div className="menuIcon">
          <img src={menu} alt="" onClick={() => setMenuOpen((prev) => !prev)} />
        </div>
        <div className={menuOpen ? "menu active" : "menu"}>
          <Link to="/" className="home-link">Home</Link>
          <Link to="/bmi" className="bmi-link">BMI</Link>
          <Link to="/nutrient" className="nutrient-link">Nutrition</Link>
          <a href="#exercises" className="">Exercises</a>
        </div>
      </div>


    </div>
  )

};

export default Navbar;

