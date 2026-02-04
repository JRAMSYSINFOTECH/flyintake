import React from "react";
import "./FooterPage.css";
import { Link } from "react-router-dom";

export default function LetterOfRecommendation() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Letter of Recommendation (LOR)</h1>
        <p>
          A strong Letter of Recommendation can significantly strengthen your university application. 
          Learn how to request and obtain effective recommendation letters from professors, employers, 
          or mentors who know you well.
        </p>
        <div className="footer-page-content">
          <h2>What is a Letter of Recommendation?</h2>
          <p>
            A Letter of Recommendation (LOR) is a document written by someone who knows you professionally 
            or academically and can vouch for your abilities, character, and potential. Most universities 
            require 2-3 LORs as part of the application process.
          </p>
          <h2>Who Should Write Your LOR?</h2>
          <ul>
            <li>Professors or academic advisors</li>
            <li>Employers or supervisors</li>
            <li>Mentors or coaches</li>
            <li>People who know you well and can speak to your strengths</li>
          </ul>
          <Link to="/pages/white-link/Avail" className="footer-page-btn">
            Contact Us for LOR Assistance
          </Link>
        </div>
      </div>
    </section>
  );
}

