import React, { useState, useEffect } from 'react';
import './Trainings.css';

const Trainings = () => {
  const [email, setEmail] = useState('');

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you shortly.');
    setEmail('');
  };

  // Scroll animation effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="training-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <h1>
              Transform Your Career with <span className="hero-accent">World-Class</span> IT & Management Training
            </h1>
            <p>
              Empower yourself with cutting-edge technology skills and strategic management expertise. Join thousands of professionals who have elevated their careers with FlyInTake Global Consulting.
            </p>
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section id="programs" className="training-programs-section">
        <div className="container">
          <div className="training-programs-wrapper">
            <div className="training-programs-content">
              <span className="training-section-label">OUR PROGRAMS</span>
              <h2 className="training-main-heading">Comprehensive Training Solutions</h2>
              <p className="training-description-text">
                Choose from our expertly designed training programs tailored for professionals at every stage of their career journey.
              </p>
            </div>

            <div className="training-cards-container">
              <div className="training-program-card scroll-animate">
                <div className="training-card-icon">
                  <span>💻</span>
                </div>
                <h3 className="training-card-heading">IT Technical Training</h3>
                <p className="training-card-text">
                  Master the latest technologies and tools to stay ahead in the rapidly evolving tech landscape.
                </p>
                <ul className="training-course-items">
                  <li>Cloud Computing (AWS, Azure, GCP)</li>
                  <li>DevOps & CI/CD</li>
                  <li>Full Stack Development</li>
                  <li>Data Science & Analytics</li>
                  <li>Cybersecurity Essentials</li>
                  <li>AI & Machine Learning</li>
                </ul>
                {/* <a href="#contact" className="training-card-action" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Learn More →
                </a> */}
              </div>

              <div className="training-program-card scroll-animate">
                <div className="training-card-icon">
                  <span>📊</span>
                </div>
                <h3 className="training-card-heading">Management & Leadership</h3>
                <p className="training-card-text">
                  Develop strategic thinking and leadership skills to drive organizational success.
                </p>
                <ul className="training-course-items">
                  <li>Project Management (PMP, Agile)</li>
                  <li>Strategic Leadership</li>
                  <li>Change Management</li>
                  <li>Business Analysis</li>
                  <li>Team Building & Communication</li>
                  <li>Executive Coaching</li>
                </ul>
                {/* <a href="#contact" className="training-card-action" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Learn More →
                </a> */}
              </div>

              <div className="training-program-card scroll-animate">
                <div className="training-card-icon">
                  <span>🎯</span>
                </div>
                <h3 className="training-card-heading">Professional Certifications</h3>
                <p className="training-card-text">
                  Get industry-recognized certifications to boost your career prospects and credibility.
                </p>
                <ul className="training-course-items">
                  <li>ITIL Foundation & Expert</li>
                  <li>Six Sigma (Green & Black Belt)</li>
                  <li>PRINCE2 Foundation & Practitioner</li>
                  <li>Scrum Master (CSM, PSM)</li>
                  <li>SAFe Agilist</li>
                  <li>Microsoft & AWS Certifications</li>
                </ul>
                {/* <a href="#contact" className="training-card-action" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                  Learn More →
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="training-features-section">
        <div className="container">
          <div className="training-features-wrapper">
            <div className="training-features-content">
              <span className="training-section-label">WHY CHOOSE US</span>
              <h2 className="training-main-heading">Unmatched Learning Experience</h2>
              <p className="training-description-text">
                We combine industry expertise, cutting-edge curriculum, and personalized support to ensure your success.
              </p>
            </div>

            <div className="training-features-grid">
              <div className="training-feature-box scroll-animate">
                <div className="training-feature-circle">
                  <span>👨‍🏫</span>
                </div>
                <h4 className="training-feature-name">Expert Instructors</h4>
                <p className="training-feature-info">
                  Learn from industry veterans with 15+ years of real-world experience
                </p>
              </div>
              <div className="training-feature-box scroll-animate">
                <div className="training-feature-circle">
                  <span>🎓</span>
                </div>
                <h4 className="training-feature-name">Flexible Learning</h4>
                <p className="training-feature-info">
                  Online, classroom, and hybrid options to fit your schedule
                </p>
              </div>
              <div className="training-feature-box scroll-animate">
                <div className="training-feature-circle">
                  <span>🏆</span>
                </div>
                <h4 className="training-feature-name">Hands-On Projects</h4>
                <p className="training-feature-info">
                  Apply knowledge through real-world case studies and simulations
                </p>
              </div>
              <div className="training-feature-box scroll-animate">
                <div className="training-feature-circle">
                  <span>💼</span>
                </div>
                <h4 className="training-feature-name">Career Support</h4>
                <p className="training-feature-info">
                  Resume building, interview prep, and job placement assistance
                </p>
              </div>
              <div className="training-feature-box scroll-animate">
                <div className="training-feature-circle">
                  <span>🌐</span>
                </div>
                <h4 className="training-feature-name">Global Recognition</h4>
                <p className="training-feature-info">
                  Certifications accepted by leading companies worldwide
                </p>
              </div>
              <div className="training-feature-box scroll-animate">
                <div className="training-feature-circle">
                  <span>🤝</span>
                </div>
                <h4 className="training-feature-name">Lifetime Access</h4>
                <p className="training-feature-info">
                  Continuous learning with updated content and community support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Pathways */}
      <section className="training-certification-section">
        <div className="container">
          <div className="training-certification-wrapper">
            <div className="training-certification-content">
              <span className="training-section-label">CERTIFICATION PATHWAYS</span>
              <h2 className="training-main-heading">Your Path to Professional Excellence</h2>
              <p className="training-description-text">
                Structured learning paths designed to take you from beginner to expert level.
              </p>
            </div>

            <div className="training-certification-cards">
              <div className="training-cert-card scroll-animate">
                <div className="training-cert-badge">
                  <span>🌱</span>
                </div>
                <h4 className="training-cert-name">Foundation Level</h4>
                <p className="training-cert-info">
                  Perfect for beginners or those switching careers. Build fundamental skills and knowledge.
                </p>
                <p className="training-cert-duration">Duration: 3-6 months</p>
              </div>
              <div className="training-cert-card scroll-animate">
                <div className="training-cert-badge">
                  <span>⚡</span>
                </div>
                <h4 className="training-cert-name">Professional Level</h4>
                <p className="training-cert-info">
                  Advanced training for experienced professionals looking to specialize and lead.
                </p>
                <p className="training-cert-duration">Duration: 6-12 months</p>
              </div>
              <div className="training-cert-card scroll-animate">
                <div className="training-cert-badge">
                  <span>👑</span>
                </div>
                <h4 className="training-cert-name">Expert Level</h4>
                <p className="training-cert-info">
                  Master-level certifications for senior professionals and consultants.
                </p>
                <p className="training-cert-duration">Duration: 12-18 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section id="contact" className="training-cta-section-orange">
        <div className="container">
          <h2>Ready to Elevate Your Career?</h2>
          <p>Get a free consultation with our training advisors and discover the perfect program for your goals.</p>
          <form className="training-cta-form-box" onSubmit={handleSubmit}>
            <input 
              type="email" 
              className="training-cta-email-input" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="training-cta-submit-btn">Get Started</button>
          </form>
          <p className="training-cta-contact-details">
            Or call us at: +1 (800) 123-4567 | Email: training@flyintake.com
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default Trainings;