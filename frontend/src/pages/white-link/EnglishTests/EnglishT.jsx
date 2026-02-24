import React from "react";
import "./EnglishT.css";
import { Link } from "react-router-dom";

export default function EnglishT() {
  const tests = [
    {
      title: "TOEFL",
      fullName: "Test of English as a Foreign Language",
      icon: "T",
      route: "/pages/Toefl",
      color: "toefl",
      features: [
        "Internationally recognized English proficiency test",
        "Required for studying, working, or migrating abroad",
        "Focuses on academic and real-life English usage",
        "Evaluates Reading, Listening, Speaking, and Writing",
        "Accepted by 11,000+ universities worldwide",
        "Available in iBT & paper formats; 2-year validity"
      ]
    },
    {
      title: "DUOLINGO",
      fullName: "Duolingo English Test",
      icon: "D",
      route: "/pages/Duolingo",
      color: "duolingo",
      features: [
        "Modern, convenient, and affordable online exam",
        "Taken anytime with computer, webcam, and internet",
        "Adaptive test evaluating all four language skills",
        "Completed in less than 1 hour; results in 48 hours",
        "Accepted by 5,000+ institutions worldwide"
      ]
    },
    {
      title: "IELTS",
      fullName: "International English Language Testing System",
      icon: "I",
      route: "/pages/IELTSPage",
      color: "ielts",
      features: [
        "One of the most popular English tests globally",
        "Evaluates Listening, Reading, Writing, and Speaking",
        "Managed by British Council, INTAKE, and Cambridge English",
        "Two types: Academic and General Training",
        "Scored on a band scale of 1 to 9",
        "Accepted by 11,000+ organizations worldwide"
      ]
    }
  ];

  return (
    <div className="english-tests-container">
      {/* Hero Section */}
      <div className="english-hero">
        <div className="hero-content">
          <Link to="/" className="breadcrumb">INTAKE / ENGLISH TESTS</Link>
          <h1 className="hero-title">English Proficiency Tests</h1>
          <p className="hero-subtitle">Choose Your Path to Global Opportunities</p>
        </div>
        <div className="hero-background"></div>
      </div>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="intro-content">
          <h2>Why Take an English Proficiency Test?</h2>
          <p>
            Dreaming of studying or working abroad? Before you pack your bags, you must prove your English communication skills. 
            International language tests help universities and employers understand your ability to succeed in English-speaking 
            countries. Explore the three major tests and find the one that suits your goals.
          </p>
        </div>
      </section>

      {/* Tests Cards Section */}
      <section className="tests-grid">
        {tests.map((test, index) => (
          <div key={index} className={`test-card ${test.color}`}>
            {/* Card Icon */}
            <div className="card-icon">{test.icon}</div>
            
            {/* Card Header */}
            <div className="card-header">
              <h3 className="test-title">{test.title}</h3>
              <p className="test-fullname">{test.fullName}</p>
            </div>

            {/* Card Features */}
            <ul className="features-list">
              {test.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Card Button */}
            <Link to={test.route} className="card-btn">
              Learn More
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        ))}
      </section>

      {/* Comparison Section */}
      <section className="comparison-section">
        <h2>Quick Comparison</h2>
        <div className="comparison-table">
          <div className="table-row header-row">
            <div className="table-cell">Feature</div>
            <div className="table-cell">TOEFL</div>
            <div className="table-cell">IELTS</div>
            <div className="table-cell">DUOLINGO</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Format</div>
            <div className="table-cell">Online/Paper</div>
            <div className="table-cell">In-Person</div>
            <div className="table-cell">Online</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Duration</div>
            <div className="table-cell">3 hours</div>
            <div className="table-cell">2.75 hours</div>
            <div className="table-cell">1 hour</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Results Time</div>
            <div className="table-cell">10 days</div>
            <div className="table-cell">5-7 days</div>
            <div className="table-cell">48 hours</div>
          </div>
          <div className="table-row">
            <div className="table-cell">Accepted By</div>
            <div className="table-cell">11,000+</div>
            <div className="table-cell">11,000+</div>
            <div className="table-cell">5,000+</div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
