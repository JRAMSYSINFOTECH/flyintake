import React from "react";
import "../StudentEss.css";

export default function ISICDetails() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / ISIC / Details
        </p>
        <h1 className="hero-heading">How to apply for your ISIC</h1>
        <p className="hero-subtext">
          Step‑by‑step information on eligibility, documents and timelines to get your
          International Student Identity Card.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">ISIC application overview</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Check eligibility</h3>
            <p>
              You must be enrolled as a full‑time student at a recognised institution to qualify for
              ISIC benefits and discounts.
            </p>
          </div>
          <div className="feature-card">
            <h3>Gather required documents</h3>
            <p>
              Prepare your admission letter, identity proof and a recent photograph as specified by
              the issuing partner.
            </p>
          </div>
          <div className="feature-card">
            <h3>Receive your card</h3>
            <p>
              Once your application is approved, you receive a physical or digital card that you can
              start using for global student offers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


