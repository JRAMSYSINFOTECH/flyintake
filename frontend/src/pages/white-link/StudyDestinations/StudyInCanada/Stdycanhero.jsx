import React from 'react';
import './Stdycanhero.css';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   ALL images are Canada-specific & unique
   (zero overlap with Australia page)
───────────────────────────────────────────── */

const canReasonCards = [
  {
    img: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=600&q=80',
    title: 'World-Class Universities',
    desc: 'UofT, McGill, UBC & Waterloo consistently rank in the global top 100 for research and innovation.',
  },
  {
    img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
    title: 'Affordable Tuition',
    desc: 'Lower costs than the US or UK — outstanding academic value with generous scholarship opportunities.',
  },
  {
    img: 'https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?auto=format&fit=crop&w=600&q=80',
    title: 'PR & Immigration Pathways',
    desc: 'Clear routes to permanent residency via Express Entry, PNP, and the Canadian Experience Class.',
  },
  {
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80',
    title: 'Work While Studying',
    desc: 'Work up to 24 hours/week during studies, with unlimited hours permitted during scheduled breaks.',
  },
  {
    img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80',
    title: 'Post-Graduate Work Permit',
    desc: 'Stay and work in Canada for up to 3 years after graduation — a real springboard for your career.',
  },
  {
    img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80',
    title: 'Safe & Multicultural',
    desc: 'One of the world\'s safest and most welcoming nations — home to students from over 190 countries.',
  },
];

const canDegreeImgs = [
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80',
];

const canServiceImgs = [
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
];

const canServiceCards = [
  { n: '01', title: 'Language Testing',              desc: 'Expert IELTS, TOEFL & PTE coaching to meet Canadian university and college admission requirements.' },
  { n: '02', title: 'University & College Selection', desc: 'Personalised guidance across all leading Canadian universities, colleges, and DLI institutions.' },
  { n: '03', title: 'Application Support',            desc: 'Complete assistance with applications, statements of purpose, and all supporting documents.' },
  { n: '04', title: 'Study Permit Processing',        desc: 'Comprehensive support for study permit applications, SOP writing, biometrics, and compliance.' },
  { n: '05', title: 'Financial Planning',             desc: 'Guidance on scholarships, GIC requirements, education loans, and cost-of-living planning.' },
  { n: '06', title: 'Settlement Services',            desc: 'Support with accommodation, SIN, health card, banking, and adapting to Canadian student life.' },
];

const canSteps = [
  { n: '01', icon: '📋', title: 'Profile Assessment',      desc: 'We evaluate your academics, experience, and goals to identify best-fit programs and institutions across Canada.' },
  { n: '02', icon: '🎓', title: 'Program Selection',       desc: 'Shortlist universities and co-op programs perfectly aligned with your career ambitions and eligibility.' },
  { n: '03', icon: '📝', title: 'Application Lodgment',    desc: 'Polished applications submitted with all documents, personal statements, and supporting evidence.' },
  { n: '04', icon: '🛂', title: 'Study Permit & Visa',     desc: 'Expert guidance on permit application, SOP preparation, biometrics, and medical requirements.' },
  { n: '05', icon: '✈️', title: 'Arrival & Settlement',    desc: 'We prepare you for Canadian life — housing, SIN, health card, banking, and campus orientation.' },
];

