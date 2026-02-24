import React from 'react';
import './StdyUsahero.css';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   ALL HD Unsplash images — USA specific
   Every image carefully matched to content
   Zero overlap with AUS / CAN / EUR / GER / UK
───────────────────────────────────────────── */

// WHY STUDY cards — each image directly reflects the card topic
const uspReasonCards = [
  {
    // Red-brick Ivy League style university building — directly = Academic Excellence
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80',
    title: 'Academic Excellence',
    desc: 'Harvard, MIT, Stanford, Yale — the USA hosts 9 of the worlds top 20 universities and more Nobel laureates than any other nation.',
  },
  {
    // New York City skyline — directly = USA as premier destination
    img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80',
    title: 'Premier Destination',
    desc: 'The USA hosts over 1 million international students — the worlds largest international student population on any single continent.',
  },
  {
    // Tech/data server room glowing — directly = Cutting-Edge Technology
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    title: 'Cutting-Edge Technology',
    desc: 'Silicon Valley, MIT Media Lab, and leading research universities pioneer the technologies shaping our world. Study where innovation happens.',
  },
  {
    // Diverse students in a lecture hall — directly = Flexible Education / diverse programs
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80',
    title: 'Flexible Education',
    desc: 'Choose your major, minor, and electives freely. The US credit system lets you design a well-rounded degree tailored to your exact career goals.',
  },
  {
    // Financial documents / award letter on a desk — directly = Scholarships & Aid
    img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=80',
    title: 'Scholarships & Financial Aid',
    desc: 'Fellowships, assistantships, merit scholarships, and need-based aid — US universities award billions in financial support to international students.',
  },
  {
    // Professional shaking hands / career success — directly = Career Enhancement / OPT
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80',
    title: 'Career Enhancement',
    desc: 'Work on-campus during studies and access 12-month OPT after graduation — extendable to 36 months for STEM graduates.',
  },
];

// DEGREE cards — each image shows the actual study level being described
const uspDegreeImgs = [
  // US college campus quad with students walking — Bachelor's campus life
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80',
  // Graduate seminar / small group discussion — Master's program feel
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80',
  // Scientific research lab with equipment — PhD research environment
  'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=600&q=80',
];

// SERVICE cards — each image directly reflects the specific service offered
const uspServiceImgs = [
  // Student with books/notes studying for exam — Test Preparation (GRE/GMAT/SAT)
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
  // University campus admissions building / campus tour — University Assistance
  'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=600&q=80',
  // Counselor with student looking at program guide — Program Selection
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
  // US immigration / visa documents / passport — F-1 Visa Assistance
  'https://images.unsplash.com/photo-1436891678271-9c672565d8f6?auto=format&fit=crop&w=600&q=80',
  // Financial planning / budgeting — Financial Guidance / scholarships
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  // Airport departure lounge / travel — Pre-Departure Support
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80',
];

const uspServiceCards = [
  { n: '01', title: 'Test Preparation',       desc: 'Expert coaching for GRE, GMAT, SAT, IELTS, and TOEFL — the standardised tests required by US universities.' },
  { n: '02', title: 'University Assistance',   desc: 'Comprehensive support selecting the right university from 4,000+ institutions based on your profile, goals, and budget.' },
  { n: '03', title: 'Program Selection',       desc: 'Expert guidance in choosing the right major, specialisation, and university that aligns with your long-term career path.' },
  { n: '04', title: 'F-1 Visa Guidance',       desc: 'End-to-end support for your US Student F-1 visa — DS-160, SEVIS fee, I-20, and interview preparation.' },
  { n: '05', title: 'Financial Guidance',      desc: 'Counselling on scholarships, fellowships, assistantships, and financial aid to fund your US education.' },
  { n: '06', title: 'Pre-Departure Support',   desc: 'Comprehensive orientation on US campus life, health insurance, banking, accommodation, and what to expect on arrival.' },
];

const uspSteps = [
  { n: '01', title: 'Initial Consultation',      desc: 'We assess your academic background, test scores, and career goals to build a targeted university shortlist.' },
  { n: '02', title: 'University Selection',       desc: 'Identify the best-fit universities across Ivy League, state, and private institutions based on your profile.' },
  { n: '03', title: 'Application Preparation',    desc: 'Personal essays, Statement of Purpose, LORs, CV, and all supporting documents crafted and polished.' },
  { n: '04', title: 'F-1 Visa Processing',        desc: 'We guide you through SEVIS, I-20, DS-160, and your US Embassy visa interview to secure your F-1 visa.' },
  { n: '05', title: 'Pre-Departure Orientation',  desc: 'Full briefing on US campus life, housing, health insurance, banking, and your first days in America.' },
];

