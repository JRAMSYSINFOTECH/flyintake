import React from "react";
import "./FooterPage.css";
import { Link } from "react-router-dom";

export default function StatementOfPurpose() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Statement of Purpose (SOP)</h1>
        <p>
          A well-written Statement of Purpose is crucial for your university application. 
          Learn how to craft a compelling SOP that showcases your academic achievements, 
          career goals, and motivation for studying abroad.
        </p>
        <div className="footer-page-content">
          <h2>What is a Statement of Purpose?</h2>
          <p>
            A Statement of Purpose (SOP) is a personal essay that explains your academic background, 
            career goals, and reasons for choosing a particular course and university. It's your opportunity 
            to stand out from other applicants.
          </p>
          <h2>Tips for Writing a Great SOP</h2>
          <ul>
            <li>Be clear and concise</li>
            <li>Highlight your achievements and experiences</li>
            <li>Explain why you chose the specific course and university</li>
            <li>Discuss your career goals</li>
            <li>Proofread carefully</li>
          </ul>
          <Link to="/pages/white-link/Avail" className="footer-page-btn">
            Get Expert SOP Writing Assistance
          </Link>
        </div>
      </div>
    </section>
  );
}

