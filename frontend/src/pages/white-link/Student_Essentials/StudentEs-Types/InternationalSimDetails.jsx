import React from "react";
import "../StudentEss.css";

export default function InternationalSimDetails() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / International SIM cards / Details
        </p>
        <h1 className="hero-heading">Choosing the right international SIM</h1>
        <p className="hero-subtext">
          Understand data, calls and roaming options so you stay connected to home and campus from
          day one.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">How we help you decide</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Plan comparison</h3>
            <p>
              Compare data limits, local and international call rates, and validity across student
              SIM providers.
            </p>
          </div>
          <div className="feature-card">
            <h3>Activation options</h3>
            <p>
              Decide whether to use a physical SIM or eSIM and see what you can activate before you
              travel.
            </p>
          </div>
          <div className="feature-card">
            <h3>Practical tips</h3>
            <p>
              Learn how to top‑up, manage apps and avoid unexpected roaming charges while abroad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


