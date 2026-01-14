import React from "react";
import "../StudentEss.css";

export default function ForexCardsDetails() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Forex cards / Details
        </p>
        <h1 className="hero-heading">Understanding student forex cards</h1>
        <p className="hero-subtext">
          See how prepaid forex cards help you manage expenses abroad with locked‑in exchange rates
          and safer transactions.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">Why students choose forex cards</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Multiple currencies</h3>
            <p>
              Load several currencies on a single card if you are travelling through or studying in
              more than one country.
            </p>
          </div>
          <div className="feature-card">
            <h3>Better control on spends</h3>
            <p>
              Track your usage through apps and alerts so you always know how much is left for the
              month.
            </p>
          </div>
          <div className="feature-card">
            <h3>Safer than carrying cash</h3>
            <p>
              Block and replace your card if it is lost, instead of losing all your travel money in
              one go.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


