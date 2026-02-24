import React from 'react';
import './StdyIrlndhero.css';
import { Link } from 'react-router-dom';

/* ── All images — content-relevant, stable Unsplash IDs ── */

const reasonCards = [
  {
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80',
    title: 'World-Ranked Universities',
    desc: 'Seven Irish universities feature in the QS World Rankings top 500, including Trinity College Dublin — one of Europe\'s most prestigious institutions.',
  },
  {
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    title: 'Silicon Valley of Europe',
    desc: 'Home to European HQs of Google, Apple, Meta, and Microsoft — giving you unparalleled access to global tech employers from day one.',
  },
  {
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
    title: 'English-Speaking Nation',
    desc: 'Study and live in a fully English-speaking environment — no language barriers, just authentic cultural immersion from the moment you arrive.',
  },
  {
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80',
    title: 'Work While Studying',
    desc: 'Work up to 20 hours per week during term time and 40 hours during holidays — supporting yourself while building real-world experience.',
  },
  {
    img: 'https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&w=600&q=80',
    title: 'Graduate Stay-Back Visa',
    desc: 'The Third Level Graduate Scheme lets you stay in Ireland for 1–2 years after graduation to seek employment with top multinationals.',
  },
  {
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    title: 'Vibrant, Welcoming Culture',
    desc: 'Renowned for warm, friendly people, a rich literary heritage, and an inclusive multicultural community welcoming students from all over the world.',
  },
];

const degreeImgs = [
  // Bachelor's — lecture hall / university classroom
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
  // Master's — students studying together / postgrad learning
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=600&q=80',
  // PhD — science / research laboratory
  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80',
];

const serviceImgs = [
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
];

const serviceCards = [
  { n: '01', title: 'English Proficiency',          desc: 'Expert coaching and preparation for IELTS, PTE, and TOEFL to meet Irish university admission requirements with confidence.' },
  { n: '02', title: 'Course & University Selection', desc: 'Personalised guidance across Trinity College Dublin, UCD, UCC, NUI Galway, and all leading Irish institutions for your profile.' },
  { n: '03', title: 'Application Management',        desc: 'End-to-end support with CAO and direct university applications, document preparation, and offer letter follow-up.' },
  { n: '04', title: 'Student Visa Processing',       desc: 'Comprehensive assistance with the Irish Study Visa (D Visa), financial evidence, and full immigration compliance.' },
  { n: '05', title: 'Financial Guidance',            desc: 'Advice on Irish Government scholarships, education loans, living cost planning, and financial document preparation.' },
  { n: '06', title: 'Pre-Departure Briefing',        desc: 'Orientation on Irish culture, GNIB registration, accommodation, healthcare, and everything you need before you fly.' },
];

const steps = [
  { n: '1', title: 'Initial Assessment',   desc: 'We evaluate your academic profile, career aspirations, and budget to identify the best-fit Irish institutions for you.' },
  { n: '2', title: 'Program Selection',    desc: 'We shortlist the most suitable courses and universities aligned with your ambitions and entry requirements.' },
  { n: '3', title: 'Application Lodgment', desc: 'Polished CAO or direct applications submitted with all required documentation, personal statements, and supporting materials.' },
  { n: '4', title: 'Visa Application',     desc: 'Irish Study Visa application with full financial documentation and a compelling cover letter prepared by our expert consultants.' },
  { n: '5', title: 'Travel & Settlement',  desc: 'We assist with GNIB registration, accommodation arrangements, and orientation so you arrive in Ireland ready to thrive.' },
];

