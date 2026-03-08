import React from 'react';
import { Link } from 'react-router-dom';
import './WebsiteSoftwareDevelopment.css';

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
  { title: "Outdated Web Presence",      desc: "Legacy websites that fail to reflect your brand, don't convert visitors, and actively undermine trust with every page load." },
  { title: "Mobile Incompatibility",     desc: "Applications that break on mobile devices lose more than half your audience — and signal poor quality to every user who encounters them." },
  { title: "Slow Performance",           desc: "Every second of load time costs conversions. Poorly built software compounds this with errors, timeouts and frustrated users." },
  { title: "Security Vulnerabilities",   desc: "Weak architecture and outdated dependencies create exposure your business can't afford — from data breaches to regulatory penalties." },
  { title: "Scalability Bottlenecks",    desc: "Software built without growth in mind becomes a liability the moment demand spikes — constraining your business instead of enabling it." },
  { title: "Unmanageable Technical Debt", desc: "Accumulated shortcuts and legacy code make every feature slow to ship, every bug expensive to fix, and every developer reluctant to touch it." },
];

const SERVICES = [
  {
    title: "Web Application Development",
    desc: "Responsive, dynamic web applications built on modern frameworks — engineered for performance, accessibility and long-term maintainability.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>),
  },
  {
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android — built to engage users, perform reliably and drive measurable business results.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>),
  },
  {
    title: "Enterprise Software Solutions",
    desc: "Robust, scalable enterprise systems that streamline complex operations, integrate with existing infrastructure and support business-critical workflows.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>),
  },
  {
    title: "E-Commerce Platforms",
    desc: "High-converting online stores with secure payment processing, inventory management and seamless customer journeys — built to sell at scale.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>),
  },
  {
    title: "API Design & Development",
    desc: "RESTful and GraphQL APIs designed for reliability, security and performance — enabling clean integration between your systems and third-party services.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>),
  },
  {
    title: "Custom Software Solutions",
    desc: "Bespoke applications built precisely around your unique business requirements — no off-the-shelf compromises, no features you'll never use.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>),
  },
];

const STEPS = [
  { num: "01", title: "Discovery & Planning",       desc: "We map your business goals, user needs and technical requirements into a clear, prioritised development roadmap." },
  { num: "02", title: "Design & Architecture",      desc: "UX design and technical architecture are established together — ensuring scalability, performance and great user experience from the ground up." },
  { num: "03", title: "Development & Integration",  desc: "Agile delivery with regular builds, continuous testing and transparent progress — so you always know where your product stands." },
  { num: "04", title: "Testing & Deployment",       desc: "Rigorous QA across devices and environments, followed by a smooth deployment and ongoing performance monitoring." },
];

const INDUSTRIES = [
  { label: "E-Commerce & Retail",      color: "cyan",    icon: (<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>) },
  { label: "FinTech & Banking",        color: "blue",    icon: (<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>) },
  { label: "Healthcare & MedTech",     color: "teal",    icon: (<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>) },
  { label: "SaaS & Tech Startups",     color: "violet",  icon: (<svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>) },
  { label: "EdTech & Learning",        color: "amber",   icon: (<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>) },
  { label: "Enterprise & Professional",color: "emerald", icon: (<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>) },
];

const WHY_ITEMS = [
  {
    title: "Senior Engineers Only",
    desc: "Every project is delivered by senior developers with deep expertise across modern frameworks, languages and architectures — no juniors learning on your budget.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
  },
  {
    title: "Agile & Transparent",
    desc: "Regular sprint reviews, clear progress updates and direct access to your development team — you always know exactly what's been built and what's next.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
  },
  {
    title: "Security by Design",
    desc: "Security best practices, dependency management and vulnerability testing are built into every stage of development — not bolted on at the end.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>),
  },
  {
    title: "Built to Scale",
    desc: "Architecture decisions are made with growth in mind — so your software handles increased load, new features and changing business needs without a rebuild.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
  },
  {
    title: "Ongoing Support & Maintenance",
    desc: "Post-launch monitoring, updates, performance optimisation and feature development — a long-term development partner, not a project team that disappears on go-live.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>),
  },
];

