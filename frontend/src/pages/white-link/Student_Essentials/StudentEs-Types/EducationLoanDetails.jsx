import React from "react";
import "../StudentEss.css";

export default function EducationLoanDetails() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Education loan / Details
        </p>
        <h1 className="hero-heading">Education loan partners – details</h1>
        <p className="hero-subtext">
          Learn how each loan partner supports tuition fees, living costs and flexible repayment
          while you study overseas.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">What happens after you click a loan button?</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Share your study plan</h3>
            <p>
              Tell us your target country, intake, course and approximate budget so we can match you
              with suitable education loan products.
            </p>
          </div>
          <div className="feature-card">
            <h3>Compare partner offers</h3>
            <p>
              We help you compare interest rates, moratorium periods, covered expenses and processing
              times across multiple banks and NBFCs.
            </p>
          </div>
          <div className="feature-card">
            <h3>Apply with guidance</h3>
            <p>
              Get a clear checklist for documents, co‑applicant requirements and timelines so your
              loan is ready before your visa appointment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


