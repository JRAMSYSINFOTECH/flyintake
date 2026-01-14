import React from "react";
import "./FooterPage.css";

export default function PrivacyPolicy() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Privacy Policy</h1>
        <p>
          At INTAKE Education, we are committed to protecting your privacy. This privacy policy explains how we 
          collect, use, and safeguard your personal information.
        </p>
        <div className="footer-page-content">
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name, email address, and contact information</li>
            <li>Academic background and qualifications</li>
            <li>Study preferences and goals</li>
            <li>Application documents</li>
          </ul>
          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide our counselling and application services</li>
            <li>To process your university applications</li>
            <li>To send you relevant information about study abroad opportunities</li>
            <li>To improve our services</li>
          </ul>
          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized 
            access, alteration, disclosure, or destruction.
          </p>
          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information at any time. Please contact 
            us if you have any questions about our privacy practices.
          </p>
        </div>
      </div>
    </section>
  );
}

