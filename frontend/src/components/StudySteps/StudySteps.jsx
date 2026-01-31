import React from "react";
import { Link } from "react-router-dom";
import "./StudySteps.css";

const STEPS = [
  {
    title: "Why study abroad?",
    path: "/study-abroad/why-study-abroad",
    icon: "🎓",
    description: "Discover the benefits"
  },
  {
    title: "Where and what to study?",
    path: "/study-abroad/where-to-study",
    icon: "🌍",
    description: "Choose your destination"
  },
  {
    title: "How do I apply?",
    path: "/study-abroad/how-to-apply",
    icon: "📝",
    description: "Application process"
  },
  {
    title: "After receiving an offer",
    path: "/study-abroad/after-offer",
    icon: "✅",
    description: "Next steps"
  },
  {
    title: "Prepare to depart",
    path: "/study-abroad/prepare-to-depart",
    icon: "✈️",
    description: "Get ready to go"
  },
  {
    title: "Arrive and thrive",
    path: "/study-abroad/arrive-and-thrive",
    icon: "🌟",
    description: "Settle in successfully"
  },
];

export default function StudySteps() {
  return (
    <section className="study-steps-sec">
      <div className="study-steps-wrap">
        <div className="section-header">
          <span className="section-badge">STEP BY STEP</span>
          <h2 className="steps-title">
            Your Study Abroad <span className="highlight">Journey</span>
          </h2>
          <p className="steps-subtitle">
            Navigate your path to international education with our comprehensive guide
          </p>
        </div>

        <div className="steps-grid">
          {STEPS.map((step, idx) => (
            <Link
              key={step.title}
              to={step.path}
              className="step-card"
            >
              <div className="step-number">{String(idx + 1).padStart(2, '0')}</div>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="cta-banner">
          <div className="cta-content">
            <h3>Need Personalized Guidance?</h3>
            <p>Our expert consultants are here to help you every step of the way</p>
          </div>
          <Link to="/contact" className="cta-button">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}