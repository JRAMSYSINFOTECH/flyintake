import React from "react";
import "../StudentEss.css";

export default function HealthInsuranceDetails() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Health insurance / Details
        </p>
        <h1 className="hero-heading">Health insurance made simple</h1>
        <p className="hero-subtext">
          See what is covered, how to choose the right policy and how Student Essentials connects you
          with compliant health insurance for your visa.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">When you click Apply or Compare</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Country‑specific guidance</h3>
            <p>
              Each destination has different health cover rules – we help you meet OSHC/OVHC or local
              requirements for your visa.
            </p>
          </div>
          <div className="feature-card">
            <h3>Plan comparison</h3>
            <p>
              Compare excess, outpatient cover, emergency services and extras so you can balance cost
              with protection.
            </p>
          </div>
          <div className="feature-card">
            <h3>Policy activation support</h3>
            <p>
              Get help understanding your policy documents, start date and how to use your cover once
              you arrive.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


