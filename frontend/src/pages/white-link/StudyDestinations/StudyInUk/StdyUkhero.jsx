import React from 'react';
import './StdyUkhero.css';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   ALL HD Unsplash images — UK specific
   Zero overlap with AUS / CAN / EUR / GER pages
───────────────────────────────────────────── */

const ukReasonCards = [
  {
    img: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?auto=format&fit=crop&w=600&q=80',
    title: 'Historic Universities',
    desc: 'Oxford, Cambridge, Imperial, UCL — centuries of academic tradition producing Nobel laureates, world leaders, and innovators.',
  },
  {
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    title: 'Shorter Course Duration',
    desc: 'Complete a Bachelor\'s in 3 years and a Master\'s in just 1 year — save time and tuition costs compared to other destinations.',
  },
  {
    img: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=600&q=80',
    title: 'Research Excellence',
    desc: 'UK universities produce over 14% of the world\'s most cited research papers. Access world-leading labs, institutes, and faculty.',
  },
  {
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    title: 'Global Recognition',
    desc: 'UK degrees are recognised and respected by employers in every industry worldwide — a lifelong competitive advantage.',
  },
  {
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80',
    title: 'Graduate Route Visa',
    desc: 'Stay and work in the UK for 2 years after your degree (3 years for PhD graduates) with the Graduate Route Visa.',
  },
  {
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    title: 'Rich Culture & Heritage',
    desc: 'Study in one of the world\'s most vibrant cultural hubs — world-class museums, theatre, music, and a dynamic student scene.',
  },
];

const ukDegreeImgs = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1576319155264-99536e0be1ee?auto=format&fit=crop&w=600&q=80',
];

const ukServiceImgs = [
  'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=600&q=80',
];

const ukServiceCards = [
  { n: '01', title: 'IELTS / TOEFL Preparation',    desc: 'Comprehensive coaching for English language proficiency tests required for UK university admissions.' },
  { n: '02', title: 'University Selection',           desc: 'Expert guidance across Russell Group, Red Brick, and other leading UK universities matched to your profile.' },
  { n: '03', title: 'UCAS Application Support',       desc: 'Complete assistance with UCAS applications, personal statements, reference letters, and deadline management.' },
  { n: '04', title: 'Student Visa Guidance',          desc: 'Expert support for the UK Student visa (formerly Tier 4), CAS, and all required documentation.' },
  { n: '05', title: 'Scholarship Advice',             desc: 'Personalised guidance on Chevening, Commonwealth, GREAT, and university-specific scholarships for international students.' },
  { n: '06', title: 'Accommodation Support',          desc: 'Help with university halls, private housing, and pre-arrival preparation for a smooth UK arrival.' },
];

const ukSteps = [
  { n: '01', title: 'Profile Evaluation',         desc: 'We assess your academics, English proficiency, and career aspirations to build the strongest possible application strategy.' },
  { n: '02', title: 'Course & University Match',   desc: 'Shortlist ideal Russell Group and leading UK universities and programmes perfectly aligned to your goals.' },
  { n: '03', title: 'Document Preparation',        desc: 'Personal statement crafted, references prepared, and all supporting documents verified and polished.' },
  { n: '04', title: 'UCAS / Direct Application',   desc: 'Applications submitted through UCAS or direct portals with meticulous attention to every requirement.' },
  { n: '05', title: 'Visa & Pre-Departure',        desc: 'Student visa handled end-to-end — CAS, financial documents, biometrics, and pre-departure orientation.' },
];

