import React from "react";
import "./PageContent.css";
import PageHero from "./PageHero";

const OngoingSupport = () => {
  return (
    <>
      <PageHero
        title="Ongoing Student Support"
        subtitle="We support you even after you land in your destination"
      />

      {/* Main Content */}
      <section className="page-content">
        <h2>Beyond Admission</h2>
        <p>
          At <strong>INTAKE</strong>, our responsibility doesn’t end with your
          admission. We continue to support you before departure and after you
          arrive, ensuring a smooth academic and personal transition.
        </p>

        <div className="info-box-grid">
          <div className="info-box">✈️ Pre-Departure Briefing</div>
          <div className="info-box">🏠 Accommodation Assistance</div>
          <div className="info-box">🧭 Settlement & Cultural Support</div>
          <div className="info-box">📞 Continuous Student Assistance</div>
        </div>

        {/* New Section */}
        <h2 style={{ marginTop: "60px" }}>Pre-Departure Support</h2>
        <p>
          Before you leave your home country, our team prepares you for life
          abroad through detailed pre-departure sessions.
        </p>

        <ul className="support-list">
          <li>✔ Country & culture orientation</li>
          <li>✔ University onboarding guidance</li>
          <li>✔ Travel & packing checklist</li>
          <li>✔ Health insurance & safety briefing</li>
        </ul>

        {/* New Section */}
        <h2 style={{ marginTop: "50px" }}>Post-Arrival Assistance</h2>
        <p>
          Once you reach your destination, INTAKE remains your trusted support
          partner to help you settle comfortably.
        </p>

        <ul className="support-list">
          <li>✔ Airport arrival guidance</li>
          <li>✔ Local accommodation support</li>
          <li>✔ Bank account & SIM setup</li>
          <li>✔ Local laws & student rights guidance</li>
        </ul>

        {/* CTA Section */}
        <div className="page-cta">
          <h3>Need Support at Any Stage?</h3>
          <p>
            Our student success team is always available to help you during your
            study abroad journey.
          </p>
          <button className="cta-btn">Contact Student Support</button>
        </div>
      </section>
    </>
  );
};

export default OngoingSupport;
