import React from 'react';
import './Testimonials.css';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <section className="about-section">

      {/* Background */}
      <div className="about-bg" aria-hidden="true">
        <div className="about-bg-orb orb-1" />
        <div className="about-bg-orb orb-2" />
        <div className="about-bg-lines" />
      </div>

      <div className="about-container">

        {/* ── HEADER ── */}
        <div className="about-header">
          <div className="about-badge">
            <span className="about-badge-dot" />
            <span>About Flyintake</span>
          </div>
          <h2 className="about-title">
            Your Trusted Partner in<br />
            <span className="about-title-accent">Global Education Excellence</span>
          </h2>
        </div>

        {/* ── COMPANY CARD ── */}
        <div className="about-card">
          {/* Top accent bar */}
          <div className="about-card-bar" />

          <div className="about-card-inner">
            {/* Left — icon + name */}
            <div className="about-card-left">
              <div className="about-logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" opacity="0.4"/>
                  <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2" opacity="0.7"/>
                  <path d="M2 20h36M20 2Q28 8 28 20Q28 32 20 38M20 2Q12 8 12 20Q12 32 20 38" stroke="white" strokeWidth="1.5" opacity="0.6"/>
                </svg>
              </div>
              <h3 className="about-company-name">FLYINTAKE<br />Global Consulting</h3>
              <p className="about-company-sub">Private Limited</p>
            </div>

            {/* Right — text + buttons */}
            <div className="about-card-right">
              <p className="about-card-text">
                FLYINTAKE Global Consulting Private Limited is a trusted abroad education
                consulting firm offering comprehensive guidance and educational support
                services to students aspiring to study overseas. With a global outlook
                and technology-enabled processes, Flyintake simplifies international
                education journeys.
              </p>
              <div className="about-btns">
                <Link to="/about-us" className="about-btn-primary">
                  Explore More
                </Link>
                <Link to="/contact" className="about-btn-secondary">
                  Free Counselling
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── WHY CHOOSE US ── */}
        <div className="about-why">
          <div className="about-why-header">
            <h3 className="about-why-title">Why Choose Flyintake?</h3>
            <div className="about-why-line" />
          </div>

          <div className="about-highlights">

            <div className="about-highlight">
              <div className="hl-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M16 10V16L20 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="hl-content">
                <h4>Transparent Process</h4>
                <p>Complete visibility and honest guidance at every step</p>
              </div>
            </div>

            <div className="about-highlight">
              <div className="hl-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M16 3L19.5 12.5L30 14.5L22.5 21.5L24.5 32L16 27.5L7.5 32L9.5 21.5L2 14.5L12.5 12.5L16 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="hl-content">
                <h4>Expert Counselors</h4>
                <p>Certified professionals with proven global expertise</p>
              </div>
            </div>

            <div className="about-highlight">
              <div className="hl-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M4 16L12 24L28 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="hl-content">
                <h4>End-to-End Support</h4>
                <p>Comprehensive assistance from application to arrival</p>
              </div>
            </div>

            <div className="about-highlight">
              <div className="hl-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M16 4C16 4 24 10 24 16C24 22 16 28 16 28M16 4C16 4 8 10 8 16C8 22 16 28 16 28M4 16H28" stroke="currentColor" strokeWidth="2.5"/>
                </svg>
              </div>
              <div className="hl-content">
                <h4>Global Network</h4>
                <p>Partnerships with 100+ top universities worldwide</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;