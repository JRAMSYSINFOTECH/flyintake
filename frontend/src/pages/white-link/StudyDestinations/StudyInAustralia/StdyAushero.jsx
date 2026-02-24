import React from 'react';
import './StdyAushero.css';
import { Link } from 'react-router-dom';

/* ── Unsplash HD image URLs — all relevant to content ── */

// Hero: Australian flag — Wikipedia SVG (reliable, no CDN restrictions)
const HERO_IMG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/1280px-Flag_of_Australia.svg.png';

// Why Study cards
const reasonCards = [
  {
    img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=600&q=80',
    title: 'Top-Ranked Universities',
    desc: 'Multiple institutions consistently ranked in the global top 100, including the prestigious Group of Eight.',
  },
  {
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
    title: 'Research & Innovation',
    desc: 'World-leading research in science, technology, medicine, and environmental sustainability.',
  },
  {
    img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600&q=80',
    title: 'Quality of Life',
    desc: 'Consistently ranked among the world\'s most liveable cities — safe, welcoming, and vibrant.',
  },
  {
    img: 'https://images.unsplash.com/photo-1565728744382-61accd4aa148?auto=format&fit=crop&w=600&q=80',
    title: 'Work Rights',
    desc: 'Work up to 48 hours per fortnight during studies, with unlimited hours during semester breaks.',
  },
  {
    // ✅ FIXED: Post-Study Work Visa — graduate holding diploma, HD quality
    img: 'https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=600&q=80',
    title: 'Post-Study Work Visa',
    desc: 'Stay and build your career for 2–4 years after graduation with the Temporary Graduate visa.',
  },
  {
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    title: 'Multicultural Society',
    desc: 'A diverse, inclusive community with students and professionals from over 140 countries.',
  },
];

// Education degree card images
const degreeImgs = [
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80', // lecture hall
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80', // campus library
  'https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=600&q=80', // lab research
];

// Service card images
const serviceImgs = [
  'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80', // english test
  'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&w=600&q=80', // university campus
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80', // document application
  'https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&w=600&q=80', // passport visa
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80', // financial scholarship
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80', // travel departure
];

const serviceCards = [
  { n: '01', title: 'English Proficiency',          desc: 'Expert coaching and preparation for IELTS, PTE, and TOEFL to meet university admission requirements.' },
  { n: '02', title: 'Course & University Selection', desc: 'Personalised guidance across the Group of Eight and all leading Australian universities.' },
  { n: '03', title: 'Application Management',        desc: 'End-to-end support with applications, document preparation, and offer letter follow-up.' },
  { n: '04', title: 'Student Visa Processing',       desc: 'Comprehensive assistance with the Subclass 500 student visa, GTE statements, and compliance.' },
  { n: '05', title: 'Financial Guidance',            desc: 'Advice on scholarships, education loans, cost of living, and financial documentation.' },
  { n: '06', title: 'Pre-Departure Briefing',        desc: 'Orientation on Australian culture, accommodation, healthcare, and student life essentials.' },
];

const steps = [
  { n: '1', title: 'Initial Assessment',   desc: 'We evaluate your academic background, career goals, and budget to chart the right path forward.' },
  { n: '2', title: 'Program Selection',    desc: 'We shortlist the best-fit courses and universities aligned with your ambitions and entry profile.' },
  { n: '3', title: 'Application Lodgment', desc: 'Polished applications submitted with all required documentation, statements, and supporting materials.' },
  { n: '4', title: 'Visa Application',     desc: 'Subclass 500 student visa application with a compelling GTE statement prepared by our consultants.' },
  { n: '5', title: 'Travel & Settlement',  desc: 'We help arrange travel, accommodation, and orientation so you arrive in Australia ready to succeed.' },
];

