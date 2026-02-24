import React from 'react';
import './studyGermany.css';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   ALL HD Unsplash images — Germany specific
   Zero overlap with AUS / CAN / EUR pages
───────────────────────────────────────────── */

const geReasonCards = [
  {
    img: 'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?auto=format&fit=crop&w=600&q=80',
    title: 'Free / Low Tuition Fees',
    desc: 'Most German public universities charge zero tuition — only a small semester fee of €150–€350. World-class education at almost no cost.',
  },
  {
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80',
    title: 'Engineering Excellence',
    desc: 'Home to TU Munich, RWTH Aachen, and KIT — globally ranked among the finest engineering and technology institutions.',
  },
  {
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
    title: 'Cutting-Edge Research',
    desc: 'Access to world-leading research facilities, Fraunhofer institutes, and generous DFG and DAAD research funding.',
  },
  {
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80',
    title: 'Europe\'s Strongest Economy',
    desc: 'Germany is Europes largest economy — top employers like BMW, Siemens, SAP, and Bosch actively recruit from German universities.',
  },
  {
    img: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=600&q=80',
    title: '18-Month Job Search Visa',
    desc: 'Stay and search for employment for up to 18 months after graduation — one of the most generous post-study work allowances in Europe.',
  },
  {
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
    title: 'Central European Location',
    desc: 'Perfectly placed in the heart of Europe — Paris, Prague, Amsterdam and Vienna are all just hours away by train.',
  },
];

const geDegreeImgs = [
  'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=600&q=80',
];

const geServiceImgs = [
  'https://images.unsplash.com/photo-1555431189-0fabf2667795?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?auto=format&fit=crop&w=600&q=80',
];

const geServiceCards = [
  { n: '01', title: 'Language Preparation',       desc: 'German language coaching and TestDaF / DSH exam preparation for German-taught programmes and visa requirements.' },
  { n: '02', title: 'University Selection',        desc: 'Expert guidance across TU9 universities, universities of excellence, and Fachhochschulen for your specific goals.' },
  { n: '03', title: 'Application Management',      desc: 'End-to-end support with Uni-Assist applications, direct university portals, and document preparation.' },
  { n: '04', title: 'Visa & Blocked Account',      desc: 'Full guidance on the German student visa application and setting up the required blocked account (Sperrkonto).' },
  { n: '05', title: 'DAAD Scholarship Guidance',   desc: 'Expert advice on DAAD, Deutschlandstipendium, and university-specific scholarships to fund your studies.' },
  { n: '06', title: 'Relocation & Settlement',     desc: 'Support with accommodation, city registration (Anmeldung), health insurance, and settling into German life.' },
];

const geSteps = [
  { n: '01', title: 'Profile Assessment',           desc: 'We evaluate your academics, language level, and career goals to identify the best German universities and programmes.' },
  { n: '02', title: 'Program & University Match',   desc: 'Shortlist the ideal institution — TU9, university of excellence, or Fachhochschule — matched to your ambitions.' },
  { n: '03', title: 'Document Preparation',         desc: 'All documents gathered, translated, and certified — transcripts, SOP, motivation letter, and language certificates.' },
  { n: '04', title: 'Application Submission',       desc: 'Applications submitted via Uni-Assist or directly to universities with all required supporting materials.' },
  { n: '05', title: 'Visa & Departure',             desc: 'We guide you through the blocked account setup, student visa application, and pre-departure preparations.' },
];

