import React from 'react';
import './Testimonials.css';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  return (
    <section className="flyintake-about-section">
      {/* Dynamic Background Elements */}
      <div className="flyintake-bg-elements">
        <div className="flyintake-bg-circle flyintake-bg-circle-1"></div>
        <div className="flyintake-bg-circle flyintake-bg-circle-2"></div>
        <div className="flyintake-bg-pattern"></div>
      </div>
      
      <div className="flyintake-about-container">
        {/* Section Header */}
        <div className="flyintake-section-header">
          <div className="flyintake-header-badge">
            <span className="flyintake-badge-dot"></span>
            <span>About Flyintake</span>
          </div>
          <h2 className="flyintake-section-title">
            Your Trusted Partner in<br />
            <span className="flyintake-title-gradient">Global Education Excellence</span>
          </h2>
        </div>

        {/* Main Content Area */}
        <div className="flyintake-about-content">
          {/* Company Info */}
          <div className="flyintake-info-section">
            <h3 className="flyintake-company-name">FLYINTAKE Global Consulting Private Limited</h3>

            <div className="flyintake-about-text">
              <p className="flyintake-text-main">
                FLYINTAKE Global Consulting Private Limited is a trusted abroad education 
                consulting firm offering comprehensive guidance and educational support 
                services to students aspiring to study overseas. With a global outlook 
                and technology-enabled processes, Flyintake simplifies international 
                education journeys.
              </p>
              
              <div className="flyintake-cta-buttons-inline">
                <Link to="/about-us" className="flyintake-btn flyintake-btn-primary">
                  <span>Explore More</span>
                  
                </Link>
                <Link to="/contact-us" className="flyintake-btn flyintake-btn-secondary">
                  
                  <span>Free Counselling</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="flyintake-highlights-section">
            <h3 className="flyintake-highlights-title">Why Choose Flyintake?</h3>
            <div className="flyintake-highlights-grid">
              <div className="flyintake-highlight-item">
                <div className="flyintake-highlight-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 10V16L20 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flyintake-highlight-content">
                  <h4>Transparent Process</h4>
                  <p>Complete visibility and honest guidance at every step</p>
                </div>
              </div>

              <div className="flyintake-highlight-item">
                <div className="flyintake-highlight-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2L19 13L30 15L22 22L24 33L16 27L8 33L10 22L2 15L13 13L16 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flyintake-highlight-content">
                  <h4>Expert Counselors</h4>
                  <p>Certified professionals with proven global expertise</p>
                </div>
              </div>

              <div className="flyintake-highlight-item">
                <div className="flyintake-highlight-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 16L12 24L28 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flyintake-highlight-content">
                  <h4>End-to-End Support</h4>
                  <p>Comprehensive assistance from application to arrival</p>
                </div>
              </div>

              <div className="flyintake-highlight-item">
                <div className="flyintake-highlight-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2.5"/>
                    <path d="M16 4C16 4 24 10 24 16C24 22 16 28 16 28M16 4C16 4 8 10 8 16C8 22 16 28 16 28M4 16H28" stroke="currentColor" strokeWidth="2.5"/>
                  </svg>
                </div>
                <div className="flyintake-highlight-content">
                  <h4>Global Network</h4>
                  <p>Partnerships with 100+ top universities worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;