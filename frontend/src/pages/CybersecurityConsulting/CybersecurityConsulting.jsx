import React from "react";
import "./CybersecurityConsulting.css";
import { Link } from "react-router-dom";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg className="cy-pillar-icon" viewBox="0 0 24 24" fill="none"
    stroke="#1B4F8C" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const PROBLEMS = [
  { title: "Security Vulnerabilities", desc: "Unknown weaknesses across your systems and infrastructure leave your organisation exposed to targeted attacks and data breaches." },
  { title: "Ransomware & Malware", desc: "Sophisticated ransomware and malware threats continue to evolve, putting your critical business data and operations at serious risk." },
  { title: "Compliance Gaps", desc: "Failing to meet GDPR, ISO 27001, HIPAA, or PCI-DSS requirements can result in significant financial penalties and reputational damage." },
  { title: "No Incident Response Plan", desc: "Without a clear, tested response plan, a security breach can spiral into days of downtime and uncontrolled data exposure." },
  { title: "Employee Security Risk", desc: "Untrained staff are the most common entry point for attackers — phishing, social engineering, and weak passwords remain persistent threats." },
  { title: "Unsecured Cloud Infrastructure", desc: "Misconfigured cloud environments, weak access controls, and shadow IT create critical blind spots in your security posture." },
];

const SERVICES = [
  {
    title: "Security Assessment & Audit",
    desc: "A comprehensive review of your security posture — identifying vulnerabilities, misconfigurations, and gaps before attackers do.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>),
  },
  {
    title: "Penetration Testing",
    desc: "Simulated real-world attacks against your systems to uncover exploitable weaknesses before malicious actors find them first.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>),
  },
  {
    title: "Incident Response Planning",
    desc: "Develop, document, and test a clear incident response playbook so your team can act fast and minimise damage when a breach occurs.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
  },
  {
    title: "Compliance & Governance",
    desc: "Expert guidance to achieve and maintain compliance with GDPR, ISO 27001, HIPAA, PCI-DSS, and other regulatory frameworks.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4" /></svg>),
  },
  {
    title: "Cloud Security Solutions",
    desc: "Securing your cloud environments — reviewing configurations, enforcing least-privilege access, and protecting data across platforms.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" /></svg>),
  },
  {
    title: "Security Awareness Training",
    desc: "Building a security-first culture through targeted staff training, phishing simulations, and ongoing awareness programmes.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
  },
];

const STEPS = [
  { num: "01", title: "Discovery & Assessment", desc: "We evaluate your current security posture, identify risks, and map your entire threat surface in detail." },
  { num: "02", title: "Testing & Validation", desc: "We conduct penetration tests and vulnerability assessments to validate real-world exploitability." },
  { num: "03", title: "Security Roadmap", desc: "We build a prioritised security plan and incident response procedures tailored to your organisation." },
  { num: "04", title: "Implementation & Training", desc: "We deploy solutions, train your staff, and remain engaged for ongoing monitoring and advisory." },
];

const WHY_ITEMS = [
  {
    title: "Certified Security Experts",
    desc: "Our consultants hold CISSP, CEH, and OSCP certifications — bringing proven, real-world expertise to every engagement.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
  },
  {
    title: "Proactive Threat Approach",
    desc: "We identify and eliminate vulnerabilities before attackers can exploit them — keeping you ahead of evolving threats.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>),
  },
  {
    title: "Deep Compliance Knowledge",
    desc: "We help you achieve and sustain compliance across GDPR, ISO 27001, HIPAA, and PCI-DSS with minimal disruption.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-6 9l2 2 4-4"/></svg>),
  },
  {
    title: "Continuous Monitoring Support",
    desc: "Our relationship doesn't end at delivery. We provide ongoing threat detection, monitoring, and advisory services.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
  },
  {
    title: "Trusted Partner Model",
    desc: "We work alongside your internal team as embedded security advisors — not just consultants who disappear after a report.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>),
  },
];

const INDUSTRIES = [
  { label: "Finance & Banking", color: "blue", icon: (<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>) },
  { label: "Healthcare", color: "teal", icon: (<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>) },
  { label: "Technology", color: "green", icon: (<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>) },
  { label: "Retail & E-Commerce", color: "orange", icon: (<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>) },
  { label: "Government", color: "violet", icon: (<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>) },
];