const WebsiteSoftwareDevelopment = () => (
  <div className="wsd-page">

    {/* ══ 1. HERO ══ */}
    <section className="wsd-hero">
      <div className="wsd-hero-photo" />
      <div className="wsd-hero-overlay" />
      <div className="wsd-hero-inner">
        <div className="wsd-hero-tag">
          <span className="wsd-hero-tag-dot" />
          Website & Software Development
        </div>
        <h1 className="wsd-hero-title">
          Software That Works<br />
          as Hard as Your<br />
          <span>Business Does</span>
        </h1>
        <p className="wsd-hero-subtitle">
          From responsive websites to enterprise applications — built right, built to last.
        </p>
        <p className="wsd-hero-desc">
          Flyintake delivers scalable, secure and high-performance digital solutions — from
          customer-facing websites to complex enterprise systems. We combine modern architecture,
          clean code and rigorous testing to build software your business can rely on.
        </p>
        <div className="wsd-hero-actions">
          <Link to="/Contact-us" className="wsd-btn-cyan">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

    {/* ══ 2. OVERVIEW ══ */}
    <section className="wsd-overview">
      <div className="wsd-wrap">
        <div className="wsd-overview-grid">
          <div className="wsd-overview-image">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=90&cs=srgb"
              alt="Software development team at work"
            />
            <div className="wsd-overview-badge">Software Development</div>
            <div className="wsd-overview-accent" />
          </div>
          <div className="wsd-overview-content">
            <span className="wsd-eyebrow">What We Do</span>
            <h2 className="wsd-section-title">Software Built Around Your Business, Not Around Ours</h2>
            <p className="wsd-section-body">
              The difference between software that drives growth and software that holds you back
              comes down to how it was designed. Generic platforms and rushed builds accumulate
              debt, create friction and ultimately cost more to fix than they saved to build.
            </p>
            <p className="wsd-section-body" style={{ marginTop: "16px" }}>
              Flyintake takes a deliberate, architecture-first approach — understanding your business
              before writing a line of code, then delivering solutions that perform, scale and evolve
              with your needs.
            </p>
            <div className="wsd-overview-pillars">
              {["Clean Architecture", "Performance Focused", "Security First", "Fully Scalable"].map((label) => (
                <div className="wsd-pillar" key={label}><CheckIcon />{label}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ══ 3. PROBLEMS ══ */}
    <section className="wsd-problems">
      <div className="wsd-wrap">
        <div className="wsd-problems-header">
          <span className="wsd-eyebrow">Challenges We Solve</span>
          <h2 className="wsd-section-title">Development Problems We Eliminate</h2>
          <p className="wsd-section-body">
            These are the most common software challenges organisations bring to us — and
            the exact problems our development approach is designed to prevent and resolve.
          </p>
        </div>
        <div className="wsd-problems-grid">
          {PROBLEMS.map((p, i) => (
            <div className="wsd-problem-card" key={p.title}>
              <div className="wsd-problem-num">0{i + 1}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 4. SERVICES ══ */}
    <section className="wsd-services" id="wsd-services">
      <div className="wsd-wrap">
        <div className="wsd-services-header">
          <div>
            <span className="wsd-eyebrow">What We Build</span>
            <h2 className="wsd-section-title">Our Development Services</h2>
          </div>
          <p className="wsd-section-body">
            A full-spectrum development offering — from web and mobile applications to enterprise
            systems and custom software — built to your specification, not a template.
          </p>
        </div>
        <div className="wsd-services-grid">
          {SERVICES.map((s) => (
            <div className="wsd-svc-card" key={s.title}>
              <div className="wsd-svc-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 5. PROCESS ══ */}
    <section className="wsd-process">
      <div className="wsd-wrap">
        <div className="wsd-process-header">
          <span className="wsd-eyebrow">Our Approach</span>
          <h2 className="wsd-section-title">How We Build Your Software</h2>
          <p className="wsd-section-body">
            A structured, transparent development process — from discovery through to
            deployment and beyond — with no surprises and no hand-off and disappear.
          </p>
        </div>
        <div className="wsd-process-steps">
          {STEPS.map((s) => (
            <div className="wsd-process-step" key={s.num}>
              <div className="wsd-step-circle">
                <span className="wsd-step-num">{s.num}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 6. INDUSTRIES ══ */}
    <section className="wsd-industries">
      <div className="wsd-wrap">
        <div className="wsd-industries-header">
          <span className="wsd-eyebrow">Who We Work With</span>
          <h2 className="wsd-section-title">Industries We Serve</h2>
          <p className="wsd-section-body">
            We've delivered software across sectors with demanding performance, security and
            compliance requirements — adapting our approach to each industry's unique needs.
          </p>
        </div>
        <div className="wsd-industries-mosaic">
          {INDUSTRIES.map((ind) => (
            <div key={ind.label} className={`wsd-ind-card wsd-ind-card--${ind.color}`}>
              <div className="wsd-ind-card-icon">{ind.icon}</div>
              <h3>{ind.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ 7. WHY CHOOSE ══ */}
    <section className="wsd-why">
      <div className="wsd-wrap">
        <div className="wsd-why-header">
          <span className="wsd-eyebrow">Why Choose Us</span>
          <h2 className="wsd-section-title">Why Businesses Build With Flyintake</h2>
          <p className="wsd-section-body">
            In a market full of development agencies, Flyintake delivers genuine technical depth,
            transparent process and software that performs long after go-live.
          </p>
        </div>
        <div className="wsd-why-cards-grid">
          {WHY_ITEMS.slice(0, 3).map((w) => (
            <div className="wsd-why-card" key={w.title}>
              <div className="wsd-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
        <div className="wsd-why-cards-row2">
          {WHY_ITEMS.slice(3).map((w) => (
            <div className="wsd-why-card" key={w.title}>
              <div className="wsd-why-icon">{w.icon}</div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default WebsiteSoftwareDevelopment;