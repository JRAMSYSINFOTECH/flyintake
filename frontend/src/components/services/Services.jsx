import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Study Abroad Consulting',
      description: 'Expert guidance in selecting the right country, university, and program tailored to your academic goals.',
      image: '/assets/studyservice.jpg',
      features: ['Country Selection', 'University Matching', 'Program Advisory'],
      number: '01',
      accent: '#FF6B35'
    },
    {
      id: 2,
      title: 'Application & Documentation',
      description: 'Comprehensive support in crafting compelling applications, SOPs, LORs, and managing documentation.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80',
      features: ['Application Strategy', 'SOP & LOR Writing', 'Document Review'],
      number: '02',
      accent: '#0C3B6B'
    },
    {
      id: 3,
      title: 'Visa & Immigration',
      description: 'Strategic visa guidance with meticulous documentation support ensuring smooth approval processes.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&q=80',
      features: ['Visa Processing', 'Interview Prep', 'Immigration Support'],
      number: '03',
      accent: '#FF8556'
    },
    {
      id: 4,
      title: 'Financial Planning',
      description: 'Strategic scholarship assistance and education loan guidance for your study abroad journey.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&q=80',
      features: ['Scholarship Search', 'Loan Assistance', 'Budget Planning'],
      number: '04',
      accent: '#155A9A'
    }
  ];

  return (
    <section className="services-compact">
      <div className="compact-bg-pattern"></div>

      <div className="services-compact-container">
        {/* Condensed Header */}
        <div className="compact-header">
          <div className="compact-badge">
            <span className="badge-pulse"></span>
            OUR SERVICES
          </div>
          
          <h2 className="compact-title">
            <span className="title-main">Complete Support for Your</span>
            <span className="title-highlight">Global Education Journey</span>
          </h2>
        </div>

        {/* Tight Grid Layout */}
        <div className="services-compact-grid">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="compact-service-card"
              style={{ '--accent': service.accent, '--delay': `${index * 0.1}s` }}
            >
              {/* Compact Image */}
              <div className="compact-image-container">
                <img src={service.image} alt={service.title} className="compact-img" />
                <div className="compact-overlay"></div>
                <div className="compact-number">{service.number}</div>
              </div>

              {/* Tight Content */}
              <div className="compact-content">
                <h3 className="compact-card-title">{service.title}</h3>
                <p className="compact-desc">{service.description}</p>

                <div className="compact-features">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="feature-pill">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="compact-btn">
                  <span>Learn More</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10m-3-3l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Compact CTA */}
        <div className="compact-cta">
          <div className="cta-left">
            <h3 className="cta-title">Ready to Start Your Journey?</h3>
            <p className="cta-text">Book a free 30-minute consultation with our expert counselors</p>
          </div>
          
          <Link to="/contact" className="cta-button">
            <span>Schedule Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;