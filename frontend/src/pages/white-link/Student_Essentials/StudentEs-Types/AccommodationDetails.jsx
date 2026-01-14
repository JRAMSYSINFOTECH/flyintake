import React from "react";
import "../StudentEss.css";

export default function AccommodationDetails() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Accommodation / Details
        </p>
        <h1 className="hero-heading">Student accommodation options</h1>
        <p className="hero-subtext">
          Understand how we help you compare on‑campus housing, homestays and private rentals in
          your study destination.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">What you get when you enquire about accommodation</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>City and campus insights</h3>
            <p>
              Get guidance on average rents, commute times, safety and student‑friendly
              neighbourhoods near your university.
            </p>
          </div>
          <div className="feature-card">
            <h3>Curated property lists</h3>
            <p>
              We share trusted accommodation providers and verified listings that match your budget
              and lifestyle preferences.
            </p>
          </div>
          <div className="feature-card">
            <h3>Support with booking</h3>
            <p>
              Learn what documents are required, how to secure a room from overseas and what to
              check before you sign a contract.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