export default function CybersecurityConsulting() {
  return (
    <div className="cy-page">

      {/* 1. HERO */}
      <section className="cy-hero" id="cy-hero">
        <div className="cy-hero-photo" />
        <div className="cy-hero-overlay" />
        <div className="cy-hero-inner">
          <div className="cy-hero-tag">
            <span className="cy-hero-tag-dot" />
            Cybersecurity Consulting
          </div>
          <h1 className="cy-hero-title">
            Protect Your Business<br />
            from Evolving<br />
            <span>Cyber Threats</span>
          </h1>
          <p className="cy-hero-subtitle">
            Identify vulnerabilities, respond to incidents, and build a resilient security posture.
          </p>
          <p className="cy-hero-desc">
            At Flyintake, we provide comprehensive cybersecurity consulting to protect your
            organisation from modern threats. From risk assessments to penetration testing
            and compliance, we build security programmes that are robust, scalable, and future-ready.
          </p>
          <div className="cy-hero-actions">
            <Link to="/contact-us" className="cy-btn-orange">
                Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="cy-overview" id="cy-overview">
        <div className="cy-wrap">
          <div className="cy-overview-grid">
            <div className="cy-overview-image">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=90&cs=srgb"
                alt="Cybersecurity professionals at work"
              />
              <div className="cy-overview-badge">Cybersecurity</div>
              <div className="cy-overview-accent" />
            </div>
            <div className="cy-overview-content">
              <span className="cy-eyebrow">What Is Cybersecurity Consulting?</span>
              <h2 className="cy-section-title">A Proactive Defence for Your Organisation</h2>
              <p className="cy-section-body">
                Cybersecurity consulting involves assessing your risk exposure, designing protective
                controls, responding to incidents, and ensuring your organisation meets regulatory
                requirements. Rather than waiting for a breach, you gain a proactive partner who
                continuously strengthens your defences.
              </p>
              <p className="cy-section-body" style={{ marginTop: "16px" }}>
                Whether you are a growing business or an established enterprise, the right security
                strategy reduces your attack surface, builds stakeholder trust, and ensures your
                operations remain protected against today's and tomorrow's threats.
              </p>
              <div className="cy-overview-pillars">
                {["Threat Detection", "Incident Response", "Regulatory Compliance", "Continuous Monitoring"].map((label) => (
                  <div className="cy-pillar" key={label}><CheckIcon />{label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMS */}
      <section className="cy-problems" id="cy-problems">
        <div className="cy-wrap">
          <div className="cy-problems-header">
            <span className="cy-eyebrow">Challenges We Solve</span>
            <h2 className="cy-section-title">Problems We Help You Overcome</h2>
            <p className="cy-section-body">
              We understand the real security threats organisations face — and we have
              the expertise, tools, and process to address them comprehensively.
            </p>
          </div>
          <div className="cy-problems-grid">
            {PROBLEMS.map((p, i) => (
              <div className="cy-problem-card" key={p.title}>
                <div className="cy-problem-num">0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="cy-services" id="cy-services">
        <div className="cy-wrap">
          <div className="cy-services-header">
            <div>
              <span className="cy-eyebrow">What We Offer</span>
              <h2 className="cy-section-title">Our Cybersecurity Services</h2>
            </div>
            <p className="cy-section-body">
              A comprehensive suite of security consulting services — covering every dimension
              of your organisation's threat landscape, from assessment through to training.
            </p>
          </div>
          <div className="cy-services-grid">
            {SERVICES.map((s) => (
              <div className="cy-svc-card" key={s.title}>
                <div className="cy-svc-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="cy-process" id="cy-process">
        <div className="cy-wrap">
          <div className="cy-process-header">
            <span className="cy-eyebrow">Our Approach</span>
            <h2 className="cy-section-title">How We Work With You</h2>
            <p className="cy-section-body">
              A structured, transparent engagement process that keeps you informed and
              in control at every stage.
            </p>
          </div>
          <div className="cy-process-steps">
            {STEPS.map((s) => (
              <div className="cy-process-step" key={s.num}>
                <div className="cy-step-circle">
                  <span className="cy-step-num">{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES */}
      <section className="cy-industries" id="cy-industries">
        <div className="cy-wrap">
          <div className="cy-industries-header">
            <span className="cy-eyebrow">Who We Work With</span>
            <h2 className="cy-section-title">Industries We Serve</h2>
            <p className="cy-section-body">
              We have delivered cybersecurity engagements across highly regulated and
              high-risk sectors, adapting our approach to each organisation's unique context.
            </p>
          </div>
          <div className="cy-industries-mosaic">
            {INDUSTRIES.map((ind) => (
              <div key={ind.label} className={`cy-ind-card cy-ind-card--${ind.color}`}>
                <div className="cy-ind-card-icon">{ind.icon}</div>
                <div className="cy-ind-card-body">
                  <h3>{ind.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE */}
      <section className="cy-why" id="cy-why">
        <div className="cy-wrap">
          <div className="cy-why-header">
            <span className="cy-eyebrow">Why Choose Us</span>
            <h2 className="cy-section-title">Why Choose Flyintake?</h2>
            <p className="cy-section-body">
              In a market full of generic security providers, Flyintake delivers genuine expertise,
              clear communication, and an unwavering focus on solutions that actually protect
              your business in the real world.
            </p>
          </div>

          <div className="cy-why-cards-grid">
            {WHY_ITEMS.slice(0, 3).map((w) => (
              <div className="cy-why-card" key={w.title}>
                <div className="cy-why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="cy-why-cards-row2">
            {WHY_ITEMS.slice(3).map((w) => (
              <div className="cy-why-card" key={w.title}>
                <div className="cy-why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}