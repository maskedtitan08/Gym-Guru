import React from 'react'
import Logo from '../assets/images/Logo.png';
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-logo">
        {/* <Link to="/"> */}
          <img src={Logo} alt="logo" />
          <h2>Gym Guru</h2>
        {/* </Link> */}
      </div>
      <div><h3>Built with ❤️ by Shreshtha Gupta</h3></div>
      <div className="social-links">
        <p>Connect with me on</p>
        <a href="https://www.linkedin.com/in/shreshtha-gupta-013024242/" target="_blank"><FaLinkedin /></a>
        <a href="" target="_blank"><FaTwitter /></a>
        <a href="https://github.com/maskedtitan08" target="_blank"><FaGithub /></a>
      </div>
    </div>
  )
}

export default Footer