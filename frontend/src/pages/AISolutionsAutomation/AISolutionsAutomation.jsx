import React from 'react';
import './AISolutionsAutomation.css';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const PROBLEMS = [
  {
    title: "Manual Processes",
    desc: "Repetitive tasks drain valuable employee time and introduce human error — resources that should be focused on high-value, strategic work.",
  },
  {
    title: "Data Overload",
    desc: "Massive volumes of unstructured data accumulate faster than teams can analyse them, leaving critical business signals buried and unused.",
  },
  {
    title: "Poor Decision Making",
    desc: "Decisions made on incomplete, stale or siloed information lead to missed opportunities, reactive strategy and poor business outcomes.",
  },
  {
    title: "Legacy System Integration",
    desc: "Connecting modern AI tooling to decades-old enterprise systems creates fragile pipelines, inconsistent data states and compounding technical debt.",
  },
  {
    title: "Lack of AI Expertise",
    desc: "Building and deploying production AI requires specialised skills most businesses don't have in-house — making quality implementation difficult and slow.",
  },
  {
    title: "Rising Operational Costs",
    desc: "Inefficient workflows and manual overhead inflate operational costs without corresponding gains in output, speed or quality.",
  },
];

const SERVICES = [
  {
    title: "Machine Learning Solutions",
    desc: "Predictive models and intelligent systems built on your data — learning continuously to improve forecasting, classification and business decision support.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
  {
    title: "Natural Language Processing",
    desc: "Enable systems to understand, interpret and generate human language — powering intelligent chatbots, sentiment analysis, document processing and more.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    title: "Robotic Process Automation",
    desc: "Deploy intelligent bots to handle repetitive business processes end-to-end — reducing error rates, cutting processing time and freeing your team for complex work.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
        <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    title: "Computer Vision",
    desc: "Systems that interpret visual information from images and video streams — enabling quality control, defect detection, document recognition and scene analysis.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    title: "Predictive Analytics",
    desc: "Forecast demand, customer behaviour and operational outcomes using advanced machine learning — turning historical data into forward-looking business intelligence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
  },
  {
    title: "Intelligent Process Mining",
    desc: "AI-powered analysis of your existing business processes — surfacing hidden bottlenecks, inefficiencies and automation opportunities you didn't know were there.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
];

const STEPS = [
  {
    num: "01",
    title: "Discovery & Assessment",
    desc: "We evaluate your current processes, data maturity and systems to identify the AI opportunities most aligned with your business goals and highest ROI potential.",
  },
  {
    num: "02",
    title: "Strategy & Planning",
    desc: "A comprehensive AI roadmap is developed with prioritised use cases, clear timelines, success metrics and expected return on investment before any build begins.",
  },
  {
    num: "03",
    title: "Development & Training",
    desc: "Models are built, validated and trained on your data while your team is prepared for adoption — ensuring solutions that perform in the real world, not just in testing.",
  },
  {
    num: "04",
    title: "Deployment & Optimisation",
    desc: "Solutions go live with full monitoring in place — continuously tracked, refined and optimised to ensure lasting performance and maximum business impact.",
  },
];

const INDUSTRIES = [
  {
    label: "Finance & Banking",
    color: "orange",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>),
  },
  {
    label: "Healthcare",
    color: "blue",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>),
  },
  {
    label: "Retail & E-Commerce",
    color: "teal",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>),
  },
  {
    label: "Manufacturing",
    color: "slate",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>),
  },
  {
    label: "Telecommunications",
    color: "violet",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
  },
  {
    label: "SaaS & Technology",
    color: "emerald",
    icon: (<svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>),
  },
];

