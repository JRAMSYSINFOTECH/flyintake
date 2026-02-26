import React from "react";
import "./FooterPage.css";

export default function IntakeCareers() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Careers at FlyIntake</h1>
        <p>
          Join FlyIntake Global Consulting and be part of a dynamic team dedicated to supporting students
          on their international education journeys. Explore opportunities across counselling, technology,
          marketing, and operations.
        </p>
        <div className="footer-page-content">
          <h2>Why Work with Us?</h2>
          <ul>
            <li>Global reach with offices across multiple countries</li>
            <li>Competitive salary and benefits</li>
            <li>Continuous professional growth and training</li>
            <li>Collaborative and inclusive culture</li>
            <li>Contribute to making a real difference in students' lives</li>
          </ul>
          <h2>Current Openings</h2>
          <p>We are constantly seeking passionate individuals. Please check back for the latest vacancies.</p>
          <button className="footer-page-btn">View Open Positions</button>
        </div>
      </div>
    </section>
  );
}

