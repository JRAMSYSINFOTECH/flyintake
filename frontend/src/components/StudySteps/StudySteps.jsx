import React from "react";
import { Link } from "react-router-dom";
import "./StudySteps.css";

const STEPS = [
  {
    title: "Why Study Abroad?",
    path: "/study-abroad/why-study-abroad",
    description: "Discover the life-changing benefits of international education",
    // VERIFIED: Harvard graduation ceremony — Christian Lendl
    img: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=800&q=90&fit=crop",
    accent: "#0066B3"
  },
  {
    title: "Where & What to Study?",
    path: "/study-abroad/where-to-study",
    description: "Find the right destination and course that matches your ambition",
    // VERIFIED: Desk globe on table — Kyle Glenn (nXt5HtLmlgE)
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=90&fit=crop",
    accent: "#E65100"
  },
  {
    title: "How Do I Apply?",
    path: "/study-abroad/how-to-apply",
    description: "Step-by-step guidance through the entire application process",
    // VERIFIED: Person writing on paper with pen — Kelly Sikkema (fBACQhvPbEk)
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=90&fit=crop",
    accent: "#0066B3"
  },
  {
    title: "After Receiving an Offer",
    path: "/study-abroad/after-offer",
    description: "Understand your next steps once your place is confirmed",
    // VERIFIED: Two men shaking hands — Sebastian Herrmann (NbtIDoFKGO8)
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=90&fit=crop",
    accent: "#E65100"
  },
  {
    title: "Prepare to Depart",
    path: "/study-abroad/prepare-to-depart",
    description: "Visas, finances, accommodation — everything before you fly",
    // VERIFIED: Man at airport with luggage looking at plane — JESHOOTS.COM (mSESwdMZr-A)
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=90&fit=crop",
    accent: "#0066B3"
  },
  {
    title: "Arrive & Thrive",
    path: "/study-abroad/arrive-and-thrive",
    description: "Settle in, build your network and make the most of every day",
    // VERIFIED: Students smiling in lecture hall — Vitaly Gariev (NGLWZV4xOPg)
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=90&fit=crop",
    accent: "#E65100"
  },
];

export default function StudySteps() {
  return (
    <section className="ss-section">
      <div className="ss-wrap">

        {/* Header */}
        <div className="ss-header">
          <span className="ss-badge">STEP BY STEP</span>
          <h2 className="ss-title">
            Your Study Abroad <span className="ss-highlight">Journey</span>
          </h2>
          <p className="ss-subtitle">
            Navigate your path to international education with our comprehensive guide
          </p>
        </div>

        {/* Grid */}
        <div className="ss-grid">
          {STEPS.map((step, idx) => (
            <Link
              key={step.title}
              to={step.path}
              className="ss-card"
              style={{ '--step-accent': step.accent }}
            >
              {/* Background image */}
              <div
                className="ss-card-bg"
                style={{ backgroundImage: `url(${step.img})` }}
              />

              {/* Gradient overlay */}
              <div className="ss-card-overlay" />

              {/* Step number */}
              <div className="ss-step-num">{String(idx + 1).padStart(2, '0')}</div>

              {/* Bottom content */}
              <div className="ss-card-content">
                <h3 className="ss-card-title">{step.title}</h3>
                <p className="ss-card-desc">{step.description}</p>
                <div className="ss-card-cta">
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Accent line on hover */}
              <div className="ss-card-line" />
            </Link>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="ss-cta-banner">
          <div className="ss-cta-left">
            <h3>Need Personalized Guidance?</h3>
            <p>Our expert consultants are here to help you every step of the way</p>
          </div>
          <Link to="/contact" className="ss-cta-btn">
            Get Free Consultation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}