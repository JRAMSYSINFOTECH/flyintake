import React from "react";
import "./StdyAbcnt.css";

const SECTIONS = [
  {
    id: "career",
    tag: "Career Growth",
    number: "01",
    heading: "Grow Your Career Opportunities",
    accent: "#0066B3",
    accentLight: "#e6f2ff",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=85&fit=crop",
    pullQuote: "Standing out in today's job market means showing you can thrive anywhere in the world.",
    paragraphs: [
      "In today's competitive job market, standing out matters enormously. One of the most powerful benefits of studying abroad is the ability to make your CV or résumé shine against other candidates — catching the eye of future employers with your worldwide skills and real-world experience.",
      "Studying abroad significantly enhances your English language skills, especially when communicating daily in a foreign country. Highlighting this proficiency on your résumé showcases your ability to adapt and thrive in diverse environments, while your cross-cultural experience demonstrates soft skills many employers prize above all else.",
      "Many study abroad programs also offer internship opportunities, allowing you to gain hands-on work experience in your field before graduation. Whether you aim to join a global corporation, enter international relations, or simply bring a broader outlook to your profession — studying overseas helps you make a truly lasting impression."
    ]
  },
  {
    id: "migration",
    tag: "Migration Pathways",
    number: "02",
    heading: "Migration Opportunities",
    accent: "#E65100",
    accentLight: "#fff4ef",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=85&fit=crop",
    pullQuote: "Countries with talent shortages actively retain international graduates who contribute to their workforce and economy.",
    paragraphs: [
      "Your time overseas and the abilities you develop while studying in another country open doors to remarkable migration prospects. Companies recognise the value of global competencies, actively seeking candidates with international experience, cross-border connections, and specialised expertise.",
      "Studying abroad equips you with skills to address global talent gaps, making you a valuable asset in any economy. Countries with workforce shortages often offer streamlined work visas or permanent residency pathways specifically designed to retain high-calibre international graduates.",
      "A study by The Migration Observatory at the University of Oxford found that around 112,000 former international students received graduate visas and 56,000 received other work visas in 2023 in the UK alone — a dramatic rise from approximately 43,000 total work visas issued in 2011."
    ]
  },
  {
    id: "personal",
    tag: "Personal Growth",
    number: "03",
    heading: "Personal Development",
    accent: "#0D9488",
    accentLight: "#e6f7f6",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=85&fit=crop",
    pullQuote: "Leaving your comfort zone builds the kind of resilience that no classroom alone can ever teach.",
    paragraphs: [
      "Studying abroad is far more than academic achievement — it's a transformative journey of personal growth. Leaving your comfort zone helps you adapt, become self-reliant, and develop true independence. Navigating a new city, managing your own finances, and overcoming language barriers build resilience and resourcefulness that stay with you for life.",
      "You'll form meaningful friendships across cultures, sharpen your problem-solving instincts, and learn to see every challenge as an opportunity for growth. Immersing yourself in a new culture strengthens your confidence and sharpens your decision-making in ways that simply aren't possible at home.",
      "By embracing new experiences and taking considered risks, you emerge as a stronger, more capable individual — fully prepared for whatever challenges await you, both in your career and beyond."
    ]
  }
];

export default function StdyAbcnt() {
  return (
    <div className="wsa-root">

      {/* Intro band */}
      <div className="wsa-intro-band">
        <div className="wsa-intro-inner">
          <div className="wsa-intro-line" />
          <p className="wsa-intro-text">
            A global perspective makes you a stronger applicant for graduate school and future careers. Your time abroad demonstrates that you value international learning and can adapt to new environments — qualities that define tomorrow's most sought-after professionals.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      {SECTIONS.map((sec, i) => (
        <section
          key={sec.id}
          className={`wsa-sec ${i % 2 === 1 ? "wsa-sec--flip" : ""}`}
          style={{ "--acc": sec.accent, "--acc-lt": sec.accentLight }}
        >
          <div className="wsa-sec-inner">

            {/* ── Image Column ── */}
            <div className="wsa-img-col">
              <div className="wsa-img-frame">
                <img src={sec.image} alt={sec.heading} className="wsa-img" loading="lazy" />
                <div className="wsa-img-veil" />


              </div>

              {/* Section number watermark */}
              <div className="wsa-sec-watermark">{sec.number}</div>
            </div>

            {/* ── Text Column ── */}
            <div className="wsa-txt-col">
              {/* Tag */}
              <div className="wsa-tag">
                <span className="wsa-tag-dot" />
                {sec.tag}
              </div>

              <h2 className="wsa-heading">{sec.heading}</h2>

              {/* Accent rule */}
              <div className="wsa-rule" />

              {/* Pull quote */}
              <blockquote className="wsa-blockquote">
                <svg className="wsa-bq-icon" width="32" height="24" viewBox="0 0 32 24" fill="none">
                  <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.267 8.533 7.2 8 12H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 3.2C28.8 4.267 26.133 7.2 25.6 12H32V24H17.6Z" fill="currentColor"/>
                </svg>
                <p>{sec.pullQuote}</p>
              </blockquote>

              {/* Body paragraphs */}
              <div className="wsa-body">
                {sec.paragraphs.map((para, j) => (
                  <p key={j} className="wsa-para">{para}</p>
                ))}
              </div>
            </div>

          </div>

          {/* Section separator */}
          {i < SECTIONS.length - 1 && <div className="wsa-divider" />}
        </section>
      ))}

      {/* Bottom CTA */}
      <div className="wsa-cta-strip">
        <div className="wsa-cta-inner">
          <div className="wsa-cta-text">
            <h3>Ready to Start Your Global Journey?</h3>
            <p>Our expert counsellors will guide you to the right destination and course for your future.</p>
          </div>
          <a href="/contact" className="wsa-cta-btn">
            Get Free Consultation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}