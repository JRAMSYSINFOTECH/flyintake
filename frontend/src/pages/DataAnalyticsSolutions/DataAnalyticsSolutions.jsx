import React from "react";
import "./DataAnalyticsSolutions.css";
import { Link } from "react-router-dom";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg className="da-pillar-icon" viewBox="0 0 24 24" fill="none"
    stroke="#1B4F8C" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const TICKER_ITEMS = [
  "Data Warehousing", "Business Intelligence", "Predictive Analytics",
  "ETL Pipelines", "Power BI & Tableau", "Machine Learning",
  "Real-Time Dashboards", "Data Governance", "Cloud Analytics",
  "Statistical Modelling", "Data Quality", "AI-Driven Insights",
];

const STATS = [
  {
    value: "3", suffix: "×",
    label: "Faster decision-making with real-time dashboards",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
  {
    value: "40", suffix: "%",
    label: "Average reduction in manual reporting overhead",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>),
  },
  {
    value: "99", suffix: "%",
    label: "Data accuracy after governance implementation",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>),
  },
  {
    value: "5", suffix: "×",
    label: "Average ROI delivered on analytics projects",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>),
  },
];

const PROBLEMS = [
  { title: "Fragmented Data Silos", desc: "Data scattered across disconnected systems gives you no unified view, slowing decisions and hiding opportunities." },
  { title: "Poor Data Quality", desc: "Incomplete or inaccurate data erodes confidence in reporting and leads to costly business decisions." },
  { title: "Limited Business Intelligence", desc: "Without the right tools, understanding what's truly driving performance remains guesswork." },
  { title: "Slow Data Processing", desc: "Outdated pipelines can't handle large volumes — meaning insights arrive too late to matter." },
  { title: "No Predictive Capability", desc: "Relying only on historical data leaves you reactive. You can't anticipate trends or customer behaviour." },
  { title: "Manual Reporting Delays", desc: "Time-consuming manual reporting wastes resource and delays critical business information." },
];

const SERVICES = [
  {
    title: "Data Warehouse Solutions",
    desc: "Design scalable warehouses that consolidate data from across your organisation into a single trusted source of truth.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>),
  },
  {
    title: "Business Intelligence & BI Tools",
    desc: "Implement Power BI, Tableau, or Looker dashboards that turn raw data into clear, actionable visual insights.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>),
  },
  {
    title: "Data Analysis & Statistical Modelling",
    desc: "Deep-dive analysis to uncover patterns, correlations, and hidden insights within your data assets.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
  },
  {
    title: "Predictive Analytics & AI",
    desc: "Build machine learning models that forecast demand, predict churn, and surface opportunities before they appear.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 100 20"/><path d="M12 6v6l4 2"/><path d="M22 2l-3 3m0 0l-3-3m3 3V2"/></svg>),
  },
  {
    title: "ETL & Data Integration",
    desc: "Build robust pipelines to extract, transform, and load data from multiple systems — clean, consistent, reliable.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>),
  },
  {
    title: "Data Quality & Governance",
    desc: "Establish standards, validation rules, and governance frameworks that keep your data accurate and compliant.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>),
  },
];

const STEPS = [
  { num: "01", title: "Discovery & Strategy", desc: "Map your data landscape, understand your business goals, and define a clear analytics roadmap." },
  { num: "02", title: "Architecture Design", desc: "Design pipelines, warehouse schema, and BI layer for performance and long-term scalability." },
  { num: "03", title: "Build & Deploy", desc: "Build and launch your analytics platform — from ETL pipelines to dashboards and predictive models." },
  { num: "04", title: "Train & Optimise", desc: "Train your teams, monitor platform performance, and continuously refine for better outcomes." },
];

const INDUSTRIES = [
  { label: "Retail & E-Commerce",  color: "blue",   icon: (<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>) },
  { label: "Finance & Banking",    color: "teal",   icon: (<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>) },
  { label: "Healthcare",           color: "green",  icon: (<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>) },
  { label: "Manufacturing",        color: "orange", icon: (<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>) },
  { label: "Technology & SaaS",    color: "violet", icon: (<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>) },
];

const WHY_ITEMS = [
  {
    title: "Data-Driven Strategy Experts",
    desc: "We don't just build dashboards — we help you define the right questions and build systems to answer them with confidence.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>),
  },
  {
    title: "Multi-Platform Expertise",
    desc: "Hands-on experience across Power BI, Tableau, Looker, Snowflake, BigQuery, dbt, and all major cloud data platforms.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>),
  },
  {
    title: "Rapid Time to Insight",
    desc: "Our structured methodology gets you from raw data to actionable dashboards significantly faster than traditional implementations.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
  },
  {
    title: "Security & Compliance Built In",
    desc: "Every solution is designed with data security, access controls, and regulatory compliance embedded from the very start.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
  },
  {
    title: "Clear, Measurable ROI",
    desc: "We measure and demonstrate the business impact of every analytics investment — ensuring tangible, visible returns.",
    icon: (<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>),
  },
];

