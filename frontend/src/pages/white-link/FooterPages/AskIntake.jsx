import React from "react";
import "./FooterPage.css";

export default function AskIntake() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Ask INTAKE</h1>
        <p>
          Have questions about studying abroad? Our expert counsellors are here to help you every step of the way. 
          Get personalized guidance on courses, universities, scholarships, visas, and more.
        </p>
        <div className="footer-page-content">
          <h2>How Can We Help You?</h2>
          <ul>
            <li>Course and university selection</li>
            <li>Application process guidance</li>
            <li>Scholarship information</li>
            <li>Visa assistance</li>
            <li>Pre-departure support</li>
          </ul>
          <h2>Get in Touch</h2>
          <p>Book a free counselling session with our expert counsellors today.</p>
          <button className="footer-page-btn">Book Free Counselling</button>
        </div>
      </div>
    </section>
  );
}

