import React from "react";
import "../StudentEss.css";

function EducationLoanApply() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 24 }}>
        <p className="breadcrumb-text">
          Study Abroad / Student Essentials / Education loan / Enquire
        </p>
        <h1 className="hero-heading">Enquire about an education loan</h1>
        <p className="hero-subtext">
          Share a few details and our team will connect you with education loan partners that match
          your profile and budget.
        </p>
      </div>

      <section className="features-section">
        <h1 className="features-title">What happens after you submit an enquiry</h1>
        <div className="features-grid">
          <div className="feature-card">
            <h3>1. Quick eligibility check</h3>
            <p>
              We look at your course, destination, co‑applicant profile and collateral (if any) to
              identify suitable lenders.
            </p>
          </div>
          <div className="feature-card">
            <h3>2. Personalised loan options</h3>
            <p>
              You receive information on interest rates, maximum loan amounts and processing times
              from selected partners.
            </p>
          </div>
          <div className="feature-card">
            <h3>3. End‑to‑end guidance</h3>
            <p>
              Our counsellors support you through documentation, sanction and disbursement aligned
              with your offer and visa timelines.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EducationLoanApply;
