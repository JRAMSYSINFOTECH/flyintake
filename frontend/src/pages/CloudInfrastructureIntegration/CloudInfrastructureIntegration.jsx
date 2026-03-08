import React from 'react';
import { Link } from 'react-router-dom';
import './CloudInfrastructureIntegration.css';

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
  { title: "Cloud Migration Risk",        desc: "Unplanned migrations introduce data loss, compatibility failures and costly downtime that disrupt operations and damage customer trust." },
  { title: "Runaway Cloud Costs",         desc: "Unoptimised resources, idle instances and over-provisioned services silently drain budgets — often unnoticed until the bill arrives." },
  { title: "Security & Compliance Gaps",  desc: "Multi-cloud and hybrid environments create complex attack surfaces and compliance blind spots that standard tooling can't cover alone." },
  { title: "Integration Complexity",      desc: "Connecting cloud platforms to legacy on-premises systems creates fragile data flows, inconsistent states and integration debt that compounds over time." },
  { title: "Performance Bottlenecks",     desc: "Misconfigured networking, poor region selection and inadequate caching create latency issues that degrade user experience and SLA adherence." },
  { title: "No Operational Visibility",   desc: "Without proper monitoring and observability, teams react to failures rather than preventing them — increasing mean time to recovery on every incident." },
];

const SERVICES = [
  {
    title: "Cloud Migration Strategy",
    desc: "Comprehensive migration planning across AWS, Azure and Google Cloud — phased execution with rollback provisions, zero data loss and minimal business disruption.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>),
  },
  {
    title: "Infrastructure Design & Architecture",
    desc: "Scalable, resilient cloud architecture designed around your performance, availability and cost requirements — before a single resource is provisioned.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>),
  },
  {
    title: "System & API Integration",
    desc: "Seamless connectivity between cloud services, SaaS platforms and on-premises systems — reliable data flows with event-driven architecture and API gateway design.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
  },
  {
    title: "Cloud Security & Compliance",
    desc: "Identity management, network segmentation, encryption, audit logging and compliance controls — security embedded at every layer of your cloud environment.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>),
  },
  {
    title: "Cost Optimisation & FinOps",
    desc: "Right-sizing, reserved instance planning, auto-scaling policies and spend visibility dashboards — eliminating waste and maximising ROI on every cloud pound spent.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>),
  },
  {
    title: "Hybrid Cloud Solutions",
    desc: "Flexible architectures that bridge on-premises infrastructure with cloud — giving you the control of private infrastructure and the elasticity of public cloud.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>),
  },
];

const STEPS = [
  { num: "01", title: "Assessment & Planning",    desc: "We audit your current infrastructure, map workloads, identify dependencies and build a prioritised cloud strategy roadmap." },
  { num: "02", title: "Architecture Design",      desc: "A secure, scalable target architecture is designed and validated against your performance, compliance and cost objectives before any migration begins." },
  { num: "03", title: "Migration & Integration",  desc: "Phased migration with continuous validation — cloud environments are stood up, workloads moved, and systems integrated with full rollback capability." },
  { num: "04", title: "Optimisation & Support",   desc: "Ongoing monitoring, cost governance, performance tuning and incident response — keeping your cloud estate healthy and cost-efficient." },
];

const INDUSTRIES = [
  { label: "Finance & Banking",     color: "orange",  icon: (<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>) },
  { label: "Healthcare & MedTech",  color: "blue",    icon: (<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>) },
  { label: "E-Commerce & Retail",   color: "teal",    icon: (<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>) },
  { label: "Manufacturing",         color: "slate",   icon: (<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>) },
  { label: "SaaS & Technology",     color: "violet",  icon: (<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>) },
  { label: "Government & Public",   color: "emerald", icon: (<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>) },
];