const StdyUsahero = () => {
  return (
    <div className="usp-study-container">

      {/* ── HERO — US Flag ── */}
      <section className="usp-hero-section">
        <div className="usp-hero-overlay">
          <div className="usp-hero-content">
            <div className="usp-hero-eyebrow">Trusted Abroad Education Consultancy</div>
            <h1 className="usp-hero-title">
              Study in the USA
              <em>World-Class Education, Land of Opportunity</em>
            </h1>
            <p className="usp-hero-subtitle">
              Harvard, MIT, Stanford and 4,000+ more — the USA offers unmatched academic 
              excellence, flexible degrees, and a 3-year STEM OPT pathway to your dream career.
            </p>

            {/* Stats bar */}
            {/* <div className="usp-hero-stats">
              <div className="usp-stat">
                <span className="usp-stat-num">1M+</span>
                <span className="usp-stat-lbl">International Students</span>
              </div>
              <div className="usp-stat-div" />
              <div className="usp-stat">
                <span className="usp-stat-num">4,000+</span>
                <span className="usp-stat-lbl">Universities</span>
              </div>
              <div className="usp-stat-div" />
              <div className="usp-stat">
                <span className="usp-stat-num">3 Yrs</span>
                <span className="usp-stat-lbl">STEM OPT Visa</span>
              </div>
            </div> */}

            <div className="usp-hero-actions">
              <Link to="/contact-us" className="usp-btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="usp-intro-section">
        <div className="usp-intro-inner">
          <div className="usp-intro-left">
            <h2>Why the USA is the <span>Ultimate Choice</span></h2>
            <p>The most internationally diverse higher education system on earth — with the degrees to match.</p>
          </div>
          <div className="usp-intro-divider" />
          <div className="usp-intro-right">
            <p>
              The United States of America hosts more international students than any other country 
              in the world. With over 4,000 accredited institutions — from Ivy League research 
              universities to specialist colleges — the USA offers unparalleled academic choice, 
              a flexible credit system, generous scholarship programmes, and cutting-edge research 
              facilities. Add a 12–36 month OPT work authorisation after graduation and you have 
              the complete package for your global career.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY STUDY ── */}
      <section className="usp-why-section">
        <div className="usp-content-wrapper">
          <h2 className="usp-section-title">Why Study in the <span>USA</span></h2>
          <p className="usp-section-subtitle">
            From Silicon Valley to the Ivy League — the USA combines world-leading 
            universities, pioneering research, and the best post-study work pathway in the world.
          </p>
          <div className="usp-reasons-grid">
            {uspReasonCards.map(({ img, title, desc }, i) => (
              <div className="usp-reason-card" key={i}>
                <img src={img} alt={title} className="usp-reason-img" loading="lazy" />
                <div className="usp-reason-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION SYSTEM ── */}
      <section className="usp-education-section">
        <div className="usp-content-wrapper">
          <h2 className="usp-section-title">USA's <span>Education System</span></h2>
          <p className="usp-section-subtitle">
            A uniquely flexible, credit-based system that lets students craft their own 
            academic journey — combining depth of specialisation with breadth of knowledge.
          </p>
          <div className="usp-degree-grid">
            {[
              {
                title: "Bachelor's Degree",
                dur: '4 Years',
                desc: 'Credit-based undergraduate programmes with the freedom to choose a major, minor, and electives — giving you a truly personalised education.',
              },
              {
                title: "Master's Degree",
                dur: '1.5 – 2 Years',
                desc: 'Taught or research Master\'s with strong industry links. STEM programmes qualify for 3-year OPT extension — a huge career advantage.',
              },
              {
                title: 'Doctoral Degree (PhD)',
                dur: '4 – 6 Years',
                desc: 'Research at the world\'s top institutions — often fully funded with stipend, tuition waiver, and access to billion-dollar research facilities.',
              },
            ].map((d, i) => (
              <div className="usp-degree-card" key={i}>
                <img src={uspDegreeImgs[i]} alt={d.title} className="usp-degree-img" loading="lazy" />
                <div className="usp-degree-body">
                  <h3>{d.title}</h3>
                  <div className="usp-degree-dur">{d.dur}</div>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="usp-edu-note">
            The US academic year has two main intakes: <strong>Fall (August/September)</strong> — the primary intake — 
            and <strong>Spring (January)</strong>. Most competitive programmes admit for Fall only.
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="usp-services-section">
        <div className="usp-content-wrapper">
          <h2 className="usp-section-title">How We <span>Help You</span></h2>
          <p className="usp-section-subtitle">
            Our USA specialists guide you through every step — from GRE prep and university 
            selection to your F-1 visa and first day on an American campus.
          </p>
          <div className="usp-services-grid">
            {uspServiceCards.map((s, i) => (
              <div className="usp-service-card" key={i}>
                <img src={uspServiceImgs[i]} alt={s.title} className="usp-service-img" loading="lazy" />
                <div className="usp-service-body">
                  <div className="usp-service-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATH TO USA — Horizontal badge track ── */}
      <section className="usp-path-section">
        <div className="usp-content-wrapper">
          <h2 className="usp-section-title">Your <span>Path to the USA</span></h2>
          <p className="usp-section-subtitle">
            A clear five-step journey — from your first consultation to touchdown 
            at your US university campus.
          </p>
          <div className="usp-path-track">
            {uspSteps.map((step, i) => (
              <div className="usp-path-card" key={i}>
                <div className="usp-path-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="usp-cta-section">
        <div className="usp-content-wrapper">
          <div className="usp-cta-content">
            <div className="usp-cta-eyebrow">Free Consultation Available</div>
            <h2>Start Your USA Journey Today</h2>
            <p>
              Ready to study at Harvard, MIT, Stanford or one of 4,000+ great US universities? 
              Our experts are here to guide every step of your American dream.
            </p>
            <Link to="/contact" className="usp-cta-button">
              Get Free Consultation
            </Link>

          </div>
        </div>
      </section> */}

    </div>
  );
};

export default StdyUsahero;