import React from 'react';
import { Link } from 'react-router-dom';
import './TechnicalSupportManagedServices.css';

/* ─── ICONS ─────────────────────────────────── */
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
);

/* ─── DATA ───────────────────────────────────── */
const PROBLEMS = [
  { title: "System Downtime",        desc: "Unplanned outages cripple operations and haemorrhage revenue — every minute of downtime has a real cost." },
  { title: "Overwhelmed IT Team",    desc: "A stretched internal team can't react fast enough, leading to a growing backlog of critical issues." },
  { title: "Unpredictable IT Costs", desc: "Reactive, break-fix IT creates financial unpredictability and budget-busting emergency callouts." },
  { title: "Security & Compliance",  desc: "Maintaining security standards and passing audits demands specialist knowledge most teams don't have." },
  { title: "Data Loss Risk",         desc: "Absence of a tested backup and disaster recovery strategy leaves your business exposed to catastrophic loss." },
  { title: "No IT Visibility",       desc: "Without monitoring and reporting, leadership has no insight into IT health or where improvements are needed." },
];

const SERVICES = [
  {
    title: "24/7 Helpdesk Support",
    desc: "Round-the-clock first and second-line support for all user issues and technical incidents — phone, email, and chat.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .98h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>),
  },
  {
    title: "Infrastructure Maintenance",
    desc: "Proactive maintenance of servers, networks, firewalls, and end-user devices — keeping everything patched and performant.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>),
  },
  {
    title: "Monitoring & Alerting",
    desc: "Continuous 24/7 monitoring of your entire IT estate with intelligent alerting to detect and resolve issues before impact.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
  },
  {
    title: "Backup & Disaster Recovery",
    desc: "Enterprise-grade backup strategies and tested recovery playbooks ensuring business continuity whatever happens.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>),
  },
  {
    title: "Security Management",
    desc: "Patch management, vulnerability scanning, endpoint protection, and security monitoring to keep threats out.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>),
  },
  {
    title: "Performance Optimisation",
    desc: "Systematic tuning of systems, applications, and networks to squeeze maximum performance from your infrastructure.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
  },
];

const STEPS = [
  { num: "01", title: "Discovery & Assessment", desc: "We evaluate your current infrastructure, support gaps, and service level requirements." },
  { num: "02", title: "Service Design",         desc: "A managed services plan is tailored to your size, risk profile, and business goals." },
  { num: "03", title: "Implementation",         desc: "Monitoring tools, support channels, and escalation paths are established end-to-end." },
  { num: "04", title: "24/7 Support & Optimise", desc: "Continuous support, monthly reporting, and ongoing service improvements." },
];

const INDUSTRIES = [
  { label: "Healthcare",          color: "teal",   icon: (<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>) },
  { label: "Finance & Banking",   color: "blue",   icon: (<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>) },
  { label: "Manufacturing",       color: "slate",  icon: (<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>) },
  { label: "Retail & E-Commerce", color: "violet", icon: (<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>) },
  { label: "Education",           color: "green",  icon: (<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>) },
  { label: "Technology",          color: "rose",   icon: (<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>) },
];

