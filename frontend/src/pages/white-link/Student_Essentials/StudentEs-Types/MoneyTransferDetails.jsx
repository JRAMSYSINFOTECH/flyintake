import React from "react";
import "../StudentEss.css";

export default function MoneyTransferDetails() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Money transfer / Details
        </p>
        <h1 className="hero-heading">International fee payment & money transfer</h1>
        <p className="hero-subtext">
          Learn how we help you send tuition fees and living expenses overseas securely, at
          competitive exchange rates.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">What you can do from this service</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Pay universities directly</h3>
            <p>
              Make fee payments to approved institutions with clear tracking, receipts and status
              updates.
            </p>
          </div>
          <div className="feature-card">
            <h3>Support family transfers</h3>
            <p>
              Set up recurring transfers from home for rent, groceries and other monthly expenses in
              your destination country.
            </p>
          </div>
          <div className="feature-card">
            <h3>Get guidance on limits & rules</h3>
            <p>
              Understand remittance limits, documentation and timelines so your payment reaches on
              time without delays.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


