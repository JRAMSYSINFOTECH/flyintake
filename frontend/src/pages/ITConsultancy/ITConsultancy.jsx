import React from "react";
import "./ITConsultancy.css";
import { Link } from "react-router-dom";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg className="it-pillar-icon" viewBox="0 0 24 24" fill="none"
    stroke="#1B4F8C" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const PROBLEMS = [
  { title: "Outdated Systems", desc: "Legacy infrastructure slows daily operations, creates costly bottlenecks, and puts your business at a competitive disadvantage." },
  { title: "Poor Technology Planning", desc: "Ad-hoc IT decisions result in mismatched tools, wasted budgets, and fragmented systems that fail to grow with you." },
  { title: "Security Vulnerabilities", desc: "Unpatched software, weak access controls, and compliance gaps leave your organisation exposed to breaches and penalties." },
  { title: "High IT Costs", desc: "Bloated vendor contracts, redundant licences, and inefficient infrastructure quietly erode your margins every month." },
  { title: "Lack of Scalability", desc: "Systems built for yesterday's size cannot support tomorrow's growth — causing performance issues as demand increases." },
  { title: "No Clear Digital Strategy", desc: "Without a cohesive roadmap, technology investments become reactive rather than driving real competitive advantage." },
];

const SERVICES = [
  {
    title: "IT Strategy & Roadmap Development",
    desc: "Creating a clear, long-term technology plan aligned with your business goals and growth ambitions.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>),
  },
  {
    title: "Technology Assessment & Audit",
    desc: "Reviewing your existing systems to identify gaps, risks, and improvement areas with clear, actionable recommendations.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>),
  },
  {
    title: "Infrastructure Planning",
    desc: "Designing scalable IT environments — cloud, on-premise, or hybrid — built for performance, resilience, and future growth.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>),
  },
  {
    title: "Vendor & Software Selection",
    desc: "Helping you evaluate and choose the right tools, platforms, and partners that genuinely match your requirements.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>),
  },
  {
    title: "IT Cost Optimisation",
    desc: "Identifying and eliminating unnecessary technology expenses — improving your return on investment without cutting capability.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>),
  },
  {
    title: "Risk & Security Advisory",
    desc: "Expert guidance to strengthen your cybersecurity posture, ensure regulatory compliance, and protect your critical data.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
  },
];

const STEPS = [
  { num: "01", title: "Discovery & Consultation", desc: "We take time to understand your business goals, current challenges, and existing technology landscape in full." },
  { num: "02", title: "Analysis & Strategy", desc: "We evaluate gaps and opportunities, then craft a tailored IT roadmap built around your specific priorities." },
  { num: "03", title: "Implementation Support", desc: "Our consultants guide or actively assist in deploying recommended solutions with minimal disruption to your team." },
  { num: "04", title: "Ongoing Advisory", desc: "We remain engaged for continuous optimisation, performance reviews, and long-term strategic guidance." },
];

const WHY_ITEMS = [
  {
    title: "Experienced Consultants",
    desc: "Our team brings deep, real-world expertise across industries — not theoretical frameworks or generic advice.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>),
  },
  {
    title: "Practical, Business-Focused Solutions",
    desc: "We recommend what truly works for your context — not the latest trend or the most expensive option available.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>),
  },
  {
    title: "Scalable & Future-Ready Systems",
    desc: "Every solution we design is built to grow with your organisation and adapt seamlessly to tomorrow's demands.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
  },
  {
    title: "Transparent Communication",
    desc: "No jargon, no surprises. Clear updates, honest assessments, and full visibility at every stage.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>),
  },
  {
    title: "Ongoing Support",
    desc: "Our relationship does not end at delivery. We remain your trusted partner for continuous improvement and advisory.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
  },
];

