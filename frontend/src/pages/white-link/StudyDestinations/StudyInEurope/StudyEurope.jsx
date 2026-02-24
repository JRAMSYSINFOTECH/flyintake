import React, { useState } from 'react';
import './StudyEurope.css';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────
   ALL HD Unsplash images — Europe specific
   Unique to this page, no overlap with AUS/CAN
───────────────────────────────────────────── */

const eurReasonCards = [
  {
    img: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=600&q=80',
    title: 'Academic Excellence',
    desc: 'Over 400 universities in the QS World Rankings. Home to Oxford, ETH Zurich, TU Munich and centuries of scholarly tradition.',
  },
  {
    img: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&w=600&q=80',
    title: 'Affordable Education',
    desc: 'Public universities in Germany and Norway offer tuition-free education. France charges as little as €170/year for public programmes.',
  },
  {
    img: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=600&q=80',
    title: 'Schengen Mobility',
    desc: 'Travel freely across 27 European countries on a single visa — experience diverse cultures, languages, and landscapes at your doorstep.',
  },
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    title: 'Career Opportunities',
    desc: 'Post-study work permits of 1–3 years across Europe. Thriving job markets in tech, engineering, healthcare, and finance.',
  },
  {
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80',
    title: 'English-Taught Programs',
    desc: 'Thousands of fully English-taught degrees across Europe — no need to master a local language to get started.',
  },
  {
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80',
    title: 'Rich Cultural Heritage',
    desc: 'Study surrounded by centuries of art, architecture, and history — museums, galleries, and cultural festivals at every turn.',
  },
];

const eurDegreeImgs = [
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&w=600&q=80',
];

const eurServiceImgs = [
  'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
];

const eurServiceCards = [
  { n: '01', title: 'Language & Test Prep',           desc: 'Expert IELTS, TOEFL, PTE coaching and language preparation to meet European university entry requirements.' },
  { n: '02', title: 'Country & Course Selection',     desc: 'Personalised guidance across Germany, Netherlands, France, Sweden, Italy, Spain and beyond.' },
  { n: '03', title: 'Application Management',         desc: 'End-to-end support with university applications, motivation letters, and document preparation.' },
  { n: '04', title: 'Schengen Visa Assistance',       desc: 'Comprehensive guidance on student visa, residence permit, and blocked account requirements by country.' },
  { n: '05', title: 'Scholarship Guidance',           desc: 'Expert advice on DAAD, Erasmus+, government scholarships, and university-specific funding options.' },
  { n: '06', title: 'Pre-Departure Briefing',         desc: 'Orientation on European culture, accommodation, health insurance, banking, and student life essentials.' },
];

const eurSteps = [
  { n: '01', title: 'Profile Assessment',     desc: 'We evaluate your academics, goals, and budget to identify the best-fit countries, universities, and programmes in Europe.' },
  { n: '02', title: 'Country & Course Match', desc: 'Shortlist the ideal European destination and programme — factoring in tuition, language, post-study work, and lifestyle.' },
  { n: '03', title: 'Application Lodgment',   desc: 'Polished applications submitted with all required documents, motivation letters, CVs, and supporting materials.' },
  { n: '04', title: 'Visa & Permit Support',  desc: 'Expert guidance on student visa applications, blocked accounts, residence permits, and country-specific requirements.' },
  { n: '05', title: 'Arrival & Settlement',   desc: 'We prepare you for life in Europe — accommodation, health insurance, banking, SIM card, and campus registration.' },
];

