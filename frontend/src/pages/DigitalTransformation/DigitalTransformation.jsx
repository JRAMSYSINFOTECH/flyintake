import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DigitalTransformation.css";

/* ─── ICONS ──────────────────────────────────────────────── */
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const IconCheck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/* ─── DATA ───────────────────────────────────────────────── */
const CHALLENGES = [
  { num: "01", title: "Legacy System Burden",       body: "Monolithic architectures and outdated stacks lock teams in perpetual maintenance cycles, killing innovation velocity." },
  { num: "02", title: "No Clear Digital Vision",    body: "Transformation without strategy breeds expensive failed initiatives and organisational fatigue." },
  { num: "03", title: "Change Resistance",          body: "Culture eats strategy for breakfast. Without structured change management, even perfect tech fails." },
  { num: "04", title: "Implementation Complexity",  body: "Coordinating large-scale initiatives across departments demands expertise most internal teams lack." },
  { num: "05", title: "Fragmented Data Silos",      body: "Disconnected systems leave leadership blind — unable to make the fast, informed decisions growth demands." },
  { num: "06", title: "Critical Skills Gap",        body: "Competing for digital talent is harder than ever; upskilling existing teams is often the smarter path." },
];

const SERVICES = [
  { tag: "Strategy",      title: "Digital Strategy & Roadmap",       desc: "We audit your current state, align stakeholders, and co-create a prioritised transformation roadmap tied directly to business outcomes.", accent: "#B45309" },
  { tag: "Modernisation", title: "Process & System Modernisation",    desc: "From legacy rewrites to API-first architectures — we redesign systems and workflows for speed, resilience, and scale.", accent: "#0369A1" },
  { tag: "People",        title: "Change Management & Culture",       desc: "Structured adoption frameworks, leadership alignment sessions, and culture-first programmes that make change stick.", accent: "#065F46" },
  { tag: "Technology",    title: "Digital Solution Deployment",       desc: "Cloud platforms, mobile experiences, and modern SaaS integrations — delivered on time, fully adopted, measurably impactful.", accent: "#6D28D9" },
  { tag: "Intelligence",  title: "Analytics & Business Intelligence", desc: "Instrument your new digital estate with dashboards, KPIs, and AI-assisted insights that guide every decision.", accent: "#B91C1C" },
  { tag: "Capability",    title: "Digital Workforce Enablement",      desc: "Bespoke training programmes and capability academies that turn your people into confident digital practitioners.", accent: "#0F766E" },
];

const STEPS = [
  { num: "01", title: "Discover & Assess",  desc: "Deep-dive into current state — tech, process, people, culture." },
  { num: "02", title: "Strategise & Plan",  desc: "Prioritised roadmap, business case, quick-win identification." },
  { num: "03", title: "Execute & Manage",   desc: "Agile delivery with embedded change management." },
  { num: "04", title: "Scale & Sustain",    desc: "Institutionalise improvements and build internal capability." },
];

const INDUSTRIES = [
  { label: "Finance & Banking",   icon: "◈" },
  { label: "Manufacturing",       icon: "◉" },
  { label: "Retail & E-commerce", icon: "◆" },
  { label: "Automotive",          icon: "◎" },
  { label: "Telecommunications",  icon: "◐" },
  { label: "Healthcare",          icon: "◑" },
];

const WHY = [
  { title: "Enterprise-Grade Experience",    desc: "Led transformations inside Fortune 500s and ambitious mid-market firms — no learning curve on our side." },
  { title: "Proven, Repeatable Frameworks",  desc: "Battle-tested methodologies across industries ensure predictable outcomes, not expensive experiments." },
  { title: "Embedded Change Experts",        desc: "Our change practitioners sit inside delivery teams — not on the sidelines issuing advice memos." },
  { title: "Rapid Value Delivery",           desc: "Early wins engineered within the first 90 days to build organisational momentum and confidence." },
  { title: "End-to-End Partnership",         desc: "From initial strategy through post-launch optimisation — we don't disappear after the slide deck." },
  { title: "Security & Compliance Built In", desc: "Every solution is designed with data security, access controls, and regulatory compliance from the start." },
];

