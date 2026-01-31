import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StudyEurope.css";

export default function StudyEurope() {
  const [selectedCountry, setSelectedCountry] = useState("overview");

  const europeanCountries = [
    {
      id: "netherlands",
      name: "Netherlands",
      flag: "🇳🇱",
      capital: "Amsterdam",
      language: "Dutch/English",
      tuition: "€6,000-€15,000/year",
      highlights: [
        "2,000+ English-taught programs",
        "Innovative learning environment",
        "1-year post-study search visa",
        "High quality of life"
      ],
      topUniversities: [
        "University of Amsterdam",
        "Delft University of Technology",
        "Leiden University",
        "Utrecht University"
      ],
      popularFields: [
        "Engineering & Technology",
        "Business & Economics",
        "Data Science",
        "International Relations"
      ]
    },
    {
      id: "france",
      name: "France",
      flag: "🇫🇷",
      capital: "Paris",
      language: "French/English",
      tuition: "€170-€3,770/year (Public)",
      highlights: [
        "World-leading universities",
        "Affordable public education",
        "Rich cultural heritage",
        "Strong research programs"
      ],
      topUniversities: [
        "Sorbonne University",
        "École Polytechnique",
        "Sciences Po",
        "HEC Paris"
      ],
      popularFields: [
        "Business & Management",
        "Engineering",
        "Arts & Design",
        "Political Science"
      ]
    },
    {
      id: "spain",
      name: "Spain",
      flag: "🇪🇸",
      capital: "Madrid",
      language: "Spanish/English",
      tuition: "€1,000-€3,500/year (Public)",
      highlights: [
        "Affordable lifestyle",
        "Warm climate",
        "12-month job-seeker permit",
        "30 hours/week work allowed"
      ],
      topUniversities: [
        "University of Barcelona",
        "Complutense University",
        "IE Business School",
        "University of Madrid"
      ],
      popularFields: [
        "Business Administration",
        "Tourism & Hospitality",
        "Architecture",
        "Language Studies"
      ]
    },
    {
      id: "sweden",
      name: "Sweden",
      flag: "🇸🇪",
      capital: "Stockholm",
      language: "Swedish/English",
      tuition: "€8,000-€18,000/year",
      highlights: [
        "Progressive education system",
        "Focus on innovation",
        "High quality of life",
        "Strong sustainability focus"
      ],
      topUniversities: [
        "Lund University",
        "Uppsala University",
        "KTH Royal Institute",
        "Stockholm University"
      ],
      popularFields: [
        "Engineering",
        "Sustainability",
        "Technology",
        "Design"
      ]
    },
    {
      id: "denmark",
      name: "Denmark",
      flag: "🇩🇰",
      capital: "Copenhagen",
      language: "Danish/English",
      tuition: "€6,000-€16,000/year",
      highlights: [
        "Happiest country in the world",
        "Excellent work-life balance",
        "Strong research focus",
        "Safe & welcoming"
      ],
      topUniversities: [
        "University of Copenhagen",
        "Technical University of Denmark",
        "Aarhus University",
        "Copenhagen Business School"
      ],
      popularFields: [
        "Renewable Energy",
        "Engineering",
        "Business Analytics",
        "Design"
      ]
    },
    {
      id: "italy",
      name: "Italy",
      flag: "🇮🇹",
      capital: "Rome",
      language: "Italian/English",
      tuition: "€900-€4,000/year (Public)",
      highlights: [
        "Rich historical heritage",
        "Affordable tuition",
        "Art & design excellence",
        "Mediterranean lifestyle"
      ],
      topUniversities: [
        "University of Bologna",
        "Politecnico di Milano",
        "Sapienza University",
        "University of Padua"
      ],
      popularFields: [
        "Fashion & Design",
        "Architecture",
        "Arts",
        "Engineering"
      ]
    },
    {
      id: "norway",
      name: "Norway",
      flag: "🇳🇴",
      capital: "Oslo",
      language: "Norwegian/English",
      tuition: "Free for EU/EEA (Public)",
      highlights: [
        "Tuition-free education",
        "Stunning natural beauty",
        "High quality of life",
        "Strong economy"
      ],
      topUniversities: [
        "University of Oslo",
        "Norwegian University of Technology",
        "University of Bergen",
        "UiT Arctic University"
      ],
      popularFields: [
        "Marine Biology",
        "Petroleum Engineering",
        "Renewable Energy",
        "Arctic Studies"
      ]
    },
    {
      id: "switzerland",
      name: "Switzerland",
      flag: "🇨🇭",
      capital: "Bern",
      language: "German/French/Italian/English",
      tuition: "CHF 500-2,000/year (Public)",
      highlights: [
        "World's top universities",
        "Excellence in research",
        "Multilingual environment",
        "High living standards"
      ],
      topUniversities: [
        "ETH Zurich",
        "EPFL",
        "University of Zurich",
        "University of Geneva"
      ],
      popularFields: [
        "Finance & Banking",
        "Hospitality Management",
        "Engineering",
        "Technology"
      ]
    }
  ];

  const benefits = [
    {
      icon: "🎓",
      title: "Academic Excellence",
      description: "Over 400 universities ranked in QS World Rankings 2026. Strong research output and industry partnerships across the continent."
    },
    {
      icon: "💰",
      title: "Affordable Education",
      description: "Many countries offer tuition-free or low-fee education. Public universities in France, Germany, Norway charge minimal fees."
    },
    {
      icon: "🌍",
      title: "Schengen Mobility",
      description: "Travel freely across 27 European countries with Schengen visa. Experience diverse cultures, languages, and landscapes."
    },
    {
      icon: "💼",
      title: "Career Opportunities",
      description: "Post-study work visas range from 1-3 years. Strong job markets in tech, engineering, healthcare, and business sectors."
    },
    {
      icon: "🏛️",
      title: "Rich Cultural Heritage",
      description: "Study in cities with centuries of history. Museums, art galleries, architecture, and cultural festivals at your doorstep."
    },
    {
      icon: "🌐",
      title: "English-Taught Programs",
      description: "Thousands of programs taught entirely in English. No need to learn the local language for many courses."
    }
  ];

  const comparisonData = [
    {
      country: "Germany",
      tuition: "Free (Public)",
      living: "€700-1,000/mo",
      workVisa: "18 months",
      programs: "1,800+"
    },
    {
      country: "Netherlands",
      tuition: "€6,000-15,000/yr",
      living: "€900-1,300/mo",
      workVisa: "12 months",
      programs: "2,000+"
    },
    {
      country: "France",
      tuition: "€170-3,770/yr",
      living: "€600-1,000/mo",
      workVisa: "12 months",
      programs: "1,400+"
    },
    {
      country: "Spain",
      tuition: "€1,000-3,500/yr",
      living: "€700-1,000/mo",
      workVisa: "12 months",
      programs: "800+"
    },
    {
      country: "Sweden",
      tuition: "€8,000-18,000/yr",
      living: "€900-1,200/mo",
      workVisa: "12 months",
      programs: "900+"
    },
    {
      country: "Denmark",
      tuition: "€6,000-16,000/yr",
      living: "€1,000-1,400/mo",
      workVisa: "12-36 months",
      programs: "700+"
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Research & Select",
      description: "Choose your country and programs based on your interests, budget, and career goals. Consider language requirements and cultural fit."
    },
    {
      step: 2,
      title: "Check Requirements",
      description: "Verify academic qualifications, language proficiency (IELTS/TOEFL), and specific program prerequisites. Each country has different criteria."
    },
    {
      step: 3,
      title: "Prepare Documents",
      description: "Gather transcripts, certificates, SOP, LORs, CV, passport, and financial proof. Get documents translated and notarized if required."
    },
    {
      step: 4,
      title: "Submit Applications",
      description: "Apply through university portals or centralized systems. Pay application fees and track your submissions regularly."
    },
    {
      step: 5,
      title: "Receive Admission",
      description: "Once accepted, arrange funding, apply for student visa, secure accommodation, and prepare for your journey to Europe."
    }
  ];

  return (
    <div className="europe-page">
      {/* Hero Section */}
      <section className="europe-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-flag">🇪🇺</span>
            <span>Study in Europe</span>
          </div>
          <h1 className="hero-title">
            Discover Your European
            <span className="title-highlight"> Study Adventure</span>
          </h1>
          <p className="hero-subtitle">
            Explore diverse cultures, world-class education, and endless opportunities 
            across Europe's most prestigious universities
          </p>
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">🎓</span>
              <span>400+ Top Universities</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌍</span>
              <span>27 Schengen Countries</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💰</span>
              <span>Affordable Tuition</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌐</span>
              <span>English Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Europe */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Europe for Your Education?</h2>
            <p>Europe offers an unmatched combination of academic excellence, cultural diversity, and career opportunities</p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="countries-section">
        <div className="container">
          <div className="section-header">
            <h2>Explore Study Destinations</h2>
            <p>Each European country offers unique advantages for international students</p>
          </div>

          <div className="countries-nav">
            <button 
              className={`country-nav-btn ${selectedCountry === 'overview' ? 'active' : ''}`}
              onClick={() => setSelectedCountry('overview')}
            >
              Overview
            </button>
            {europeanCountries.map((country) => (
              <button
                key={country.id}
                className={`country-nav-btn ${selectedCountry === country.id ? 'active' : ''}`}
                onClick={() => setSelectedCountry(country.id)}
              >
                <span className="btn-flag">{country.flag}</span>
                {country.name}
              </button>
            ))}
          </div>

          {/* Overview Content */}
          {selectedCountry === 'overview' && (
            <div className="country-content">
              <div className="comparison-table">
                <h3>Quick Comparison</h3>
                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Tuition Fees</th>
                        <th>Living Cost</th>
                        <th>Post-Study Work</th>
                        <th>English Programs</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((data, index) => (
                        <tr key={index}>
                          <td><strong>{data.country}</strong></td>
                          <td>{data.tuition}</td>
                          <td>{data.living}</td>
                          <td>{data.workVisa}</td>
                          <td>{data.programs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="popular-fields">
                <h3>Most Popular Fields of Study</h3>
                <div className="fields-grid">
                  <div className="field-item">
                    <span className="field-icon">💻</span>
                    <h4>Engineering & Technology</h4>
                    <p>Top programs in Computer Science, Electrical, Mechanical, and Civil Engineering</p>
                  </div>
                  <div className="field-item">
                    <span className="field-icon">💼</span>
                    <h4>Business & Management</h4>
                    <p>MBA, Finance, Marketing, International Business, and Entrepreneurship</p>
                  </div>
                  <div className="field-item">
                    <span className="field-icon">🔬</span>
                    <h4>Sciences & Research</h4>
                    <p>Biology, Chemistry, Physics, Data Science, and Environmental Studies</p>
                  </div>
                  <div className="field-item">
                    <span className="field-icon">🎨</span>
                    <h4>Arts & Humanities</h4>
                    <p>Design, Architecture, Fashion, History, Literature, and Languages</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Individual Country Content */}
          {europeanCountries.map((country) => (
            selectedCountry === country.id && (
              <div key={country.id} className="country-content active">
                <div className="country-header">
                  <div className="country-flag-large">{country.flag}</div>
                  <div className="country-info">
                    <h2>{country.name}</h2>
                    <div className="country-details">
                      <div className="detail-item">
                        <strong>Capital:</strong> {country.capital}
                      </div>
                      <div className="detail-item">
                        <strong>Language:</strong> {country.language}
                      </div>
                      <div className="detail-item">
                        <strong>Tuition Range:</strong> {country.tuition}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="country-highlights">
                  <h3>Key Highlights</h3>
                  <ul className="highlights-list">
                    {country.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="country-universities">
                  <h3>Top Universities</h3>
                  <div className="universities-grid">
                    {country.topUniversities.map((uni, idx) => (
                      <div key={idx} className="uni-item">
                        <span className="uni-icon">🏛️</span>
                        <span>{uni}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="country-fields">
                  <h3>Popular Fields of Study</h3>
                  <div className="fields-list">
                    {country.popularFields.map((field, idx) => (
                      <div key={idx} className="field-tag">{field}</div>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Application Process */}
      <section className="application-section">
        <div className="container">
          <div className="section-header">
            <h2>How to Apply</h2>
            <p>Follow these steps to successfully apply to European universities</p>
          </div>
          <div className="process-steps">
            {applicationProcess.map((process, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{process.step}</div>
                <h3>{process.title}</h3>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="info-section">
        <div className="container">
          <div className="info-boxes">
            <div className="info-box blue">
              <h3>📚 Academic Requirements</h3>
              <ul>
                <li>Recognized secondary/bachelor's degree</li>
                <li>Transcripts with grade equivalency</li>
                <li>English proficiency (IELTS 6.5+ or TOEFL 90+)</li>
                <li>Statement of Purpose & Letters of Recommendation</li>
              </ul>
            </div>
            <div className="info-box orange">
              <h3>💵 Financial Requirements</h3>
              <ul>
                <li>Proof of funds for tuition & living expenses</li>
                <li>Bank statements or scholarship letters</li>
                <li>Blocked account (country-specific)</li>
                <li>Health insurance coverage (mandatory)</li>
              </ul>
            </div>
            <div className="info-box green">
              <h3>🛂 Visa Process</h3>
              <ul>
                <li>Apply after receiving admission letter</li>
                <li>Processing time: 2-3 months</li>
                <li>Schengen visa for most European countries</li>
                <li>Residence permit after arrival (varies by country)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your European Journey?</h2>
            <p>Let our experienced counselors help you find the perfect European destination and guide you through the application process</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-primary">Schedule Free Consultation</Link>
              <Link to="/destinations" className="btn-secondary">View All Destinations</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}