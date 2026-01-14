import React from "react";
import "../StudentEss.css";

export default function StudentBankingDetails() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Student banking / Details
        </p>
        <h1 className="hero-heading">Open your student bank account smoothly</h1>
        <p className="hero-subtext">
          Understand the steps to open an account before you travel, what documents are required and
          how Student Essentials can fast‑track the process.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">What this service includes</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Account selection</h3>
            <p>
              Compare student‑friendly accounts, fees and digital banking features offered by our
              partner banks.
            </p>
          </div>
          <div className="feature-card">
            <h3>Document checklist</h3>
            <p>
              Get a clear list of identity, admission and visa documents so your application is not
              delayed.
            </p>
          </div>
          <div className="feature-card">
            <h3>Activation support</h3>
            <p>
              Learn how to activate your card, set up online banking and receive funds from home
              safely.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


