import React from "react";
import "../StudentEss.css";

export default function StudentBankingApply() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Student banking / Apply
        </p>
        <h1 className="hero-heading">Start your student bank account application</h1>
        <p className="hero-subtext">
          Begin the process of opening a local bank account before you arrive, so you can access your
          money from day one.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">What you’ll do on this page</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Provide basic details</h3>
            <p>
              Share your destination, intake and course so we can connect you with relevant partner
              banks.
            </p>
          </div>
          <div className="feature-card">
            <h3>Upload or prepare documents</h3>
            <p>
              Get guidance on the ID, admission and visa proof you need to complete the account
              opening process.
            </p>
          </div>
          <div className="feature-card">
            <h3>Receive account confirmation</h3>
            <p>
              Once approved, you’ll receive details to activate your card and online banking after
              you land.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


