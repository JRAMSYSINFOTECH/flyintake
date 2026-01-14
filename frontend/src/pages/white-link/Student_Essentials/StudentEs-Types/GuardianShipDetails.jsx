import React from "react";
import "../StudentEss.css";

export default function GuardianShipDetails() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Guardianship / Details
        </p>
        <h1 className="hero-heading">Guardianship support for under‑18 students</h1>
        <p className="hero-subtext">
          Learn how approved guardians help you meet university and visa conditions while keeping you
          safe and supported overseas.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">What a guardian can help with</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Compliance and paperwork</h3>
            <p>
              Universities and governments often require a local guardian – we explain the process
              and help you connect with trusted providers.
            </p>
          </div>
          <div className="feature-card">
            <h3>Everyday support</h3>
            <p>
              A guardian can help with enrolment, medical appointments, school meetings and important
              decisions while you are under 18.
            </p>
          </div>
          <div className="feature-card">
            <h3>Regular updates to parents</h3>
            <p>
              Families receive updates and have a responsible adult they can contact in the student’s
              destination country.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


