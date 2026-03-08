import React from 'react';
import { Link } from 'react-router-dom';
import './TechnicalTalentAcquisition.css';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);

const PROBLEMS = [
  { title: "Scarcity of Qualified Talent",    desc: "The pool of genuinely skilled technical candidates is shrinking while demand surges. Generic job boards surface volume, not quality." },
  { title: "Slow, Costly Hiring Cycles",      desc: "Lengthy recruitment processes delay critical project starts, stretch teams thin, and compound costs with every week a role sits vacant." },
  { title: "Inaccurate Technical Screening",  desc: "Without specialist knowledge, distinguishing genuine technical ability from a polished CV is nearly impossible — and bad hires are expensive." },
  { title: "High Early-Stage Turnover",       desc: "Misaligned expectations and poor cultural fit drive costly early exits, damage team morale, and disrupt delivery timelines." },
  { title: "Recruitment Budget Waste",        desc: "Broad, untargeted spend on job boards and generic agencies without specialist focus delivers poor ROI on every hire." },
  { title: "Skills & Stack Mismatch",         desc: "A candidate who looks right on paper but lacks your specific stack or domain specialism is often worse than leaving the role unfilled." },
];

const SERVICES = [
  {
    title: "Executive & Leadership Search",
    desc: "Targeted direct search for CTOs, VPs of Engineering, Technical Directors and senior leaders who shape and drive technical strategy at scale.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
  },
  {
    title: "Technical Skills Assessment",
    desc: "Rigorous evaluation frameworks covering coding, system design, architecture thinking and domain expertise — so you meet only candidates who can genuinely do the job.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
  },
  {
    title: "Structured Interview Process",
    desc: "Competency-based and behavioural frameworks that assess technical ability, culture alignment and long-term potential — consistently and fairly across every candidate.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>),
  },
  {
    title: "Contract & Permanent Staffing",
    desc: "Flexible engagement models — from project-based contractors to permanent hires — aligned precisely to your headcount strategy, delivery timeline and budget.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>),
  },
  {
    title: "Market Intelligence & Benchmarking",
    desc: "Real-time salary data, talent availability analysis and competitor positioning so your offers attract top candidates rather than simply match the market.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>),
  },
  {
    title: "Vetting & Background Screening",
    desc: "Comprehensive verification including technical reference checks, employment history validation and background screening — confidence before every offer letter.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>),
  },
];

const STEPS = [
  { num: "01", title: "Discovery & Briefing",   desc: "We deep-dive into the role, your tech stack, team culture, and what a genuinely great hire looks like beyond the job description." },
  { num: "02", title: "Search & Sourcing",       desc: "Proactive outreach across specialist networks and passive candidate pools — reaching talent not actively visible on job boards." },
  { num: "03", title: "Assessment & Screening",  desc: "Every candidate is technically screened and referenced before you see them. No unvetted CVs, no wasted interview time." },
  { num: "04", title: "Offer & Onboarding",      desc: "We support negotiation, secure the close and ensure smooth onboarding — maximising retention from the very first day." },
];

const INDUSTRIES = [
  { label: "Tech Startups & Scaleups",  color: "emerald", icon: (<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>) },
  { label: "Finance & Fintech",         color: "teal",    icon: (<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>) },
  { label: "Healthcare Technology",     color: "slate",   icon: (<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>) },
  { label: "Software & SaaS",           color: "violet",  icon: (<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>) },
  { label: "Research & Deep Tech",      color: "amber",   icon: (<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>) },
  { label: "Enterprise & Consulting",   color: "steel",   icon: (<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>) },
];

const WHY_ITEMS = [
  {
    title: "Pre-Screened Candidates Only",
    desc: "We never send unvetted CVs. Every candidate is technically assessed, referenced and confirmed against your requirements before you see their profile.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4"/></svg>),
  },
  {
    title: "40% Faster Time-to-Hire",
    desc: "Established networks and a structured process consistently deliver quality shortlists faster than traditional recruitment — without cutting corners on candidate quality.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
  {
    title: "Deep Technical Expertise",
    desc: "Our consultants understand the technology — from frontend frameworks to cloud architecture — so we evaluate what actually matters, not just what's on a CV.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
  },
  {
    title: "Placement Guarantee",
    desc: "If a placed candidate leaves within the agreed guarantee period, we replace them at no additional cost. Your hiring investment is fully protected.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
  },
  {
    title: "Salary & Market Intelligence",
    desc: "Current benchmarking and competitor analysis so your offers are positioned to attract — not just meet — the top technical talent in your market.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
  },
];