export default function DataAnalyticsSolutions() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="da-page">

      {/* 1. HERO — DIAGONAL SPLIT */}
      <section className="da-hero" id="da-hero">
        <div className="da-hero-left">
          <div className="da-hero-tag">
            <span className="da-hero-tag-dot" />
            Data Analytics Solutions
          </div>
          <h1 className="da-hero-title">
            Transform Data<br />
            into <span>Actionable</span><br />
            Business Insights
          </h1>
          <p className="da-hero-desc">
            At Flyintake, we help organisations unlock the full value of their data through
            advanced analytics, business intelligence, and predictive modelling — turning
            fragmented data into a strategic competitive asset.
          </p>
          <div className="da-hero-actions">
            <Link to="/Contact-us" className="da-btn-orange">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="da-hero-right">
          <div className="da-hero-photo" />
          <div className="da-hero-photo-overlay" />
          <div className="da-hero-chips">
            <div className="da-hero-chip">
              <div className="da-hero-chip-val">3×</div>
              <div className="da-hero-chip-label">Faster<br />decision-making</div>
            </div>
            <div className="da-hero-chip">
              <div className="da-hero-chip-val">5×</div>
              <div className="da-hero-chip-label">Average<br />ROI delivered</div>
            </div>
            <div className="da-hero-chip">
              <div className="da-hero-chip-val">99%</div>
              <div className="da-hero-chip-label">Data accuracy<br />after governance</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TICKER BAND */}
      <div className="da-ticker">
        <div className="da-ticker-track">
          {doubled.map((item, i) => (
            <span className="da-ticker-item" key={i}>
              {item}
              <span className="da-ticker-sep">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3. OVERVIEW — TWO-TONE */}
      <section className="da-overview" id="da-overview">
        <div className="da-overview-bg" />
        <div className="da-wrap">
          <div className="da-overview-grid">
            <div className="da-overview-content">
              <span className="da-eyebrow">What Is Data Analytics?</span>
              <h2 className="da-section-title">Make Every Decision Backed by Data</h2>
              <p className="da-section-body">
                Data analytics is the process of collecting, processing, and interpreting data
                to extract meaningful insights that drive smarter business decisions. Rather than
                operating on assumptions, you gain a clear, evidence-based picture of your business
                at every level.
              </p>
              <p className="da-section-body" style={{ marginTop: "16px" }}>
                From building your first data warehouse to deploying predictive AI models, Flyintake
                provides end-to-end analytics services that scale with your ambitions and deliver
                measurable impact from day one.
              </p>
              <div className="da-overview-pillars">
                {["Unified Data View", "Real-Time Insights", "Predictive Modelling", "Automated Reporting"].map((label) => (
                  <div className="da-pillar" key={label}><CheckIcon />{label}</div>
                ))}
              </div>
            </div>
            <div className="da-stat-grid">
              {STATS.map((s) => (
                <div className="da-stat-card" key={s.label}>
                  <div className="da-stat-card-icon">{s.icon}</div>
                  <div className="da-stat-card-value">
                    {s.value}<em>{s.suffix}</em>
                  </div>
                  <div className="da-stat-card-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROBLEMS — TABLE LIST */}
      <section className="da-problems" id="da-problems">
        <div className="da-problems-glow" />
        <div className="da-problems-glow2" />
        <div className="da-wrap">
          <div className="da-problems-header">
            <span className="da-eyebrow">Challenges We Solve</span>
            <h2 className="da-section-title">Problems We Help You Overcome</h2>
            <p className="da-section-body">
              We understand the data challenges organisations face at every growth stage —
              and we have the expertise and process to resolve them for good.
            </p>
          </div>
          <div className="da-problems-list">
            {PROBLEMS.map((p, i) => (
              <div className="da-prob-item" key={p.title}>
                <div className="da-prob-num">0{i + 1}</div>
                <div className="da-prob-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES — STAGGERED GRID */}
      <section className="da-services" id="da-services">
        <div className="da-wrap">
          <div className="da-services-header">
            <span className="da-eyebrow">What We Offer</span>
            <h2 className="da-section-title">Our Data Analytics Services</h2>
            <p className="da-section-body">
              A comprehensive suite of data services — covering every layer of your analytics
              stack, from data engineering through to AI-powered insights.
            </p>
          </div>
          <div className="da-services-grid">
            {SERVICES.map((s) => (
              <div className="da-svc-card" key={s.title}>
                <div className="da-svc-icon-wrap">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section className="da-process" id="da-process">
        <div className="da-wrap">
          <div className="da-process-header">
            <span className="da-eyebrow">Our Approach</span>
            <h2 className="da-section-title">How We Work With You</h2>
            <p className="da-section-body">
              A structured engagement that delivers results at every stage — from strategy
              through to live, continuously optimised analytics.
            </p>
          </div>
          <div className="da-process-steps">
            {STEPS.map((s) => (
              <div className="da-process-step" key={s.num}>
                <div className="da-step-circle">
                  <span className="da-step-num">{s.num}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES — DARK */}
      <section className="da-industries" id="da-industries">
        <div className="da-wrap">
          <div className="da-industries-header">
            <span className="da-eyebrow">Who We Work With</span>
            <h2 className="da-section-title">Industries We Serve</h2>
            <p className="da-section-body">
              We have delivered data analytics solutions across data-intensive sectors,
              adapting our approach to each organisation's unique needs and goals.
            </p>
          </div>
          <div className="da-industries-mosaic">
            {INDUSTRIES.map((ind) => (
              <div key={ind.label} className={`da-ind-card da-ind-card--${ind.color}`}>
                <div className="da-ind-card-icon">{ind.icon}</div>
                <div className="da-ind-card-body"><h3>{ind.label}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY — HORIZONTAL ROWS */}
      <section className="da-why" id="da-why">
        <div className="da-wrap">
          <div className="da-why-header">
            <span className="da-eyebrow">Why Choose Us</span>
            <h2 className="da-section-title">Why Choose Flyintake?</h2>
            <p className="da-section-body">
              We combine technical depth with genuine business understanding — delivering
              analytics that are not just impressive, but that drive real measurable outcomes.
            </p>
          </div>
          <div className="da-why-list">
            {WHY_ITEMS.map((w) => (
              <div className="da-why-row" key={w.title}>
                <div className="da-why-icon">{w.icon}</div>
                <div className="da-why-content">
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
                <div className="da-why-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}