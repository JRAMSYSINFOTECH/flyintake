import React from "react";
import "./FooterPage.css";

export default function IntakeCareers() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Intake Careers</h1>
        <p>
          Join INTAKE Education and be part of a global team that helps students achieve their study abroad dreams. 
          We offer exciting career opportunities across various departments including counselling, marketing, 
          technology, and administration.
        </p>
        <div className="footer-page-content">
          <h2>Why Work at INTAKE?</h2>
          <ul>
            <li>Global presence with offices in over 30 countries</li>
            <li>Competitive salary and benefits packages</li>
            <li>Professional development opportunities</li>
            <li>Inclusive and diverse work environment</li>
            <li>Make a meaningful impact on students' lives</li>
          </ul>
          <h2>Current Openings</h2>
          <p>We are always looking for talented individuals to join our team. Check back regularly for new opportunities.</p>
          <button className="footer-page-btn">View Open Positions</button>
        </div>
      </div>
    </section>
  );
}