const StdyAushero = () => {
  return (
    <div className="australia-study-container">

      {/* ── HERO — Sydney Opera House & Harbour Bridge ── */}
      <section className="australia-hero-section">
        <div className="australia-hero-overlay">
          <div className="australia-hero-content">
            <div className="australia-hero-eyebrow">Trusted Abroad Education Consultancy</div>
            <h1 className="australia-hero-title">
              Study in Australia
              <em>Build Your Future Down Under</em>
            </h1>
            <p className="australia-hero-subtitle">
              World-class universities, globally recognised qualifications, and 
              a life-changing experience in one of the world's most liveable countries.
            </p>
            <div className="australia-hero-actions">
              <Link to="/contact-us" className="aus-btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="australia-intro-section">
        <div className="australia-intro-inner">
          <div className="australia-intro-left">
            <h2>Why Australia is the <span>Smart Choice</span></h2>
            <p>A destination that combines academic prestige with an enviable lifestyle and real career opportunities.</p>
          </div>
          <div className="australia-intro-divider" />
          <div className="australia-intro-right">
            <p>
              Australia offers an exceptional education system with globally recognised 
              qualifications and a high standard of living. Known for innovative teaching 
              methods, cutting-edge research facilities, and stunning natural landscapes, 
              Australia gives international students a unique blend of academic excellence 
              and quality of life — with friendly people, vibrant cities, and unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY STUDY ── */}
      <section className="australia-why-section">
        <div className="australia-content-wrapper">
          <h2 className="australia-section-title">Why Study in <span>Australia</span></h2>
          <p className="section-subtitle">
            Australia is home to world-renowned universities, innovative research centres, 
            and a welcoming multicultural society — a top choice for ambitious students worldwide.
          </p>
          <div className="australia-reasons-grid">
            {reasonCards.map(({ img, title, desc }, i) => (
              <div className="australia-reason-card" key={i}>
                <img src={img} alt={title} className="reason-img" loading="lazy" />
                <div className="reason-card-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION SYSTEM ── */}
      <section className="australia-education-system">
        <div className="australia-content-wrapper">
          <h2 className="australia-section-title">Australia's <span>Education System</span></h2>
          <p className="section-subtitle">
            The Australian Qualifications Framework guarantees consistent, world-class quality 
            across all levels — from diplomas to doctoral research programs.
          </p>
          <div className="australia-system-cards">
            {[
              { title: "Bachelor's Degree",   dur: '3 – 4 Years', desc: 'Comprehensive undergraduate programs with strong industry connections, practical placements, and specialisation options across all major disciplines.' },
              { title: "Master's Degree",     dur: '1 – 2 Years', desc: 'Advanced coursework and research pathways, ideal for career changers and those seeking leadership and specialist roles.' },
              { title: 'Doctoral Degree (PhD)', dur: '3 – 4 Years', desc: 'A world-class research environment with access to state-of-the-art facilities and internationally recognised academic supervisors.' },
            ].map((d, i) => (
              <div className="aus-degree-card" key={i}>
                <img src={degreeImgs[i]} alt={d.title} className="degree-card-img" loading="lazy" />
                <div className="aus-degree-card-body">
                  <h3>{d.title}</h3>
                  <div className="degree-duration">{d.dur}</div>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="aus-edu-note">
            The academic year runs from <strong>late February to November</strong>, divided into two semesters. 
            Primary intakes are <strong>February (Semester 1)</strong> and <strong>July (Semester 2)</strong>.
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="australia-services-section">
        <div className="australia-content-wrapper">
          <h2 className="australia-section-title">How We <span>Help You</span></h2>
          <p className="section-subtitle">
            Our dedicated consultants guide you through every step — from selecting the right 
            course to the moment you land in Australia.
          </p>
          <div className="australia-services-grid">
            {serviceCards.map((s, i) => (
              <div className="australia-service-card" key={i}>
                <img src={serviceImgs[i]} alt={s.title} className="service-card-img" loading="lazy" />
                <div className="service-card-body">
                  <div className="australia-service-number">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ── */}
      <section className="australia-application-section">
        <div className="australia-content-wrapper">
          <h2 className="australia-section-title">Your <span>Path to Australia</span></h2>
          <p className="section-subtitle">
            A clear, structured process — we are with you at every milestone from first enquiry to first day on campus.
          </p>
          <div className="australia-application-steps">
            {steps.map((step, i) => (
              <div className="australia-step" key={i}>
                <div className="australia-step-number">{step.n}</div>
                <div className="australia-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="australia-cta-section">
        <div className="australia-content-wrapper">
          <div className="australia-cta-content">
            <div className="aus-cta-eyebrow">Free Consultation Available</div>
            <h2>Your Australian Adventure Starts Today</h2>
            <p>
              Ready to begin? Our expert consultants are here to map your journey — 
              from course selection to visa approval and beyond.
            </p>
            <Link to="/contact" className="australia-cta-button">
              Get Free Consultation
            </Link>
            
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default StdyAushero;