const europeanCountries = [
  {
    id: 'germany',
    name: 'Germany',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png',
    capital: 'Berlin', language: 'German/English', tuition: 'Free (Public Universities)',
    highlights: ['Tuition-free public universities', '18-month job-seeker visa', '400+ English programmes', 'World-leading engineering & tech'],
    universities: ['TU Munich', 'LMU Munich', 'Heidelberg University', 'Humboldt University Berlin'],
    fields: ['Engineering', 'Computer Science', 'Business', 'Natural Sciences'],
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/320px-Flag_of_the_Netherlands.svg.png',
    capital: 'Amsterdam', language: 'Dutch/English', tuition: '€6,000–€15,000/year',
    highlights: ['2,000+ English-taught programmes', '1-year post-study search visa', 'Innovative learning environment', 'High quality of life'],
    universities: ['University of Amsterdam', 'Delft University of Technology', 'Leiden University', 'Utrecht University'],
    fields: ['Engineering & Technology', 'Business & Economics', 'Data Science', 'International Relations'],
  },
  {
    id: 'france',
    name: 'France',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png',
    capital: 'Paris', language: 'French/English', tuition: '€170–€3,770/year (Public)',
    highlights: ['Incredibly affordable public fees', 'World-leading research institutions', '12-month job-seeker permit', 'Rich cultural & academic life'],
    universities: ['Sorbonne University', 'École Polytechnique', 'Sciences Po', 'HEC Paris'],
    fields: ['Business & Management', 'Engineering', 'Arts & Design', 'Political Science'],
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/320px-Flag_of_Sweden.svg.png',
    capital: 'Stockholm', language: 'Swedish/English', tuition: '€8,000–€18,000/year',
    highlights: ['Innovation & sustainability-focused', '12-month job-seeker permit', 'Progressive education system', 'High quality of life'],
    universities: ['Lund University', 'Uppsala University', 'KTH Royal Institute', 'Stockholm University'],
    fields: ['Engineering', 'Sustainability', 'Technology', 'Design'],
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/320px-Flag_of_Italy.svg.png',
    capital: 'Rome', language: 'Italian/English', tuition: '€900–€4,000/year (Public)',
    highlights: ['Affordable public university fees', 'Art, design & architecture hub', 'Mediterranean lifestyle', 'Rich historical heritage'],
    universities: ['University of Bologna', 'Politecnico di Milano', 'Sapienza University', 'University of Padua'],
    fields: ['Fashion & Design', 'Architecture', 'Arts', 'Engineering'],
  },
  {
    id: 'spain',
    name: 'Spain',
    flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png',
    capital: 'Madrid', language: 'Spanish/English', tuition: '€1,000–€3,500/year (Public)',
    highlights: ['Very affordable lifestyle', '12-month job-seeker permit', '30 hrs/week work during studies', 'Warm climate & vibrant culture'],
    universities: ['University of Barcelona', 'Complutense University', 'IE Business School', 'University of Madrid'],
    fields: ['Business Administration', 'Tourism & Hospitality', 'Architecture', 'Language Studies'],
  },
];

const comparisonData = [
  { country: 'Germany',     tuition: 'Free (Public)', living: '€700–1,000/mo',  workVisa: '18 months',    programs: '400+' },
  { country: 'Netherlands', tuition: '€6,000–15,000', living: '€900–1,300/mo',  workVisa: '12 months',    programs: '2,000+' },
  { country: 'France',      tuition: '€170–3,770',    living: '€600–1,000/mo',  workVisa: '12 months',    programs: '1,400+' },
  { country: 'Spain',       tuition: '€1,000–3,500',  living: '€700–1,000/mo',  workVisa: '12 months',    programs: '800+' },
  { country: 'Sweden',      tuition: '€8,000–18,000', living: '€900–1,200/mo',  workVisa: '12 months',    programs: '900+' },
  { country: 'Italy',       tuition: '€900–4,000',    living: '€700–1,100/mo',  workVisa: '12 months',    programs: '700+' },
];

