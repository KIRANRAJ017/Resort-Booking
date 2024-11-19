import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-left-section">
            <div><h2 className="footer-title">Magic Moments.</h2></div>
          <div className="foot"><p className="footer-links">
            <a href="#about" className="footer-link">About |</a>
            <a href="#benefits" className="footer-link">Rooms |</a>
            <a href="#career" className="footer-link">Gallery |</a>
            <a href="#support" className="footer-link">Book Rooms |</a>
          </p>
          <p className="footer-copyright">
            &copy; 2024 Magic Moments.
          </p></div>
        </div>
        <div className="footer-right-section">
          <div className="footer-icons">
            <FaFacebookF className="footer-icon" />
            <FaTwitter className="footer-icon" />
            <FaYoutube className="footer-icon" />
            <FaInstagram className="footer-icon" />
          </div>
          <p className="footer-contact">Support: mudassar@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