const studyGermany = () => {
  return (
    <div className="ge-study-container">

      {/* ── HERO — Germany Flag ── */}
      <section className="ge-hero-section">
        <div className="ge-hero-overlay">
          <div className="ge-hero-content">
            <div className="ge-hero-eyebrow">Trusted Abroad Education Consultancy</div>
            <h1 className="ge-hero-title">
              Study in Germany
              <em>World-Class Education, Zero Tuition</em>
            </h1>
            <p className="ge-hero-subtitle">
              Europe's engineering powerhouse offers free public university education, 
              cutting-edge research, and an 18-month post-study job search visa.
            </p>
            <div className="ge-hero-actions">
              <Link to="/contact-us" className="ge-btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="ge-intro-section">
        <div className="ge-intro-inner">
          <div className="ge-intro-left">
            <h2>Why Germany is the <span>Smart Choice</span></h2>
            <p>Tuition-free education, engineering prestige, and Europe's strongest economy — all in one destination.</p>
          </div>
          <div className="ge-intro-divider" />
          <div className="ge-intro-right">
            <p>
              Germany is one of the world's most sought-after study destinations — offering 
              high-quality education at public universities with little to no tuition fees. 
              Known for engineering excellence, strong industry partnerships, and world-leading 
              research, Germany provides graduates with exceptional career prospects. Its central 
              location in Europe means students enjoy both academic rigour and the freedom 
              to explore an entire continent.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY STUDY ── */}
      <section className="ge-why-section">
        <div className="ge-content-wrapper">
          <h2 className="ge-section-title">Why Study in <span>Germany</span></h2>
          <p className="ge-section-subtitle">
            From zero-tuition universities to an 18-month job search visa — Germany 
            offers the most complete package for ambitious international students.
          </p>
          <div className="ge-reasons-grid">
            {geReasonCards.map(({ img, title, desc }, i) => (
              <div className="ge-reason-card" key={i}>
                <img src={img} alt={title} className="ge-reason-img" loading="lazy" />
                <div className="ge-reason-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION SYSTEM ── */}
      <section className="ge-education-section">
        <div className="ge-content-wrapper">
          <h2 className="ge-section-title">Germany's <span>Education System</span></h2>
          <p className="ge-section-subtitle">
            A dual-structured system combining rigorous academic university programmes with 
            career-focused Fachhochschulen — both globally respected and employer-valued.
          </p>
          <div className="ge-degree-grid">
            {[
              { title: "Bachelor's Degree",    dur: '3 – 4 Years', desc: 'Comprehensive undergraduate programmes with strong research and industry integration — often available in English at the master\'s level.' },
              { title: "Master's Degree",      dur: '1 – 2 Years', desc: 'Advanced specialisation across engineering, sciences, business, and humanities. Many programmes fully English-taught.' },
              { title: 'Doctoral Degree (PhD)', dur: '3 – 5 Years', desc: 'Access to world-leading supervisors, Fraunhofer institutes, and DFG-funded research projects at elite German universities.' },
            ].map((d, i) => (
              <div className="ge-degree-card" key={i}>
                <img src={geDegreeImgs[i]} alt={d.title} className="ge-degree-img" loading="lazy" />
                <div className="ge-degree-body">
                  <h3>{d.title}</h3>
                  <div className="ge-degree-dur">{d.dur}</div>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ge-edu-note">
            The academic year runs in two semesters: <strong>Winter (October – March)</strong> and <strong>Summer (April – September)</strong>. 
            Most international students begin in the <strong>Winter semester</strong>.
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="ge-services-section">
        <div className="ge-content-wrapper">
          <h2 className="ge-section-title">How We <span>Help You</span></h2>
          <p className="ge-section-subtitle">
            Our Germany specialists guide you through every step — from language preparation 
            to the moment you register at your German university.
          </p>
          <div className="ge-services-grid">
            {geServiceCards.map((s, i) => (
              <div className="ge-service-card" key={i}>
                <img src={geServiceImgs[i]} alt={s.title} className="ge-service-img" loading="lazy" />
                <div className="ge-service-body">
                  <div className="ge-service-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATH TO GERMANY — Horizontal badge track ── */}
      <section className="ge-path-section">
        <div className="ge-content-wrapper">
          <h2 className="ge-section-title">Your <span>Path to Germany</span></h2>
          <p className="ge-section-subtitle">
            A clear five-step process — we walk alongside you from your first enquiry 
            to your first day on a German campus.
          </p>
          <div className="ge-path-track">
            {geSteps.map((step, i) => (
              <div className="ge-path-card" key={i}>
                <div className="ge-path-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="ge-cta-section">
        <div className="ge-content-wrapper">
          <div className="ge-cta-content">
            <div className="ge-cta-eyebrow">Free Consultation Available</div>
            <h2>Begin Your German Education Journey Today</h2>
            <p>
              Ready to study tuition-free at one of the world's greatest universities? 
              Our experts are here to guide every step of your journey to Germany.
            </p>
            <Link to="/contact" className="ge-cta-button">
              Get Free Consultation
            </Link>

          </div>
        </div>
      </section> */}

    </div>
  );
};

export default studyGermany;