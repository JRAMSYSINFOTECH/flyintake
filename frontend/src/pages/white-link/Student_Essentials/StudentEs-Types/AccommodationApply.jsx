import React from "react";
import "../StudentEss.css";

function AccommodationApply() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Accommodation / Apply
        </p>
        <h1 className="hero-heading">Apply for student accommodation support</h1>
        <p className="hero-subtext">
          Tell us your destination, budget and preferences so we can connect you with safe,
          student‑friendly housing options.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">How we help after you apply</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Shortlist suitable areas</h3>
            <p>
              Get guidance on neighbourhoods close to your campus, public transport and everyday
              amenities.
            </p>
          </div>
          <div className="feature-card">
            <h3>Review trusted providers</h3>
            <p>
              We point you towards verified on‑campus, homestay and private accommodation partners
              used by other students.
            </p>
          </div>
          <div className="feature-card">
            <h3>Understand contracts & costs</h3>
            <p>
              Learn what to check in rental agreements, bond payments and inclusions before you sign
              anything.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AccommodationApply;