const WHY_ITEMS = [
  {
    title: "Deep AI Expertise",
    desc: "Data scientists and AI engineers with enterprise-scale delivery track records — specialists who have built and deployed solutions in production environments, not just in research.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>),
  },
  {
    title: "Custom-Built Solutions",
    desc: "No off-the-shelf templates. Every AI implementation is designed from the ground up for your specific industry, data environment, processes and business objectives.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>),
  },
  {
    title: "Measurable ROI",
    desc: "Clear success metrics established before development begins — with transparent reporting and real numbers that demonstrate business impact, not vanity performance scores.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
  },
  {
    title: "Responsible AI",
    desc: "Ethical AI practices built into every solution — fairness, transparency, explainability and regulatory compliance are requirements, not afterthoughts.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>),
  },
  {
    title: "Ongoing Optimisation",
    desc: "Continuous model monitoring, performance tuning and enhancement cycles — ensuring your AI solutions keep improving as your data grows and your business evolves.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
];

const AISolutionsAutomation = () => (
  <div className="ais-page">

    {/* ══ 1. HERO ══ */}
    <section className="ais-hero">
      <div className="ais-hero-photo" />
      <div className="ais-hero-overlay" />
      <div className="ais-hero-inner">
        <div className="ais-hero-tag">
          <span className="ais-hero-tag-dot" />
          AI Solutions & Automation
        </div>
        <h1 className="ais-hero-title">
          AI That Works<br />
          As Hard As Your<br />
          <span>Business Demands</span>
        </h1>
        <p className="ais-hero-subtitle">
          Intelligent technology solutions that learn, adapt and deliver.
        </p>
        <p className="ais-hero-desc">
          Leverage artificial intelligence, machine learning and intelligent automation
          to transform your operations, sharpen decision-making, and unlock growth
          opportunities your competitors haven't found yet.
        </p>
        <div className="ais-hero-actions">
          <Link to="/Contact-us" className="ais-btn-orange">
            Contact Us
            </Link>
        </div>
      </div>
    </section>

    {/* ══ 2. OVERVIEW ══ */}
    <section className="ais-overview">
      <div className="ais-wrap">
        <div className="ais-overview-grid">
          <div className="ais-overview-image">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=90&cs=srgb"
              alt="AI and automation technology"
            />
            <div className="ais-overview-badge">AI & Automation</div>
            <div className="ais-overview-accent" />
          </div>
          <div className="ais-overview-content">
            <span className="ais-eyebrow">What We Do</span>
            <h2 className="ais-section-title">AI That Transforms How Your Business Operates</h2>
            <p className="ais-section-body">
              Most AI projects fail not because the technology doesn't work — but because they're
              built in isolation, disconnected from real business processes, and handed off without
              the infrastructure to sustain them. The problem isn't AI. It's the approach.
            </p>
            <p className="ais-section-body" style={{ marginTop: "16px" }}>
              We combine cutting-edge machine learning, NLP and intelligent process automation
              into production-ready systems — designed around your data, your workflows and your
              objectives, then continuously optimised to stay ahead.
            </p>
            <div className="ais-overview-pillars">
              {["Machine Learning", "Process Automation", "Predictive Analytics", "Responsible AI"].map((label) => (
                <div className="ais-pillar" key={label}>
                  <CheckIcon />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ══ 3. PROBLEMS ══ */}
    <section className="ais-problems">
      <div className="ais-wrap">
        <div className="ais-problems-header">
          <span className="ais-eyebrow">Challenges We Solve</span>
          <h2 className="ais-section-title">AI Challenges We Eliminate</h2>
          <p className="ais-section-body">
            These are the most common barriers businesses face when trying to unlock AI value —
            and exactly the problems our approach is structured to prevent and resolve.
          </p>
        </div>
        <div className="ais-problems-grid">
          {PROBLEMS.map((p, i) => (
            <div className="ais-problem-card" key={p.title}>
              <div className="ais-problem-num">0{i + 1}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 4. SERVICES ══ */}
    <section className="ais-services">
      <div className="ais-wrap">
        <div className="ais-services-header">
          <div>
            <span className="ais-eyebrow">What We Offer</span>
            <h2 className="ais-section-title">Our AI Services</h2>
          </div>
          <p className="ais-section-body">
            A complete AI and automation offering — from machine learning and NLP
            to robotic process automation, computer vision and predictive analytics.
          </p>
        </div>
        <div className="ais-services-grid">
          {SERVICES.map((s) => (
            <div className="ais-svc-card" key={s.title}>
              <div className="ais-svc-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 5. PROCESS ══ */}
    <section className="ais-process">
      <div className="ais-wrap">
        <div className="ais-process-header">
          <span className="ais-eyebrow">Our Approach</span>
          <h2 className="ais-section-title">How We Deliver AI That Lasts</h2>
          <p className="ais-section-body">
            A structured, outcome-focused process that takes you from initial assessment
            through to a fully deployed and optimised AI system — with no disruption to operations.
          </p>
        </div>
        <div className="ais-process-steps">
          {STEPS.map((s) => (
            <div className="ais-process-step" key={s.num}>
              <div className="ais-step-circle">
                <span className="ais-step-num">{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 6. INDUSTRIES ══ */}
    <section className="ais-industries">
      <div className="ais-wrap">
        <div className="ais-industries-header">
          <span className="ais-eyebrow">Who We Work With</span>
          <h2 className="ais-section-title">Industries We Serve</h2>
          <p className="ais-section-body">
            We deliver AI and automation solutions across high-demand sectors,
            tailoring models and integrations to each industry's data landscape and compliance requirements.
          </p>
        </div>
        <div className="ais-industries-mosaic">
          {INDUSTRIES.map((ind) => (
            <div key={ind.label} className={`ais-ind-card ais-ind-card--${ind.color}`}>
              <div className="ais-ind-card-icon">{ind.icon}</div>
              <h3>{ind.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 7. WHY CHOOSE ══ */}
    <section className="ais-why">
      <div className="ais-wrap">
        <div className="ais-why-header">
          <span className="ais-eyebrow">Why Choose Us</span>
          <h2 className="ais-section-title">Why Organisations Trust Us With Their AI</h2>
          <p className="ais-section-body">
            In a market full of AI hype, we focus on what matters — production-ready solutions,
            measurable outcomes and responsible implementation that holds up in the real world.
          </p>
        </div>
        <div className="ais-why-cards-grid">
          {WHY_ITEMS.slice(0, 3).map((w) => (
            <div className="ais-why-card" key={w.title}>
              <div className="ais-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="ais-why-cards-row2">
          {WHY_ITEMS.slice(3).map((w) => (
            <div className="ais-why-card" key={w.title}>
              <div className="ais-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default AISolutionsAutomation;