const WHY_ITEMS = [
  {
    title: "24/7 Availability",
    desc: "Our support never sleeps — we cover nights, weekends, and public holidays so your business is never without IT coverage.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
  {
    title: "Predictable Monthly Cost",
    desc: "Fixed monthly fees eliminate surprise bills from reactive incidents and make IT budgeting straightforward.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>),
  },
  {
    title: "Proactive by Design",
    desc: "We catch and fix issues before they become outages — our monitoring detects anomalies hours before users feel anything.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>),
  },
  {
    title: "Sub-15-Minute Response",
    desc: "Our SLA commits to under 15-minute acknowledgement for all critical P1 incidents — fast response when it matters most.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
  },
  {
    title: "Scales With Your Business",
    desc: "Our managed services grow with you — onboarding new staff, sites, or systems is handled seamlessly without disruption.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>),
  },
];

/* ─── COMPONENT ──────────────────────────────── */
const TechnicalSupportManagedServices = () => {
  return (
    <div className="tsms-page">

      {/* ══ 1. HERO ══ */}
      <section className="tsms-hero">
        <div className="tsms-hero-photo" />
        <div className="tsms-hero-overlay" />
        <div className="tsms-hero-inner">
          <div className="tsms-hero-tag">
            <span className="tsms-hero-tag-dot" />
            Managed IT Services
          </div>
          <h1 className="tsms-hero-title">
            Keep Your Systems<br />
            Running <span>24/7</span> —<br />
            Without the Stress
          </h1>
          <p className="tsms-hero-subtitle">
            Enterprise-grade IT support and infrastructure management, at every hour.
          </p>
          <p className="tsms-hero-desc">
            Flyintake provides comprehensive managed IT services — from round-the-clock helpdesk
            to proactive infrastructure monitoring, backup, security management, and performance
            optimisation. We keep your technology working so your team can focus on what matters.
          </p>
          <div className="tsms-hero-stats">
            <div className="tsms-hero-stat">
              <span className="tsms-hero-stat-num">&lt;15m</span>
              <span className="tsms-hero-stat-label">Critical Response</span>
            </div>
            <div className="tsms-hero-stat">
              <span className="tsms-hero-stat-num">99.9%</span>
              <span className="tsms-hero-stat-label">Uptime SLA</span>
            </div>
            <div className="tsms-hero-stat">
              <span className="tsms-hero-stat-num">24/7</span>
              <span className="tsms-hero-stat-label">Always On</span>
            </div>
          </div>
          <div className="tsms-hero-actions">
            <Link to="/Contact-us" className="tsms-btn-teal">
              Conatct Us 
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 2. OVERVIEW ══ */}
      <section className="tsms-overview">
        <div className="tsms-wrap">
          <div className="tsms-overview-grid">
            <div className="tsms-overview-image">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=900&q=90&cs=srgb"
                alt="IT support team at work"
              />
              <div className="tsms-overview-badge">Managed IT</div>
              <div className="tsms-overview-accent" />
            </div>
            <div className="tsms-overview-content">
              <span className="tsms-eyebrow">What Is Managed IT Services?</span>
              <h2 className="tsms-section-title">Your IT Department — Without the Overhead</h2>
              <p className="tsms-section-body">
                Managed IT services means outsourcing your IT operations to a dedicated team of
                experts who monitor, maintain, and support your infrastructure around the clock.
                Rather than reacting to problems, we prevent them — keeping your systems
                reliable, secure, and optimised.
              </p>
              <p className="tsms-section-body" style={{ marginTop: "16px" }}>
                Whether you have a small internal team or none at all, Flyintake becomes your
                trusted IT partner — handling everything from day-to-day helpdesk requests
                to strategic infrastructure planning.
              </p>
              <div className="tsms-overview-pillars">
                {["Proactive Monitoring", "Helpdesk Support", "Backup & Recovery", "Security Management"].map((label) => (
                  <div className="tsms-pillar" key={label}><CheckIcon />{label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 3. PROBLEMS ══ */}
      <section className="tsms-problems">
        <div className="tsms-wrap">
          <div className="tsms-problems-header">
            <span className="tsms-eyebrow">Challenges We Solve</span>
            <h2 className="tsms-section-title">Common IT Barriers We Eliminate</h2>
            <p className="tsms-section-body">
              We've helped hundreds of organisations overcome these exact challenges —
              and we have the processes, tools, and people to address them completely.
            </p>
          </div>
          <div className="tsms-problems-grid">
            {PROBLEMS.map((p, i) => (
              <div className="tsms-problem-card" key={p.title}>
                <div className="tsms-problem-num">0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. SERVICES ══ */}
      <section className="tsms-services" id="tsms-services">
        <div className="tsms-wrap">
          <div className="tsms-services-header">
            <div>
              <span className="tsms-eyebrow">What We Offer</span>
              <h2 className="tsms-section-title">Our Managed IT Services</h2>
            </div>
            <p className="tsms-section-body">
              A complete suite of managed IT services designed to keep your infrastructure
              stable, secure, and performing — from the helpdesk to the data centre.
            </p>
          </div>
          <div className="tsms-services-grid">
            {SERVICES.map((s) => (
              <div className="tsms-svc-card" key={s.title}>
                <div className="tsms-svc-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. PROCESS ══ */}
      <section className="tsms-process">
        <div className="tsms-wrap">
          <div className="tsms-process-header">
            <span className="tsms-eyebrow">Our Approach</span>
            <h2 className="tsms-section-title">How We Onboard You</h2>
            <p className="tsms-section-body">
              A structured onboarding process that gets you from assessment to fully supported
              in the shortest possible time — with no disruption to your operations.
            </p>
          </div>
          <div className="tsms-process-steps">
            {STEPS.map((s) => (
              <div className="tsms-process-step" key={s.num}>
                <div className="tsms-step-circle">
                  <span className="tsms-step-num">{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. INDUSTRIES ══ */}
      <section className="tsms-industries">
        <div className="tsms-wrap">
          <div className="tsms-industries-header">
            <span className="tsms-eyebrow">Who We Work With</span>
            <h2 className="tsms-section-title">Industries We Serve</h2>
            <p className="tsms-section-body">
              We deliver managed IT services across regulated and high-demand sectors,
              tailoring our support model to the specific uptime and compliance needs of each.
            </p>
          </div>
          <div className="tsms-industries-mosaic">
            {INDUSTRIES.map((ind) => (
              <div key={ind.label} className={`tsms-ind-card tsms-ind-card--${ind.color}`}>
                <div className="tsms-ind-card-icon">{ind.icon}</div>
                <h3>{ind.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. WHY CHOOSE ══ */}
      <section className="tsms-why">
        <div className="tsms-wrap">
          <div className="tsms-why-header">
            <span className="tsms-eyebrow">Why Choose Us</span>
            <h2 className="tsms-section-title">Why Organisations Choose Flyintake</h2>
            <p className="tsms-section-body">
              In a market full of generic IT providers, Flyintake delivers genuine expertise,
              transparent SLAs, and an unwavering commitment to keeping your business running.
            </p>
          </div>
          <div className="tsms-why-cards-grid">
            {WHY_ITEMS.slice(0, 3).map((w) => (
              <div className="tsms-why-card" key={w.title}>
                <div className="tsms-why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="tsms-why-cards-row2">
            {WHY_ITEMS.slice(3).map((w) => (
              <div className="tsms-why-card" key={w.title}>
                <div className="tsms-why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default TechnicalSupportManagedServices;