const TechnicalTalentAcquisition = () => (
  <div className="ttal-page">

    {/* ══ 1. HERO ══ */}
    <section className="ttal-hero">
      <div className="ttal-hero-photo" />
      <div className="ttal-hero-overlay" />
      <div className="ttal-hero-inner">
        <div className="ttal-hero-tag">
          <span className="ttal-hero-tag-dot" />
          Technical Talent Acquisition
        </div>
        <h1 className="ttal-hero-title">
          Hire the Technical<br />
          Talent That <span>Moves</span><br />
          Your Business Forward
        </h1>
        <p className="ttal-hero-subtitle">
          Specialist recruitment for engineering, technology &amp; digital roles.
        </p>
        <p className="ttal-hero-desc">
          Flyintake connects ambitious organisations with exceptional technical professionals.
          From software engineers and architects to CTOs and engineering leaders — we identify,
          assess and place the people who genuinely elevate your team and accelerate your growth.
        </p>
        <div className="ttal-hero-actions">
          <Link to="/Contact-us" className="ttal-btn-emerald">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* ══ 2. OVERVIEW ══ */}
    <section className="ttal-overview">
      <div className="ttal-wrap">
        <div className="ttal-overview-grid">
          <div className="ttal-overview-image">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=90&cs=srgb"
              alt="Technical professionals collaborating"
            />
            <div className="ttal-overview-badge">Talent Acquisition</div>
            <div className="ttal-overview-accent" />
          </div>
          <div className="ttal-overview-content">
            <span className="ttal-eyebrow">What Is Technical Talent Acquisition?</span>
            <h2 className="ttal-section-title">The Right Hire Changes Everything</h2>
            <p className="ttal-section-body">
              Technical talent acquisition is more than filling a vacancy — it's a strategic discipline
              that directly impacts your team's capability, culture and commercial performance. The cost
              of a bad hire extends far beyond the salary: lost productivity, disrupted delivery and
              months of recovery time.
            </p>
            <p className="ttal-section-body" style={{ marginTop: "16px" }}>
              Flyintake combines deep technical assessment expertise with extensive specialist networks
              to deliver professionals who don't just meet the specification — they exceed it, integrate
              quickly and stay.
            </p>
            <div className="ttal-overview-pillars">
              {["Executive Search", "Skills Assessment", "Culture Alignment", "Speed to Hire"].map((label) => (
                <div className="ttal-pillar" key={label}><CheckIcon />{label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ══ 3. PROBLEMS ══ */}
    <section className="ttal-problems">
      <div className="ttal-wrap">
        <div className="ttal-problems-header">
          <span className="ttal-eyebrow">Challenges We Solve</span>
          <h2 className="ttal-section-title">Hiring Pain Points We Eliminate</h2>
          <p className="ttal-section-body">
            These are the most common technical hiring challenges our clients face before
            partnering with Flyintake — and the exact problems our process is built to solve.
          </p>
        </div>
        <div className="ttal-problems-grid">
          {PROBLEMS.map((p, i) => (
            <div className="ttal-problem-card" key={p.title}>
              <div className="ttal-problem-num">0{i + 1}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 4. SERVICES ══ */}
    <section className="ttal-services" id="ttal-services">
      <div className="ttal-wrap">
        <div className="ttal-services-header">
          <div>
            <span className="ttal-eyebrow">What We Offer</span>
            <h2 className="ttal-section-title">Our Talent Acquisition Services</h2>
          </div>
          <p className="ttal-section-body">
            A full-spectrum recruitment offering — from executive search to contract staffing —
            purpose-built for the unique demands and complexity of technical hiring.
          </p>
        </div>
        <div className="ttal-services-grid">
          {SERVICES.map((s) => (
            <div className="ttal-svc-card" key={s.title}>
              <div className="ttal-svc-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 5. PROCESS ══ */}
    <section className="ttal-process">
      <div className="ttal-wrap">
        <div className="ttal-process-header">
          <span className="ttal-eyebrow">Our Approach</span>
          <h2 className="ttal-section-title">How We Hire For You</h2>
          <p className="ttal-section-body">
            A structured, transparent process that keeps you in control at every stage —
            from the initial briefing through to your new hire's first day on the job.
          </p>
        </div>
        <div className="ttal-process-steps">
          {STEPS.map((s) => (
            <div className="ttal-process-step" key={s.num}>
              <div className="ttal-step-circle">
                <span className="ttal-step-num">{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 6. INDUSTRIES ══ */}
    <section className="ttal-industries">
      <div className="ttal-wrap">
        <div className="ttal-industries-header">
          <span className="ttal-eyebrow">Who We Work With</span>
          <h2 className="ttal-section-title">Industries We Serve</h2>
          <p className="ttal-section-body">
            We've delivered specialist technical recruitment across high-growth and regulated
            sectors, adapting our search methodology to the specific talent landscape of each.
          </p>
        </div>
        <div className="ttal-industries-mosaic">
          {INDUSTRIES.map((ind) => (
            <div key={ind.label} className={`ttal-ind-card ttal-ind-card--${ind.color}`}>
              <div className="ttal-ind-card-icon">{ind.icon}</div>
              <h3>{ind.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 7. WHY CHOOSE ══ */}
    <section className="ttal-why">
      <div className="ttal-wrap">
        <div className="ttal-why-header">
          <span className="ttal-eyebrow">Why Choose Us</span>
          <h2 className="ttal-section-title">Why Organisations Choose Flyintake</h2>
          <p className="ttal-section-body">
            In a market full of generalist recruiters, Flyintake brings genuine technical depth,
            rigorous screening and a track record of placements that last.
          </p>
        </div>
        <div className="ttal-why-cards-grid">
          {WHY_ITEMS.slice(0, 3).map((w) => (
            <div className="ttal-why-card" key={w.title}>
              <div className="ttal-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="ttal-why-cards-row2">
          {WHY_ITEMS.slice(3).map((w) => (
            <div className="ttal-why-card" key={w.title}>
              <div className="ttal-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default TechnicalTalentAcquisition;