const StdyIrlndhero = () => {
  return (
    <div className="ireland-study-container">

      {/* ── HERO — Ireland Flag ── */}
      <section className="ireland-hero-section">
        <div className="ireland-hero-overlay">
          <div className="ireland-hero-content">
            <div className="ireland-hero-eyebrow">Trusted Abroad Education Consultancy</div>
            <h1 className="ireland-hero-title">
              Study in Ireland
              <em>Thrive in the Emerald Isle</em>
            </h1>
            <p className="ireland-hero-subtitle">
              World-class universities, an English-speaking environment,
              and a gateway to Europe's most dynamic tech and innovation hub.
            </p>
            <div className="ireland-hero-actions">
              <Link to="/contact-us" className="irl-btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="ireland-intro-section">
        <div className="ireland-intro-inner">
          <div className="ireland-intro-left">
            <h2>Why Ireland is the <span>Smart Choice</span></h2>
            <p>A destination that blends academic prestige with Europe's most exciting career ecosystem.</p>
          </div>
          <div className="ireland-intro-divider" />
          <div className="ireland-intro-right">
            <p>
              Ireland has emerged as one of the world's most sought-after study destinations,
              combining centuries of academic tradition with a booming modern economy. Known as
              the "Silicon Valley of Europe," Ireland is home to the European headquarters of
              the world's largest tech companies. With globally recognised qualifications, an
              English-speaking environment, generous post-study work rights, and warm, welcoming
              people, Ireland offers international students an unmatched blend of opportunity and quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY STUDY ── */}
      <section className="ireland-why-section">
        <div className="ireland-content-wrapper">
          <h2 className="ireland-section-title">Why Study in <span>Ireland</span></h2>
          <p className="irl-section-subtitle">
            Ireland is home to world-class universities, a thriving innovation economy,
            and one of Europe's most welcoming student communities — the perfect launchpad for your global career.
          </p>
          <div className="ireland-reasons-grid">
            {reasonCards.map(({ img, title, desc }, i) => (
              <div className="ireland-reason-card" key={i}>
                <img src={img} alt={title} className="irl-reason-img" loading="lazy" />
                <div className="irl-reason-card-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION SYSTEM ── */}
      <section className="ireland-education-system">
        <div className="ireland-content-wrapper">
          <h2 className="ireland-section-title">Ireland's <span>Education System</span></h2>
          <p className="irl-section-subtitle">
            Ireland follows the European Credit Transfer and Accumulation System (ECTS),
            ensuring qualifications are globally recognised and transferable across Europe and beyond.
          </p>
          <div className="ireland-system-cards">
            {[
              { title: "Bachelor's Degree",     dur: '3 – 4 Years', desc: 'Comprehensive undergraduate programs with strong industry placements in tech, pharma, and finance. ECTS credits ensure full European and global transferability.' },
              { title: "Master's Degree",       dur: '1 – 2 Years', desc: "Advanced coursework and research pathways closely linked to Ireland's multinational employer network — ideal for career acceleration and deep specialisation." },
              { title: 'Doctoral Degree (PhD)', dur: '3 – 4 Years', desc: "Ireland's research ecosystem is globally respected, with generous Science Foundation Ireland funding and access to world-class research supervisors." },
            ].map((d, i) => (
              <div className="irl-degree-card" key={i}>
                <img src={degreeImgs[i]} alt={d.title} className="irl-degree-card-img" loading="lazy" />
                <div className="irl-degree-card-body">
                  <h3>{d.title}</h3>
                  <div className="irl-degree-duration">{d.dur}</div>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="irl-edu-note">
            The Irish academic year runs from <strong>September to May</strong>, divided into two semesters.
            The primary intake is <strong>September</strong>, with some institutions also offering a <strong>January (Spring) intake</strong>.
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="ireland-services-section">
        <div className="ireland-content-wrapper">
          <h2 className="ireland-section-title">How We <span>Help You</span></h2>
          <p className="irl-section-subtitle">
            Our dedicated consultants guide you through every step — from selecting the right
            course to the moment you land in Ireland and beyond.
          </p>
          <div className="ireland-services-grid">
            {serviceCards.map((s, i) => (
              <div className="ireland-service-card" key={i}>
                <img src={serviceImgs[i]} alt={s.title} className="irl-service-card-img" loading="lazy" />
                <div className="irl-service-card-body">
                  <div className="ireland-service-number">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ── */}
      <section className="ireland-application-section">
        <div className="ireland-content-wrapper">
          <h2 className="ireland-section-title">Your <span>Path to Ireland</span></h2>
          <p className="irl-section-subtitle">
            A clear, structured process — we are with you at every milestone from first enquiry to first day on campus.
          </p>
          <div className="ireland-application-steps">
            {steps.map((step, i) => (
              <div className="ireland-step" key={i}>
                <div className="ireland-step-number">{step.n}</div>
                <div className="ireland-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="ireland-cta-section">
        <div className="ireland-content-wrapper">
          <div className="ireland-cta-content">
            <div className="irl-cta-eyebrow">Free Consultation Available</div>
            <h2>Your Irish Adventure Starts Today</h2>
            <p>
              Ready to begin? Our expert consultants are here to map your journey —
              from course selection to visa approval and your very first step onto Irish soil.
            </p>
            <Link to="/contact" className="ireland-cta-button">
              Get Free Consultation
            </Link>

          </div>
        </div>
      </section> */}

    </div>
  );
};

export default StdyIrlndhero;