const WHY_ITEMS = [
  {
    title: "Multi-Cloud Certified Expertise",
    desc: "Certified engineers across AWS, Azure and Google Cloud — ensuring your architecture decisions are made by specialists who know each platform's strengths and limits.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/></svg>),
  },
  {
    title: "Zero-Downtime Migration",
    desc: "Phased migration methodology with live validation and instant rollback capability — business operations continue uninterrupted throughout every stage of transition.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
  },
  {
    title: "Security & Compliance First",
    desc: "Security controls, encryption and compliance frameworks are designed in from day one — not retrofitted after deployment when they're exponentially harder to implement.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
  },
  {
    title: "Measurable Cost Reduction",
    desc: "FinOps practices and architectural optimisation consistently reduce cloud spend — with real dashboards and accountability, not estimates on a slide.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
  },
  {
    title: "24/7 Monitoring & Support",
    desc: "Continuous observability across your cloud estate with proactive alerting, incident response and monthly optimisation reviews — not just reactive ticket management.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
];

const CloudInfrastructureIntegration = () => (
  <div className="cii-page">

    {/* ══ 1. HERO ══ */}
    <section className="cii-hero">
      <div className="cii-hero-photo" />
      <div className="cii-hero-overlay" />
      <div className="cii-hero-inner">
        <div className="cii-hero-tag">
          <span className="cii-hero-tag-dot" />
          Cloud Infrastructure & Integration
        </div>
        <h1 className="cii-hero-title">
          Cloud Infrastructure<br />
          That <span>Scales</span> With<br />
          Your Ambition
        </h1>
        <p className="cii-hero-subtitle">
          Migrate, integrate and optimise — on AWS, Azure and Google Cloud.
        </p>
        <p className="cii-hero-desc">
          Flyintake designs, migrates and manages cloud infrastructure built for performance,
          security and cost efficiency. From initial strategy through to ongoing optimisation,
          we ensure your cloud environment works as hard as your business demands.
        </p>
        <div className="cii-hero-actions">
          <Link to="/Contact-us" className="cii-btn-orange">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* ══ 2. OVERVIEW ══ */}
    <section className="cii-overview">
      <div className="cii-wrap">
        <div className="cii-overview-grid">
          <div className="cii-overview-image">
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=90&cs=srgb"
              alt="Cloud infrastructure data centre"
            />
            <div className="cii-overview-badge">Cloud & Integration</div>
            <div className="cii-overview-accent" />
          </div>
          <div className="cii-overview-content">
            <span className="cii-eyebrow">What We Do</span>
            <h2 className="cii-section-title">Cloud That Powers Your Business — Not Just Hosts It</h2>
            <p className="cii-section-body">
              Most businesses move to the cloud expecting cost savings and agility — and end up with
              higher bills, fragile integrations and the same operational headaches, just in someone
              else's data centre. The problem is rarely the cloud itself. It's the approach.
            </p>
            <p className="cii-section-body" style={{ marginTop: "16px" }}>
              Flyintake takes an architecture-first, security-embedded approach to cloud — designing
              environments that deliver genuine operational advantage, then managing and optimising
              them to ensure they stay cost-efficient and reliable as your needs evolve.
            </p>
            <div className="cii-overview-pillars">
              {["Multi-Cloud Strategy", "Zero-Downtime Migration", "Security by Design", "FinOps & Cost Control"].map((label) => (
                <div className="cii-pillar" key={label}><CheckIcon />{label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ══ 3. PROBLEMS ══ */}
    <section className="cii-problems">
      <div className="cii-wrap">
        <div className="cii-problems-header">
          <span className="cii-eyebrow">Challenges We Solve</span>
          <h2 className="cii-section-title">Cloud Challenges We Eliminate</h2>
          <p className="cii-section-body">
            These are the most common cloud and infrastructure problems organisations face —
            and the exact issues our approach is structured to prevent and resolve.
          </p>
        </div>
        <div className="cii-problems-grid">
          {PROBLEMS.map((p, i) => (
            <div className="cii-problem-card" key={p.title}>
              <div className="cii-problem-num">0{i + 1}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 4. SERVICES ══ */}
    <section className="cii-services" id="cii-services">
      <div className="cii-wrap">
        <div className="cii-services-header">
          <div>
            <span className="cii-eyebrow">What We Offer</span>
            <h2 className="cii-section-title">Our Cloud Services</h2>
          </div>
          <p className="cii-section-body">
            A complete cloud services offering — from migration strategy and architecture
            design to security, cost optimisation and hybrid integration.
          </p>
        </div>
        <div className="cii-services-grid">
          {SERVICES.map((s) => (
            <div className="cii-svc-card" key={s.title}>
              <div className="cii-svc-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 5. PROCESS ══ */}
    <section className="cii-process">
      <div className="cii-wrap">
        <div className="cii-process-header">
          <span className="cii-eyebrow">Our Approach</span>
          <h2 className="cii-section-title">How We Move You to the Cloud</h2>
          <p className="cii-section-body">
            A structured, risk-managed process that takes you from assessment through to
            a fully optimised cloud environment — with no disruption to your operations.
          </p>
        </div>
        <div className="cii-process-steps">
          {STEPS.map((s) => (
            <div className="cii-process-step" key={s.num}>
              <div className="cii-step-circle">
                <span className="cii-step-num">{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 6. INDUSTRIES ══ */}
    <section className="cii-industries">
      <div className="cii-wrap">
        <div className="cii-industries-header">
          <span className="cii-eyebrow">Who We Work With</span>
          <h2 className="cii-section-title">Industries We Serve</h2>
          <p className="cii-section-body">
            We deliver cloud infrastructure across regulated and high-demand sectors,
            tailoring architecture and compliance controls to each industry's specific requirements.
          </p>
        </div>
        <div className="cii-industries-mosaic">
          {INDUSTRIES.map((ind) => (
            <div key={ind.label} className={`cii-ind-card cii-ind-card--${ind.color}`}>
              <div className="cii-ind-card-icon">{ind.icon}</div>
              <h3>{ind.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 7. WHY CHOOSE ══ */}
    <section className="cii-why">
      <div className="cii-wrap">
        <div className="cii-why-header">
          <span className="cii-eyebrow">Why Choose Us</span>
          <h2 className="cii-section-title">Why Organisations Trust Flyintake With Their Cloud</h2>
          <p className="cii-section-body">
            In a market full of cloud generalists, Flyintake brings certified multi-cloud expertise,
            a security-first approach and a track record of migrations that complete on time and on budget.
          </p>
        </div>
        <div className="cii-why-cards-grid">
          {WHY_ITEMS.slice(0, 3).map((w) => (
            <div className="cii-why-card" key={w.title}>
              <div className="cii-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="cii-why-cards-row2">
          {WHY_ITEMS.slice(3).map((w) => (
            <div className="cii-why-card" key={w.title}>
              <div className="cii-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default CloudInfrastructureIntegration;