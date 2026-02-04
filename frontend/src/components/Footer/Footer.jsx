import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './Footer.css';

const Footer = () => {
  return (
    <footer className="flyintake-footer">
      {/* Main Footer Content Sections */}
      <div className="flyintake-footer-sections">
        {/* English Tests Section - First */}
        <div className="flyintake-footer-column">
          <h2>English Tests</h2>
          <ul>
            <li><Link to="/Pages/Toefl">TOEFL</Link></li>
            <li><Link to="/Pages/IeltsPage">IELTS</Link></li>
            <li><Link to="/Pages/Duolingo">Duolingo English Test</Link></li>
          </ul>
        </div>

        {/* Study Abroad Section */}
        <div className="flyintake-footer-column">
          <h2>Study Abroad</h2>
          <ul>
            <li><Link to="/study-abroad/why-study-abroad">Why Study Abroad</Link></li>
            <li><Link to="/study-abroad/where-to-study">Where to Study</Link></li>
            <li><Link to="/study-abroad/how-to-apply">How to Apply</Link></li>
            <li><Link to="/study-abroad/after-offer">After Receiving an Offer</Link></li>
            <li><Link to="/study-abroad/prepare-to-depart">Preparing to Depart</Link></li>
            <li><Link to="/study-abroad/arrive-and-thrive">After Arrival</Link></li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="flyintake-footer-column">
          <h2>Useful Links</h2>
          <ul>
            <li><Link to="/statement-of-purpose">Statement of Purpose</Link></li>
            <li><Link to="/letter-of-recommendation">Letter of Recommendation</Link></li>
            <li><Link to="/pages/Trainings">IT & Management Trainings</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flyintake-footer-column">
          <h2>Connect With Us</h2>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/flyintake" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            
            <li>
              <a href="https://www.instagram.com/flyintake" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/flyintake" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom - Copyright Only */}
      <div className="flyintake-footer-bottom">
        <p>© 2025 FlyInTake Global Consulting Private Limited</p>
        <p>Technology Consulting & Educational Support Services</p>
      </div>
    </footer>
  );
};

export default Footer;