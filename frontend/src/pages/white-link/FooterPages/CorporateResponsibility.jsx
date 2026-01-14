import React from "react";
import "./FooterPage.css";

export default function CorporateResponsibility() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Corporate Responsibility</h1>
        <p>
          At INTAKE Education, we are committed to making a positive impact on society through our corporate 
          responsibility initiatives. We believe in giving back to communities and supporting educational 
          access for all.
        </p>
        <div className="footer-page-content">
          <h2>Our Commitment</h2>
          <ul>
            <li>Supporting educational access for underprivileged students</li>
            <li>Environmental sustainability initiatives</li>
            <li>Community development programs</li>
            <li>Ethical business practices</li>
            <li>Employee volunteer programs</li>
          </ul>
          <h2>Our Impact</h2>
          <p>
            Through our various programs and initiatives, we strive to create a positive impact on the 
            communities we serve and contribute to a better future for students worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}

