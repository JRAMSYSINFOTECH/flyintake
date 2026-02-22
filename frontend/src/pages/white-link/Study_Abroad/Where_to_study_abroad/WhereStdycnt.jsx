import React from "react";
import "../WhyStudyAbrd/StdyAbcnt.css"; /* Reuses the same stylesheet — no new CSS needed */

const SECTIONS = [
  {
    id: "where",
    tag: "Choose Your Destination",
    number: "01",
    heading: "Where Should You Study?",
    accent: "#0066B3",
    accentLight: "#e6f2ff",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=700&q=85&fit=crop",
    pullQuote: "The right country isn't just about rankings — it's about where your ambitions can grow the furthest.",
    paragraphs: [
      "Picking the right country is about far more than university league tables. Each destination offers a distinct mix of academic culture, employment landscape, visa pathways, and quality of life. The UK, for example, is known for its intensive one-year master's programmes and globally respected degrees — ideal for students who want a faster route to a postgraduate qualification without compromising on prestige.",
      "North America offers breadth: the United States boasts more globally ranked institutions than any other nation, while Canada combines high academic standards with one of the most straightforward permanent residency routes for international graduates. Australia and Ireland, meanwhile, are prized for their safe, English-speaking environments, strong graduate job markets, and a relaxed quality of life that helps students balance study with experience.",
      "Germany stands apart as the only major destination where international students can often study entirely tuition-free, even at the master's level — making it a compelling option for those in engineering, technology, and natural sciences. Whichever destination appeals to you, our counsellors will map out every requirement, cost, and opportunity so your decision is fully informed before you apply."
    ]
  },
  {
    id: "what",
    tag: "Choose Your Course",
    number: "02",
    heading: "What Should You Study?",
    accent: "#E65100",
    accentLight: "#fff4ef",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=700&q=85&fit=crop",
    pullQuote: "The best course isn't the most popular one — it's the one that aligns your strengths with the world's needs.",
    paragraphs: [
      "Choosing the right subject is just as critical as choosing the right country. The most in-demand fields internationally include Computer Science and Artificial Intelligence, Data Analytics, Business and Management, Healthcare and Nursing, Civil and Mechanical Engineering, and Finance. These disciplines consistently offer strong graduate employment rates and are actively sought by employers across every major destination country.",
      "However, the right course for you is ultimately personal. Before shortlisting programmes, reflect on your undergraduate background, your genuine interests, and the type of work environment you want to build your career in. A well-chosen course in a niche discipline can outperform a generic degree in a popular field if it matches your strengths and the specific demands of your target industry.",
      "It is also worth considering course structure — whether you prefer research-based learning, coursework-only programmes, or industry-integrated degrees with mandatory internship components. Many universities abroad offer sandwich programmes and co-op placements that embed real professional experience directly into your degree, giving you a significant advantage when you graduate. Our team will help you shortlist programmes that match your academic profile, budget, and career goals precisely."
    ]
  }
];

export default function WhereWhatContent() {
  return (
    <div className="wsa-root">

      {/* ── Intro band ── */}
      <div className="wsa-intro-band">
        <div className="wsa-intro-inner">
          <div className="wsa-intro-line" />
          <p className="wsa-intro-text">
            Two of the biggest decisions you will ever make sit at the heart of studying abroad — picking the country that suits your lifestyle and career goals, and selecting the course that turns your strengths into a profession. Get both right and your international education becomes the foundation of everything that follows.
          </p>
        </div>
      </div>

      {/* ── Content Sections ── */}
      {SECTIONS.map((sec, i) => (
        <section
          key={sec.id}
          className={`wsa-sec ${i % 2 === 1 ? "wsa-sec--flip" : ""}`}
          style={{ "--acc": sec.accent, "--acc-lt": sec.accentLight }}
        >
          <div className="wsa-sec-inner">

            {/* Image column */}
            <div className="wsa-img-col">
              <div className="wsa-img-frame">
                <img src={sec.image} alt={sec.heading} className="wsa-img" loading="lazy" />
                <div className="wsa-img-veil" />
              </div>
              <div className="wsa-sec-watermark">{sec.number}</div>
            </div>

            {/* Text column */}
            <div className="wsa-txt-col">
              <div className="wsa-tag">
                <span className="wsa-tag-dot" />
                {sec.tag}
              </div>

              <h2 className="wsa-heading">{sec.heading}</h2>
              <div className="wsa-rule" />

              <blockquote className="wsa-blockquote">
                <svg className="wsa-bq-icon" width="32" height="24" viewBox="0 0 32 24" fill="none">
                  <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.267 8.533 7.2 8 12H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 3.2C28.8 4.267 26.133 7.2 25.6 12H32V24H17.6Z" fill="currentColor"/>
                </svg>
                <p>{sec.pullQuote}</p>
              </blockquote>

              <div className="wsa-body">
                {sec.paragraphs.map((para, j) => (
                  <p key={j} className="wsa-para">{para}</p>
                ))}
              </div>
            </div>

          </div>

          {i < SECTIONS.length - 1 && <div className="wsa-divider" />}
        </section>
      ))}

      {/* ── CTA Strip ── */}
      <div className="wsa-cta-strip">
        <div className="wsa-cta-inner">
          <div className="wsa-cta-text">
            <h3>Not Sure Where or What to Study?</h3>
            <p>Our expert counsellors will match your goals, budget, and background to the perfect destination and course.</p>
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