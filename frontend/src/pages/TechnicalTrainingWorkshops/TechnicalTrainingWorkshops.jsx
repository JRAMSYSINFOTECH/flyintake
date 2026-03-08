import React from 'react';
import { Link } from 'react-router-dom';
import './TechnicalTrainingWorkshops.css';

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
  { title: "Critical Skills Gaps",        desc: "Teams lack the technical depth needed to deliver on modern technology projects, slowing output and increasing risk." },
  { title: "Slow Technology Adoption",    desc: "New platforms and tools are adopted inconsistently, leading to underutilisation and costly workarounds across teams." },
  { title: "Engineer Retention Issues",   desc: "Top engineers leave for companies that invest in their development — lack of training signals a dead-end career path." },
  { title: "Generic Off-the-Shelf Courses", desc: "Standard training programmes don't align with your stack, your team's level, or your actual business challenges." },
  { title: "No Measurable Outcomes",      desc: "Training spend goes unvalidated — there's no way to confirm whether knowledge was actually transferred or applied." },
  { title: "Innovation Blocked",          desc: "Without hands-on expertise in emerging technologies, teams can't evaluate or implement the tools that drive competitive advantage." },
];

const SERVICES = [
  {
    title: "Cloud Architecture Bootcamp",
    desc: "Hands-on mastery of AWS, Azure or Google Cloud — architecture patterns, deployment pipelines, cost optimisation and production-grade design.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>),
  },
  {
    title: "AI & Machine Learning",
    desc: "From ML fundamentals to deep learning and LLMs — practical workshops that move teams from theory to production AI applications.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>),
  },
  {
    title: "Software Development",
    desc: "Modern languages, frameworks, design patterns and engineering best practices — training that improves code quality and delivery consistency.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
  },
  {
    title: "Cybersecurity & Compliance",
    desc: "Security awareness, secure coding practices, threat modelling and compliance frameworks — built for engineering and operations teams.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>),
  },
  {
    title: "Data Engineering & Analytics",
    desc: "Data pipelines, ETL architecture, warehousing and analytics platforms — turning raw data into reliable, queryable insight.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>),
  },
  {
    title: "DevOps & Infrastructure as Code",
    desc: "CI/CD pipelines, containers, Kubernetes, Terraform and infrastructure automation — training that accelerates delivery and reliability.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
  },
];

const STEPS = [
  { num: "01", title: "Needs Assessment",      desc: "We evaluate your team's current skill levels, identify gaps, and align on the technical outcomes that matter most to your business." },
  { num: "02", title: "Curriculum Design",     desc: "A bespoke training programme is designed around your tech stack, team size, learning pace and specific delivery goals." },
  { num: "03", title: "Delivery & Workshops",  desc: "Hands-on instruction with real-world projects, live labs and practical scenarios — not slides and theory." },
  { num: "04", title: "Assessment & Support",  desc: "Outcomes are validated with assessments, and teams receive ongoing access to materials, instructors and follow-up support." },
];

const INDUSTRIES = [
  { label: "Enterprise Organisations",  color: "violet",  icon: (<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>) },
  { label: "Tech & Software Companies", color: "blue",    icon: (<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>) },
  { label: "Finance & Banking",         color: "teal",    icon: (<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>) },
  { label: "Healthcare Technology",     color: "emerald", icon: (<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>) },
  { label: "Educational Institutions",  color: "amber",   icon: (<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>) },
  { label: "Government & Public Sector",color: "rose",    icon: (<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>) },
];