export default function StudyEurope() {
  const [activeCountry, setActiveCountry] = useState('overview');
  const selected = europeanCountries.find(c => c.id === activeCountry);

  return (
    <div className="eur-study-container">

      {/* ── HERO — EU Flag ── */}
      <section className="eur-hero-section">
        <div className="eur-hero-overlay">
          <div className="eur-hero-content">
            <div className="eur-hero-eyebrow">Trusted Abroad Education Consultancy</div>
            <h1 className="eur-hero-title">
              Study in Europe
              <em>Where Centuries of Excellence Meet Your Future</em>
            </h1>
            <p className="eur-hero-subtitle">
              World-class universities, tuition-free options, Schengen mobility, and a 
              life-enriching experience across 27 of the world's most storied nations.
            </p>
            <div className="eur-hero-actions">
              <Link to="/contact-us" className="eur-btn-primary">Contact Us</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="eur-intro-section">
        <div className="eur-intro-inner">
          <div className="eur-intro-left">
            <h2>Why Europe is the <span>Ultimate Choice</span></h2>
            <p>Centuries of academic tradition, unbeatable affordability, and the freedom to explore 27 nations.</p>
          </div>
          <div className="eur-intro-divider" />
          <div className="eur-intro-right">
            <p>
              Europe is home to the world's oldest universities and most celebrated research institutions. 
              With tuition-free public universities in Germany, incredibly affordable fees in France and Italy, 
              and English-taught programmes across the continent, Europe offers a world-class education at a 
              fraction of the cost of other English-speaking destinations — with the incomparable bonus of 
              Schengen travel and rich cultural immersion.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY STUDY ── */}
      <section className="eur-why-section">
        <div className="eur-content-wrapper">
          <h2 className="eur-section-title">Why Study in <span>Europe</span></h2>
          <p className="eur-section-subtitle">
            From tuition-free universities to Schengen travel freedom — Europe offers 
            an unmatched combination of prestige, affordability, and adventure.
          </p>
          <div className="eur-reasons-grid">
            {eurReasonCards.map(({ img, title, desc }, i) => (
              <div className="eur-reason-card" key={i}>
                <img src={img} alt={title} className="eur-reason-img" loading="lazy" />
                <div className="eur-reason-body">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION SYSTEM ── */}
      <section className="eur-education-section">
        <div className="eur-content-wrapper">
          <h2 className="eur-section-title">European <span>Education System</span></h2>
          <p className="eur-section-subtitle">
            Governed by the Bologna Process — a unified framework ensuring consistent degree recognition 
            and academic standards across all 48 member countries.
          </p>
          <div className="eur-degree-grid">
            {[
              { title: "Bachelor's Degree",   dur: '3 – 4 Years', desc: 'Broad undergraduate education with strong specialisation options, research exposure, and Erasmus+ exchange opportunities across Europe.' },
              { title: "Master's Degree",     dur: '1 – 2 Years', desc: 'Advanced specialisation with strong industry and research links — many top programmes taught entirely in English.' },
              { title: 'Doctoral Degree (PhD)', dur: '3 – 5 Years', desc: 'World-class research environment at institutions like ETH Zurich, Oxford, and TU Munich with globally recognised supervisors.' },
            ].map((d, i) => (
              <div className="eur-degree-card" key={i}>
                <img src={eurDegreeImgs[i]} alt={d.title} className="eur-degree-img" loading="lazy" />
                <div className="eur-degree-body">
                  <h3>{d.title}</h3>
                  <div className="eur-degree-dur">{d.dur}</div>
                  <p>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="eur-edu-note">
            Academic intakes vary by country — most start in <strong>September/October</strong>. Many institutions 
            also offer a <strong>February/March intake</strong>. Check individual university deadlines early.
          </div>
        </div>
      </section>

      {/* ── COUNTRY EXPLORER ── */}
      <section className="eur-countries-section">
        <div className="eur-content-wrapper">
          <h2 className="eur-section-title">Explore Study <span>Destinations</span></h2>
          <p className="eur-section-subtitle">
            Each European country offers distinct advantages — compare them below or 
            click a country to explore in detail.
          </p>

          {/* Tab Nav */}
          <div className="eur-country-nav">
            <button
              className={`eur-nav-btn${activeCountry === 'overview' ? ' active' : ''}`}
              onClick={() => setActiveCountry('overview')}
            >Overview</button>
            {europeanCountries.map(c => (
              <button
                key={c.id}
                className={`eur-nav-btn${activeCountry === c.id ? ' active' : ''}`}
                onClick={() => setActiveCountry(c.id)}
              >
                <img src={c.flag} alt={c.name} className="eur-nav-flag" />
                {c.name}
              </button>
            ))}
          </div>

          {/* Overview */}
          {activeCountry === 'overview' && (
            <div className="eur-country-panel">
              <div className="eur-comparison-wrap">
                <h3>Quick Country Comparison</h3>
                <div className="eur-table-scroll">
                  <table className="eur-table">
                    <thead>
                      <tr>
                        <th>Country</th>
                        <th>Tuition Fees</th>
                        <th>Living Cost</th>
                        <th>Post-Study Work</th>
                        <th>English Programmes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr key={i}>
                          <td><strong>{row.country}</strong></td>
                          <td>{row.tuition}</td>
                          <td>{row.living}</td>
                          <td>{row.workVisa}</td>
                          <td>{row.programs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Individual Country */}
          {selected && (
            <div className="eur-country-panel" key={selected.id}>
              <div className="eur-country-header">
                <img src={selected.flag} alt={selected.name} className="eur-country-flag-img" />
                <div className="eur-country-meta">
                  <h3>{selected.name}</h3>
                  <div className="eur-country-details">
                    <span><strong>Capital:</strong> {selected.capital}</span>
                    <span><strong>Language:</strong> {selected.language}</span>
                    <span><strong>Tuition:</strong> {selected.tuition}</span>
                  </div>
                </div>
              </div>

              <div className="eur-country-body">
                <div className="eur-highlights-box">
                  <h4>Key Highlights</h4>
                  <ul className="eur-highlights-list">
                    {selected.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                </div>
                <div className="eur-uni-box">
                  <h4>Top Universities</h4>
                  <div className="eur-uni-grid">
                    {selected.universities.map((u, i) => (
                      <div className="eur-uni-item" key={i}>{u}</div>
                    ))}
                  </div>
                  <h4 style={{marginTop:'24px'}}>Popular Fields</h4>
                  <div className="eur-fields-list">
                    {selected.fields.map((f, i) => (
                      <span className="eur-field-tag" key={i}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="eur-services-section">
        <div className="eur-content-wrapper">
          <h2 className="eur-section-title">How We <span>Help You</span></h2>
          <p className="eur-section-subtitle">
            Our dedicated Europe specialists guide you through every step — from picking 
            the right country to settling into your new European city.
          </p>
          <div className="eur-services-grid">
            {eurServiceCards.map((s, i) => (
              <div className="eur-service-card" key={i}>
                <img src={eurServiceImgs[i]} alt={s.title} className="eur-service-img" loading="lazy" />
                <div className="eur-service-body">
                  <div className="eur-service-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATH TO EUROPE — Horizontal track ── */}
      <section className="eur-path-section">
        <div className="eur-content-wrapper">
          <h2 className="eur-section-title">Your <span>Path to Europe</span></h2>
          <p className="eur-section-subtitle">
            A clear five-step journey from your very first enquiry to your first lecture in Europe.
          </p>
          <div className="eur-path-track">
            {eurSteps.map((step, i) => (
              <div className="eur-path-card" key={i}>
                <div className="eur-path-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFO BOXES ── */}
      <section className="eur-info-section">
        <div className="eur-content-wrapper">
          <h2 className="eur-section-title">Important <span>Requirements</span></h2>
          <p className="eur-section-subtitle">
            Everything you need to know before applying to a European university.
          </p>
          <div className="eur-info-grid">
            <div className="eur-info-box eur-info-blue">
              <div className="eur-info-icon">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=80&q=80" alt="Academic" />
              </div>
              <h3>Academic Requirements</h3>
              <ul>
                <li>Recognised secondary or bachelor's degree</li>
                <li>Official transcripts with grade equivalency</li>
                <li>English proficiency — IELTS 6.0+ or TOEFL 80+</li>
                <li>Statement of Purpose & Letters of Recommendation</li>
              </ul>
            </div>
            <div className="eur-info-box eur-info-gold">
              <div className="eur-info-icon">
                <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=80&q=80" alt="Financial" />
              </div>
              <h3>Financial Requirements</h3>
              <ul>
                <li>Proof of funds for tuition and living expenses</li>
                <li>Bank statements or scholarship award letters</li>
                <li>Blocked account for Germany (€11,208/year)</li>
                <li>Mandatory health insurance coverage</li>
              </ul>
            </div>
            <div className="eur-info-box eur-info-navy">
              <div className="eur-info-icon">
                <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=80&q=80" alt="Visa" />
              </div>
              <h3>Visa Process</h3>
              <ul>
                <li>Apply after receiving your admission letter</li>
                <li>Processing time: 6–12 weeks on average</li>
                <li>Schengen or national visa depending on country</li>
                <li>Residence permit required after arrival</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      {/* <section className="eur-cta-section">
        <div className="eur-content-wrapper">
          <div className="eur-cta-content">
            <div className="eur-cta-eyebrow">Free Consultation Available</div>
            <h2>Your European Adventure Starts Today</h2>
            <p>
              Ready to begin? Our Europe specialists are here to map your entire journey — 
              from country selection to visa approval and your first day on campus.
            </p>
            <Link to="/contact" className="eur-cta-button">
              Get Free Consultation
            </Link>

          </div>
        </div>
      </section> */}

    </div>
  );
}