const StdyUKhero = () => {
  return (
    <div className="ukp-study-container">

      {/* ── HERO — UK Flag ── */}
      <section className="ukp-hero-section">
        <div className="ukp-hero-overlay">
          <div className="ukp-hero-content">
            <div className="ukp-hero-eyebrow">Trusted Abroad Education Consultancy</div>
            <h1 className="ukp-hero-title">
              Study in the UK
              <em>Centuries of Excellence, Global Recognition</em>
            </h1>
            <p className="ukp-hero-subtitle">
              Oxford, Cambridge, Imperial and beyond — the UK offers world-leading degrees, 
              shorter study durations, and a Graduate Route Visa to launch your career.
            </p>
            <div className="ukp-hero-actions">
              <Link to="/contact-us" className="ukp-btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="ukp-intro-section">
        <div className="ukp-intro-inner">
          <div className="ukp-intro-left">
            <h2>Why the UK is the <span>Smart Choice</span></h2>
            <p>Globally recognised degrees, shorter durations, and a thriving post-study work pathway.</p>
          </div>
          <div className="ukp-intro-divider" />
          <div className="ukp-intro-right">
            <p>
              The United Kingdom is home to some of the world's oldest and most prestigious universities. 
              With a rich academic heritage, cutting-edge research facilities, and a diverse cultural 
              experience, the UK offers exceptional educational value. A 3-year Bachelor's and 1-year 
              Master's means you reach your career goals faster — with a degree respected by every 
              employer on the planet and a 2-year Graduate Route Visa to build your future in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY STUDY ── */}
      <section className="ukp-why-section">
        <div className="ukp-content-wrapper">
          <h2 className="ukp-section-title">Why Study in the <span>UK</span></h2>
          <p className="ukp-section-subtitle">
            From Oxford's dreaming spires to London's global business scene — the UK combines 
            centuries of tradition with world-leading research and career opportunities.
          </p>
          <div className="ukp-reasons-grid">
            {ukReasonCards.map(({ img, title, desc }, i) => (
              <div className="ukp-reason-card" key={i}>
                <img src={img} alt={title} className="ukp-reason-img" loading="lazy" />
                <div className="ukp-reason-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION SYSTEM ── */}
      <section className="ukp-education-section">
        <div className="ukp-content-wrapper">
          <h2 className="ukp-section-title">UK's <span>Education System</span></h2>
          <p className="ukp-section-subtitle">
            Known for academic rigour, independent thinking, and close faculty interaction — 
            the UK system produces graduates ready for global leadership roles.
          </p>
          <div className="ukp-degree-grid">
            {[
              { title: "Bachelor's Degree",    dur: '3 Years (4 in Scotland)', desc: 'Focused, intensive undergraduate programmes with tutorial-based learning, strong research exposure, and industry placements.' },
              { title: "Master's Degree",      dur: '1 Year',                  desc: 'Highly efficient one-year taught Master\'s programmes — ideal for specialisation and career acceleration without lengthy delays.' },
              { title: 'Doctoral Degree (PhD)', dur: '3 – 4 Years',            desc: 'World-class research environment at institutions like Oxford, Cambridge, and Imperial — with full funding options available.' },
            ].map((d, i) => (
              <div className="ukp-degree-card" key={i}>
                <img src={ukDegreeImgs[i]} alt={d.title} className="ukp-degree-img" loading="lazy" />
                <div className="ukp-degree-body">
                  <h3>{d.title}</h3>
                  <div className="ukp-degree-dur">{d.dur}</div>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ukp-edu-note">
            The academic year is divided into <strong>three terms</strong> beginning in <strong>September/October</strong>. 
            A January intake is also available at many institutions.
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="ukp-services-section">
        <div className="ukp-content-wrapper">
          <h2 className="ukp-section-title">How We <span>Help You</span></h2>
          <p className="ukp-section-subtitle">
            Our UK specialists guide you through every step — from IELTS preparation 
            and UCAS applications to visa approval and arrival in the UK.
          </p>
          <div className="ukp-services-grid">
            {ukServiceCards.map((s, i) => (
              <div className="ukp-service-card" key={i}>
                <img src={ukServiceImgs[i]} alt={s.title} className="ukp-service-img" loading="lazy" />
                <div className="ukp-service-body">
                  <div className="ukp-service-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATH TO UK — Horizontal badge track ── */}
      <section className="ukp-path-section">
        <div className="ukp-content-wrapper">
          <h2 className="ukp-section-title">Your <span>Path to the UK</span></h2>
          <p className="ukp-section-subtitle">
            A clear five-step journey — from your very first enquiry to your first 
            week at a world-famous UK university.
          </p>
          <div className="ukp-path-track">
            {ukSteps.map((step, i) => (
              <div className="ukp-path-card" key={i}>
                <div className="ukp-path-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="ukp-cta-section">
        <div className="ukp-content-wrapper">
          <div className="ukp-cta-content">
            <div className="ukp-cta-eyebrow">Free Consultation Available</div>
            <h2>Begin Your UK Study Adventure Today</h2>
            <p>
              Ready to study at one of the world's most prestigious universities? 
              Our experts are here to guide every step of your journey to the UK.
            </p>
            <Link to="/contact" className="ukp-cta-button">
              Get Free Consultation
            </Link>

          </div>
        </div>
      </section> */}

    </div>
  );
};

export default StdyUKhero;