import React from "react";
import "./FooterPage.css";

export default function CustomerGrievances() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Customer Grievances</h1>
        <p>
          Your satisfaction is our priority. If you have any concerns or complaints about our services, 
          we are here to help. We take all grievances seriously and are committed to resolving them promptly.
        </p>
        <div className="footer-page-content">
          <h2>How to File a Grievance</h2>
          <ul>
            <li>Contact your local INTAKE office directly</li>
            <li>Email us at grievances@intake.com</li>
            <li>Call our customer service helpline</li>
            <li>Submit a complaint through our online form</li>
          </ul>
          <h2>Our Commitment</h2>
          <p>
            We aim to acknowledge all grievances within 24 hours and resolve them within 7-10 business days. 
            Your feedback helps us improve our services.
          </p>
          <button className="footer-page-btn">Submit a Grievance</button>
        </div>
      </div>
    </section>
  );
}

