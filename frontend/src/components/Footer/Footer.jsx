
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './Footer.css'; // Import external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h2>About INTAKE</h2>
          <ul>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/study-abroad/why-study-abroad">Study abroad counselling</Link></li>
            <li><Link to="/INTAKE-careers">INTAKE Careers</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Useful Links</h2>
          <ul>
            <li><Link to="/find-a-course">Find a course</Link></li>
            <li><Link to="/find-scholarships">Find scholarships</Link></li>
            <li><Link to="/find-universities">Find a university</Link></li>
            <li><Link to="/ask-idp">Ask INTAKE</Link></li>
            <li><Link to="/cost-of-living">Cost of living</Link></li>
            <li><Link to="/statement-of-purpose">Statement of Purpose</Link></li>
            <li><Link to="/letter-of-recommendation">Letter of Recommendation</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>IELTS</h2>
          <ul>
            <li><Link to="/IELTS/What_is_IELTS/What">What is IELTS?</Link></li>
            <li><Link to="/ielts/what-is-ielts">Why take IELTS with INTAKE?</Link></li>
            <li><Link to="/ielts/IELTS_prep/Prep">IELTS Preparation</Link></li>
       
          </ul>
        </div>
        <div className="footer-column">
          <h2>Connect with INTAKE</h2>
          <ul>
            <li><Link to="/pages/Events">Events</Link></li>
            <li><Link to="/corporate-responsibility">Corporate responsibility</Link></li>
            <li><Link to="/pages/black-link/Find/Find">Our offices</Link></li>
            <li><Link to="/customer-grievances">Customer support</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-row">
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2025 INTAKE Education</p>
        <p>IELTS is jointly owned by INTAKE: IELTS Australia, British Council and Cambridge English.</p>
        <p>Cambridge English is part of Cambridge University Press & Assessment.</p>
      </div>
      <div className="footer-row">

        <ul>
          <li><Link to="/investors">Investors</Link></li>
          <li><Link to="/terms-of-use">Terms of use</Link></li>
          <li><Link to="/privacy-policy">Privacy policy</Link></li>
          <li><Link to="/disclaimer">Disclaimer</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;