const Stdycanhero = () => {
  return (
    <div className="can-study-container">

      {/* ── HERO — Canada Flag ── */}
      <section className="can-hero-section">
        <div className="can-hero-overlay">
          <div className="can-hero-content">
            <div className="can-hero-eyebrow">Trusted Abroad Education Consultancy</div>
            <h1 className="can-hero-title">
              Study in Canada
              <em>Shape Your Future in the True North</em>
            </h1>
            <p className="can-hero-subtitle">
              World-class universities, clear pathways to permanent residency, and 
              an unmatched quality of life in one of the world's most welcoming nations.
            </p>
            <div className="can-hero-actions">
              <Link to="/contact-us" className="can-btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="can-intro-section">
        <div className="can-intro-inner">
          <div className="can-intro-left">
            <h2>Why Canada is the <span>Smart Choice</span></h2>
            <p>Academic excellence, affordable costs, real work rights, and a genuine immigration pathway.</p>
          </div>
          <div className="can-intro-divider" />
          <div className="can-intro-right">
            <p>
              Canada is renowned for its high-quality education system, multicultural society, 
              and exceptional quality of life. With affordable tuition, world-class universities, 
              and structured pathways to permanent residency, Canada has become a top destination 
              for international students. From vibrant cities like Toronto and Vancouver to 
              breathtaking natural landscapes — Canada offers a life-changing experience.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY STUDY ── */}
      <section className="can-why-section">
        <div className="can-content-wrapper">
          <h2 className="can-section-title">Why Study in <span>Canada</span></h2>
          <p className="can-section-subtitle">
            Canada blends academic prestige with real career opportunities, work rights, and 
            immigration pathways — making it the #1 choice for ambitious global students.
          </p>
          <div className="can-reasons-grid">
            {canReasonCards.map(({ img, title, desc }, i) => (
              <div className="can-reason-card" key={i}>
                <img src={img} alt={title} className="can-reason-img" loading="lazy" />
                <div className="can-reason-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION SYSTEM ── */}
      <section className="can-education-section">
        <div className="can-content-wrapper">
          <h2 className="can-section-title">Canada's <span>Education System</span></h2>
          <p className="can-section-subtitle">
            Governed provincially with consistently high national standards — from research-intensive 
            universities to career-focused colleges with strong co-op and internship programmes.
          </p>
          <div className="can-degree-grid">
            {[
              { title: "Bachelor's Degree",    dur: '3 – 4 Years', desc: 'Comprehensive programs with strong co-op placements, industry ties, and specialisation across all major disciplines.' },
              { title: "Master's Degree",      dur: '1 – 2 Years', desc: 'Advanced coursework and research pathways — ideal for those pursuing leadership and specialist roles in Canada.' },
              { title: 'College / PhD Program', dur: '1 – 5 Years', desc: 'Practical diploma programs with strong career outcomes, plus world-class doctoral research opportunities.' },
            ].map((d, i) => (
              <div className="can-degree-card" key={i}>
                <img src={canDegreeImgs[i]} alt={d.title} className="can-degree-img" loading="lazy" />
                <div className="can-degree-body">
                  <h3>{d.title}</h3>
                  <div className="can-degree-dur">{d.dur}</div>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="can-edu-note">
            The academic year runs from <strong>September to April</strong>, split into fall and winter semesters. 
            An optional <strong>Summer term</strong> is available at most institutions.
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="can-services-section">
        <div className="can-content-wrapper">
          <h2 className="can-section-title">How We <span>Help You</span></h2>
          <p className="can-section-subtitle">
            Our dedicated consultants guide you through every step — from choosing the right 
            program to the moment you land and settle in Canada.
          </p>
          <div className="can-services-grid">
            {canServiceCards.map((s, i) => (
              <div className="can-service-card" key={i}>
                <img src={canServiceImgs[i]} alt={s.title} className="can-service-img" loading="lazy" />
                <div className="can-service-body">
                  <div className="can-service-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATH TO CANADA — Horizontal card track design ── */}
      <section className="can-path-section">
        <div className="can-content-wrapper">
          <h2 className="can-section-title">Your <span>Path to Canada</span></h2>
          <p className="can-section-subtitle">
            A clear five-step journey — we walk alongside you from your very first enquiry 
            to your first day on a Canadian campus.
          </p>
          <div className="can-path-track">
            {canSteps.map((step, i) => (
              <div className="can-path-card" key={i}>
                <div className="can-path-num-badge">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < canSteps.length - 1 && <div className="can-path-arrow">›</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="can-cta-section">
        <div className="can-content-wrapper">
          <div className="can-cta-content">
            <div className="can-cta-eyebrow">Free Consultation Available</div>
            <h2>Your Canadian Adventure Starts Today</h2>
            <p>
              Ready to begin? Our expert consultants are here to map your entire journey — 
              from course selection to study permit approval and beyond.
            </p>
            <Link to="/contact" className="can-cta-button">
              Get Free Consultation
            </Link>

          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Stdycanhero;