export default function ITConsulting() {
  return (
    <div className="it-page">

      {/* 1. HERO */}
      <section className="it-hero" id="it-hero">
        <div className="it-hero-photo" />
        <div className="it-hero-overlay" />
        <div className="it-hero-inner">
          <div className="it-hero-tag">
            <span className="it-hero-tag-dot" />
            IT Consulting Services
          </div>
          <h1 className="it-hero-title">
            Strategic Technology<br />
            Solutions to Drive<br />
            <span>Business Growth</span>
          </h1>
          <p className="it-hero-subtitle">
            Align technology with your goals — securely, efficiently, and at scale.
          </p>
          <p className="it-hero-desc">
            At Flyintake, we provide expert IT consulting services to help businesses align
            technology with their goals. From strategy development to implementation, we ensure
            your systems are secure, scalable, and future-ready.
          </p>
          <div className="it-hero-actions">
            <Link to="/contact-us" className="it-btn-orange">
              Contact US 
              
            </Link>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="it-overview" id="it-overview">
        <div className="it-wrap">
          <div className="it-overview-grid">
            <div className="it-overview-image">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=90&cs=srgb"
                alt="IT consultants working on strategy"
              />
              <div className="it-overview-badge">IT Consulting</div>
              <div className="it-overview-accent" />
            </div>
            <div className="it-overview-content">
              <span className="it-eyebrow">What Is IT Consulting?</span>
              <h2 className="it-section-title">A Smarter Approach to Managing Technology</h2>
              <p className="it-section-body">
                IT consulting helps businesses plan, implement, and optimise their technology
                infrastructure to improve efficiency, security, and performance. Rather than
                reacting to problems as they arise, you gain a proactive partner who ensures
                your technology decisions are always aligned with your business direction.
              </p>
              <p className="it-section-body" style={{ marginTop: "16px" }}>
                Whether you are a growing startup or an established enterprise, the right IT
                strategy reduces unnecessary costs, eliminates operational risk, and frees your
                team to focus on what matters most — growing your business.
              </p>
              <div className="it-overview-pillars">
                {["Greater Efficiency", "Stronger Security", "Higher Performance", "Seamless Scalability"].map((label) => (
                  <div className="it-pillar" key={label}><CheckIcon />{label}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMS */}
      <section className="it-problems" id="it-problems">
        <div className="it-wrap">
          <div className="it-problems-header">
            <span className="it-eyebrow">Challenges We Solve</span>
            <h2 className="it-section-title">Problems We Help You Overcome</h2>
            <p className="it-section-body">
              We understand the real technology obstacles businesses face — and we have
              the expertise, experience, and process to fix them for good.
            </p>
          </div>
          <div className="it-problems-grid">
            {PROBLEMS.map((p, i) => (
              <div className="it-problem-card" key={p.title}>
                <div className="it-problem-num">0{i + 1}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES */}
      <section className="it-services" id="it-services">
        <div className="it-wrap">
          <div className="it-services-header">
            <div>
              <span className="it-eyebrow">What We Offer</span>
              <h2 className="it-section-title">Our IT Consulting Services</h2>
            </div>
            <p className="it-section-body">
              A comprehensive set of consulting services designed to address every dimension of
              your technology environment — from strategy through to security.
            </p>
          </div>
          <div className="it-services-grid">
            {SERVICES.map((s) => (
              <div className="it-svc-card" key={s.title}>
                <div className="it-svc-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="it-process" id="it-process">
        <div className="it-wrap">
          <div className="it-process-header">
            <span className="it-eyebrow">Our Approach</span>
            <h2 className="it-section-title">How We Work With You</h2>
            <p className="it-section-body">
              A transparent, structured process that keeps you informed and in control
              at every stage of the engagement.
            </p>
          </div>
          <div className="it-process-steps">
            {STEPS.map((s) => (
              <div className="it-process-step" key={s.num}>
                <div className="it-step-circle">
                  <span className="it-step-num">{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES */}
      <section className="it-industries" id="it-industries">
        <div className="it-wrap">
          <div className="it-industries-header">
            <span className="it-eyebrow">Who We Work With</span>
            <h2 className="it-section-title">Industries We Serve</h2>
            <p className="it-section-body">
              We have delivered IT consulting engagements across a wide range of sectors,
              adapting our expertise and approach to each organisation's unique context.
            </p>
          </div>

          <div className="it-industries-mosaic">

            {/* Blue — Startups */}
            <div className="it-ind-card it-ind-card--blue">
              <div className="it-ind-card-icon">
                <svg viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div className="it-ind-card-body">
                <h3>Startups</h3>
              </div>
            </div>

            {/* Teal — SMEs */}
            <div className="it-ind-card it-ind-card--teal">
              <div className="it-ind-card-icon">
                <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
              </div>
              <div className="it-ind-card-body">
                <h3>SMEs</h3>
              </div>
            </div>

            {/* Green — Education */}
            <div className="it-ind-card it-ind-card--green">
              <div className="it-ind-card-icon">
                <svg viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
              </div>
              <div className="it-ind-card-body">
                <h3>Education Providers</h3>
              </div>
            </div>

            {/* Orange — E-Commerce */}
            <div className="it-ind-card it-ind-card--orange">
              <div className="it-ind-card-icon">
                <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              </div>
              <div className="it-ind-card-body">
                <h3>E-Commerce Businesses</h3>
              </div>
            </div>

            {/* Violet — Professional Services */}
            <div className="it-ind-card it-ind-card--violet">
              <div className="it-ind-card-icon">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
              </div>
              <div className="it-ind-card-body">
                <h3>Professional Services Firms</h3>
              </div>
            </div>

            {/* Rose — Healthcare */}
            <div className="it-ind-card it-ind-card--rose">
              <div className="it-ind-card-icon">
                <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div className="it-ind-card-body">
                <h3>Healthcare Organisations</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE FLYINTAKE */}
      <section className="it-why" id="it-why">
        <div className="it-wrap">

          <div className="it-why-header">
            <span className="it-eyebrow">Why Choose Us</span>
            <h2 className="it-section-title">Why Choose Flyintake?</h2>
            <p className="it-section-body">
              In a market full of generic IT consultancies, Flyintake stands out through genuine
              expertise, honest communication, and an unwavering focus on solutions that
              actually work in the real world.
            </p>
          </div>

          {/* Row 1 — 3 cards */}
          <div className="it-why-cards-grid">
            {WHY_ITEMS.slice(0, 3).map((w) => (
              <div className="it-why-card" key={w.title}>
                <div className="it-why-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Row 2 — 2 cards centred */}
          <div className="it-why-cards-row2">
            {WHY_ITEMS.slice(3).map((w) => (
              <div className="it-why-card" key={w.title}>
                <div className="it-why-icon">{w.icon}</div>
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