const WHY_ITEMS = [
  {
    title: "Expert Practitioners",
    desc: "Every instructor is an active industry professional — not just a trainer. Real-world experience means the knowledge you gain is immediately applicable.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
  },
  {
    title: "Fully Customised Programmes",
    desc: "No off-the-shelf courses. Every programme is built around your tech stack, team level and business objectives — relevant from day one.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>),
  },
  {
    title: "Hands-On Learning Only",
    desc: "Every session is built around practical labs, live projects and real scenarios — not passive slide decks. Teams leave with skills they've already used.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>),
  },
  {
    title: "Validated Outcomes",
    desc: "Assessments, certifications and progress tracking mean you can measure ROI on every training investment — and prove the skills were actually transferred.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
  },
  {
    title: "Lifetime Access & Support",
    desc: "Course materials, recordings and instructor access remain available long after the workshop ends — ensuring knowledge is retained and applied over time.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
];

const TechnicalTrainingWorkshops = () => (
  <div className="ttw-page">

    {/* ══ 1. HERO ══ */}
    <section className="ttw-hero">
      <div className="ttw-hero-photo" />
      <div className="ttw-hero-overlay" />
      <div className="ttw-hero-inner">
        <div className="ttw-hero-tag">
          <span className="ttw-hero-tag-dot" />
          Technical Training & Workshops
        </div>
        <h1 className="ttw-hero-title">
          Upskill Your Team With<br />
          <span>Expert-Led</span> Technical<br />
          Training
        </h1>
        <p className="ttw-hero-subtitle">
          Hands-on workshops that build real capability, fast.
        </p>
        <p className="ttw-hero-desc">
          Flyintake delivers bespoke technical training programmes across cloud, AI, software development,
          cybersecurity, data engineering and DevOps. Our expert practitioners combine real-world
          experience with intensive hands-on learning to close skill gaps and accelerate your team's growth.
        </p>
        <div className="ttw-hero-actions">
          <Link to="/Contact-us" className="ttw-btn-violet">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* ══ 2. OVERVIEW ══ */}
    <section className="ttw-overview">
      <div className="ttw-wrap">
        <div className="ttw-overview-grid">
          <div className="ttw-overview-image">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=90&cs=srgb"
              alt="Technical workshop in progress"
            />
            <div className="ttw-overview-badge">Technical Training</div>
            <div className="ttw-overview-accent" />
          </div>
          <div className="ttw-overview-content">
            <span className="ttw-eyebrow">What Is Technical Training?</span>
            <h2 className="ttw-section-title">Learning That Translates Into Output</h2>
            <p className="ttw-section-body">
              Technical training is the fastest path from a skills gap to a high-performing team.
              But generic courses rarely close the gap — they teach theory that doesn't map to
              your stack, your codebase or your real delivery challenges.
            </p>
            <p className="ttw-section-body" style={{ marginTop: "16px" }}>
              Flyintake designs and delivers fully bespoke programmes — from foundational concepts
              to advanced specialisations — with experienced practitioners who build your team's
              capability through doing, not watching.
            </p>
            <div className="ttw-overview-pillars">
              {["Bespoke Curriculum", "Practitioner Instructors", "Hands-On Labs", "Measurable Results"].map((label) => (
                <div className="ttw-pillar" key={label}><CheckIcon />{label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ══ 3. PROBLEMS ══ */}
    <section className="ttw-problems">
      <div className="ttw-wrap">
        <div className="ttw-problems-header">
          <span className="ttw-eyebrow">Challenges We Solve</span>
          <h2 className="ttw-section-title">Training Pain Points We Eliminate</h2>
          <p className="ttw-section-body">
            These are the most common training and development challenges organisations face —
            and the exact problems Flyintake's programmes are built to address.
          </p>
        </div>
        <div className="ttw-problems-grid">
          {PROBLEMS.map((p, i) => (
            <div className="ttw-problem-card" key={p.title}>
              <div className="ttw-problem-num">0{i + 1}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 4. SERVICES ══ */}
    <section className="ttw-services" id="ttw-services">
      <div className="ttw-wrap">
        <div className="ttw-services-header">
          <div>
            <span className="ttw-eyebrow">What We Offer</span>
            <h2 className="ttw-section-title">Our Training Programmes</h2>
          </div>
          <p className="ttw-section-body">
            Specialist workshops and bootcamps across the most in-demand technical disciplines —
            each fully customised to your team's level, stack and business goals.
          </p>
        </div>
        <div className="ttw-services-grid">
          {SERVICES.map((s) => (
            <div className="ttw-svc-card" key={s.title}>
              <div className="ttw-svc-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 5. PROCESS ══ */}
    <section className="ttw-process">
      <div className="ttw-wrap">
        <div className="ttw-process-header">
          <span className="ttw-eyebrow">Our Approach</span>
          <h2 className="ttw-section-title">How We Deliver Training</h2>
          <p className="ttw-section-body">
            A structured delivery process — from initial assessment through to post-training
            support — that ensures every programme drives genuine skill development.
          </p>
        </div>
        <div className="ttw-process-steps">
          {STEPS.map((s) => (
            <div className="ttw-process-step" key={s.num}>
              <div className="ttw-step-circle">
                <span className="ttw-step-num">{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 6. INDUSTRIES ══ */}
    <section className="ttw-industries">
      <div className="ttw-wrap">
        <div className="ttw-industries-header">
          <span className="ttw-eyebrow">Who We Work With</span>
          <h2 className="ttw-section-title">Industries We Serve</h2>
          <p className="ttw-section-body">
            We deliver technical training across sectors, adapting content and delivery
            to the specific compliance, pace and technology landscape of each.
          </p>
        </div>
        <div className="ttw-industries-mosaic">
          {INDUSTRIES.map((ind) => (
            <div key={ind.label} className={`ttw-ind-card ttw-ind-card--${ind.color}`}>
              <div className="ttw-ind-card-icon">{ind.icon}</div>
              <h3>{ind.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 7. WHY CHOOSE ══ */}
    <section className="ttw-why">
      <div className="ttw-wrap">
        <div className="ttw-why-header">
          <span className="ttw-eyebrow">Why Choose Us</span>
          <h2 className="ttw-section-title">Why Teams Train With Flyintake</h2>
          <p className="ttw-section-body">
            Unlike generic training providers, Flyintake delivers bespoke programmes led
            by active practitioners — with measurable outcomes and ongoing support built in.
          </p>
        </div>
        <div className="ttw-why-cards-grid">
          {WHY_ITEMS.slice(0, 3).map((w) => (
            <div className="ttw-why-card" key={w.title}>
              <div className="ttw-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="ttw-why-cards-row2">
          {WHY_ITEMS.slice(3).map((w) => (
            <div className="ttw-why-card" key={w.title}>
              <div className="ttw-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default TechnicalTrainingWorkshops;