import React from "react";
import { Link } from "react-router-dom";
import "./HowtoApplycnt.css"; // Assuming a CSS file for this component

const Howdoapplycnt = () => {
  return (
    <div className="apply-section">
      <h2>Your Application Journey with INTAKE</h2>
      <p>
        INTAKE provides comprehensive support to help you navigate the complexities of applying to universities abroad. From selecting the right course and institution to preparing your documents and submitting your application, our expert counsellors are with you every step of the way.
      </p>

      <h3>Ready to take the next step?</h3>
      <p>
        Whether you need to book an English proficiency test or start your university application, we've got you covered.
      </p>

      <Link to="/pages/IELTSPage" className="apply-btn">
        Book an IELTS Test
      </Link>

      <Link to="/pages/white-link/Avail" className="apply-btn" style={{ marginLeft: '15px' }}>
        Free for Counselling
      </Link>
    </div>
  );
};

export default Howdoapplycnt;