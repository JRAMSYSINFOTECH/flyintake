import React from "react";
import "../StudentEss.css";

export default function MoneyTransferApply() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Money transfer / Apply
        </p>
        <h1 className="hero-heading">Apply to use our money transfer partners</h1>
        <p className="hero-subtext">
          Tell us your payment needs so we can connect you with a secure, student‑friendly fee
          payment and money transfer solution.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">How this application helps</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Explain your payment scenario</h3>
            <p>
              Share whether you’re paying tuition, deposits or living expenses so we can suggest the
              right product.
            </p>
          </div>
          <div className="feature-card">
            <h3>Receive a clear process</h3>
            <p>
              Get step‑by‑step instructions on how to initiate transfers, upload documents and track
              status.
            </p>
          </div>
          <div className="feature-card">
            <h3>Avoid common issues</h3>
            <p>
              Learn how to minimise delays, incorrect references or extra bank charges when sending
              money overseas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


