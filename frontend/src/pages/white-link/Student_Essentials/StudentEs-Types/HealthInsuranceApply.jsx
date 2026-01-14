import React from "react";
import "../StudentEss.css";

export default function HealthInsuranceApply() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Health insurance / Apply
        </p>
        <h1 className="hero-heading">Apply for student health insurance</h1>
        <p className="hero-subtext">
          Start your application for health insurance that meets visa requirements in your chosen
          study destination.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">Your next steps</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Share your destination</h3>
            <p>
              Tell us where you plan to study so we can match you with OSHC/OVHC or equivalent cover
              that satisfies local rules.
            </p>
          </div>
          <div className="feature-card">
            <h3>Review suitable policies</h3>
            <p>
              Compare a shortlist of plans for coverage levels, waiting periods and support services
              for international students.
            </p>
          </div>
          <div className="feature-card">
            <h3>Complete your purchase</h3>
            <p>
              Finalise payment and receive your policy documents, which you can use for visa and
              enrolment purposes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