/* ─── COMPONENT ─────────────────────────────────────────── */
export default function DigitalTransformation() {
  const [activeStep, setActiveStep] = useState(0);

  /* ── Fix for Samsung / Android viewport height bug ──
     Sets --dvh CSS variable = 1% of the true visible viewport height.
     Use: height: calc(var(--dvh, 1vh) * 100)  in CSS if dvh isn't supported.
     The resize listener handles address bar show/hide on scroll.          */
  useEffect(() => {
    const setVh = () => {
      const vh = window.visualViewport
        ? window.visualViewport.height * 0.01
        : window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--dvh", `${vh}px`);
    };

    setVh();

    // Use visualViewport API (more accurate on Samsung Internet / Chrome Android)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", setVh);
      window.visualViewport.addEventListener("scroll", setVh);
    } else {
      window.addEventListener("resize", setVh);
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", setVh);
        window.visualViewport.removeEventListener("scroll", setVh);
      } else {
        window.removeEventListener("resize", setVh);
      }
    };
  }, []);

  /* ── Auto-advance process steps ── */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dxt-page">

      {/* ══ HERO ══ */}
      <section className="dxt-hero">
        <div className="dxt-hero-bg" />
        <div className="dxt-hero-overlay" />
        <div className="dxt-hero-inner">
          <div className="dxt-hero-content">
            <div className="dxt-hero-pill">Digital Transformation</div>
            <h1 className="dxt-hero-headline">
              Reimagine Your Business<br />
              <span className="dxt-hero-accent">From the Core</span>
            </h1>
            <p className="dxt-hero-body">
              Flyintake guides ambitious organisations through full-spectrum digital transformation —
              strategy, modernisation, change management, and capability building — delivering
              measurable impact at every stage.
            </p>
            <div className="dxt-hero-ctas">
              <Link to="/Contact-us" className="dxt-btn-gold">
                Begin Your Transformation 
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OVERVIEW ══ */}
      <section className="dxt-overview">
        <div className="dxt-wrap">
          <div className="dxt-overview-grid">

            <div className="dxt-overview-visual">
              <div className="dxt-ov-card dxt-ov-card--large">
                <div className="dxt-ov-icon">⬡</div>
                <h3>End-to-End Delivery</h3>
                <p>From strategy slide to production deployment — one partner, zero handoff chaos.</p>
              </div>
              <div className="dxt-ov-card dxt-ov-card--small">
                <div className="dxt-ov-icon">◈</div>
                <h3>Human-Centred Change</h3>
                <p>Technology without adoption is waste. We make change stick.</p>
              </div>
              <div className="dxt-ov-card dxt-ov-card--accent">
                <div className="dxt-ov-num">3×</div>
                <div className="dxt-ov-card-label">Faster time-to-market post-transformation</div>
              </div>
            </div>

            <div className="dxt-overview-content">
              <span className="dxt-eyebrow">What Is Digital Transformation?</span>
              <h2 className="dxt-section-title">
                More Than Technology. A Complete Business Reinvention.
              </h2>
              <p className="dxt-section-body">
                Digital transformation is the deliberate, holistic reimagining of how an organisation
                operates, delivers value, and competes — powered by technology but driven by strategy,
                people, and culture.
              </p>
              <p className="dxt-section-body dxt-mt">
                Flyintake brings together the strategy, engineering, and change expertise to take you
                from fragmented legacy state to a modern, agile, data-empowered enterprise.
              </p>
              <div className="dxt-pillars">
                {["Strategy-Led", "People-First", "Agile Delivery", "Measurable ROI"].map((p) => (
                  <div className="dxt-pillar" key={p}>
                    <span className="dxt-pillar-check"><IconCheck /></span>{p}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ CHALLENGES ══ */}
      <section className="dxt-challenges">
        <div className="dxt-wrap">
          <div className="dxt-challenges-header">
            <span className="dxt-eyebrow">Challenges We Solve</span>
            <h2 className="dxt-section-title dxt-text-white">Common Barriers to Transformation</h2>
            <p className="dxt-section-body dxt-text-dim">
              We've seen every obstacle across hundreds of engagements. Here's what we help organisations overcome.
            </p>
          </div>
          <div className="dxt-challenges-grid">
            {CHALLENGES.map((c) => (
              <div className="dxt-challenge-card" key={c.num}>
                <div className="dxt-challenge-num">{c.num}</div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <div className="dxt-challenge-line" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="dxt-services" id="dxt-services">
        <div className="dxt-services-bg-stripe" />
        <div className="dxt-wrap">
          <div className="dxt-services-header">
            <span className="dxt-eyebrow">What We Offer</span>
            <h2 className="dxt-section-title">Our Transformation Services</h2>
            <p className="dxt-section-body">
              A full-spectrum suite covering every dimension of digital transformation — from vision to value.
            </p>
          </div>
          <div className="dxt-services-grid">
            {SERVICES.map((s, i) => (
              <div className="dxt-svc-card" key={i} style={{ "--dxt-accent": s.accent }}>
                <div className="dxt-svc-tag">{s.tag}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="dxt-svc-arrow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS ══ */}
      <section className="dxt-process">
        <div className="dxt-wrap">
          <div className="dxt-process-inner">

            <div className="dxt-process-left">
              <span className="dxt-eyebrow">Our Approach</span>
              <h2 className="dxt-section-title">How We Deliver Transformation</h2>
              <p className="dxt-section-body">
                A structured four-phase methodology refined across 120+ engagements, designed
                to minimise risk and maximise speed-to-value.
              </p>
              <div className="dxt-step-tabs">
                {STEPS.map((s, i) => (
                  <button
                    key={i}
                    className={`dxt-step-tab${activeStep === i ? " dxt-step-tab--active" : ""}`}
                    onClick={() => setActiveStep(i)}
                  >
                    <span className="dxt-step-tab-num">{s.num}</span>
                    <span className="dxt-step-tab-title">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="dxt-process-right">
              <div className="dxt-process-display">
                {STEPS.map((s, i) => (
                  <div key={i} className={`dxt-process-panel${activeStep === i ? " dxt-process-panel--visible" : ""}`}>
                    <div className="dxt-process-panel-num">{s.num}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <div className="dxt-process-progress">
                      <div className="dxt-process-bar" style={{ width: `${((i + 1) / STEPS.length) * 100}%` }} />
                    </div>
                    <div className="dxt-process-step-label">{i + 1} of {STEPS.length}</div>
                  </div>
                ))}
              </div>
              <div className="dxt-process-dots">
                {STEPS.map((_, i) => (
                  <button key={i} className={`dxt-process-dot${activeStep === i ? " dxt-process-dot--active" : ""}`} onClick={() => setActiveStep(i)} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ INDUSTRIES ══ */}
      <section className="dxt-industries">
        <div className="dxt-wrap">
          <div className="dxt-industries-header">
            <span className="dxt-eyebrow">Who We Work With</span>
            <h2 className="dxt-section-title dxt-text-white">Industries We Serve</h2>
          </div>
          <div className="dxt-industries-row">
            {INDUSTRIES.map((ind) => (
              <div className="dxt-ind-item" key={ind.label}>
                <span className="dxt-ind-icon">{ind.icon}</span>
                <span>{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══ */}
      <section className="dxt-why">
        <div className="dxt-wrap">
          <div className="dxt-why-top">
            <div className="dxt-why-top-left">
              <span className="dxt-eyebrow">Why Choose Us</span>
              <h2 className="dxt-section-title">Why Organisations Choose Flyintake</h2>
              <p className="dxt-section-body">
                We combine rare strategic depth with genuine implementation muscle —
                so your transformation gets done, adopted, and celebrated.
              </p>
            </div>
            
          </div>
          <div className="dxt-why-grid">
            {WHY.map((w, i) => (
              <div className="dxt-why-card" key={i}>
                <div className="dxt-why-card-num">{String(i + 1).padStart(2, "0")}</div>
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