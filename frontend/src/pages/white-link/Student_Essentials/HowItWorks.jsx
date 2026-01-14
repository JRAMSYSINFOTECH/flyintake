import React from "react";
import "./StudentEss.css";

const steps = [
  {
    title: "1. Talk to an expert counsellor",
    body: "Share your study goals, budget and preferred countries. Our counsellors will help you shortlist courses, universities and intakes that fit you best.",
  },
  {
    title: "2. Finalise course, university and destination",
    body: "We compare options across countries, entry requirements, scholarships and timelines so you can choose the right combination with confidence.",
  },
  {
    title: "3. Build a smart application plan",
    body: "We help you prepare documents, meet deadlines and submit strong applications to maximise your chances of receiving offers and scholarships.",
  },
  {
    title: "4. Get visa, finance and travel sorted",
    body: "Through Student Essentials, you can arrange education loans, money transfer, student banking, health insurance, accommodation and SIM cards in one place.",
  },
  {
    title: "5. Arrive, settle in and thrive",
    body: "Access pre-departure briefings, arrival support and ongoing guidance so you feel supported throughout your study abroad journey.",
  },
];

export default function HowItWorks() {
  return (
    <div className="essentials-container" style={{ padding: "32px 20px 48px" }}>
      <div className="essentials-hero" style={{ marginBottom: 32 }}>
        <p className="breadcrumb-text">Study Abroad / Student Essentials / How it works</p>
        <h1 className="hero-heading">How Student Essentials works</h1>
        <p className="hero-subtext">
          A simple, step‑by‑step journey from your first counselling session to landing on campus,
          with all the key services arranged in one place.
        </p>
      </div>

      <section id="how-it-works" className="features-section">
        <h1 className="features-title">Your journey in 5 simple steps</h1>
        <div className="features-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{idx + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="form-section" style={{ marginTop: 40 }}>
        <div className="form-inner">
          <h2>Need help with the next step?</h2>
          <p>
            Book a free counselling session and we’ll guide you through applications, visas and all
            essential services for your chosen destination.
          </p>
          <button
            className="free-btn"
            onClick={() => {
              window.location.hash = "/signup";
            }}
          >
            Talk to a counsellor
          </button>
        </div>
      </section>
    </div>
  );
}


