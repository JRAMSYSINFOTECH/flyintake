import React from "react";
import "./FooterPage.css";

export default function Investors() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Investors</h1>
        <p>
          INTAKE Education is a leading global education services company. Learn about our financial performance, 
          corporate governance, and investment opportunities.
        </p>
        <div className="footer-page-content">
          <h2>Investor Information</h2>
          <ul>
            <li>Annual reports and financial statements</li>
            <li>Shareholder information</li>
            <li>Corporate governance</li>
            <li>Stock performance</li>
            <li>Investor relations contacts</li>
          </ul>
          <h2>Financial Highlights</h2>
          <p>
            INTAKE Education continues to grow and expand its global presence, delivering strong financial results 
            and creating value for our shareholders.
          </p>
          <button className="footer-page-btn">View Investor Resources</button>
        </div>
      </div>
    </section>
  );
}

