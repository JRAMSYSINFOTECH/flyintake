import React from "react";
// import "...../WhyStdyAbrd/StdyAbcnt.css"; /* Reuses same stylesheet */

const SECTIONS = [
  {
    id: "application-process",
    tag: "The Application Process",
    number: "01",
    heading: "How to Apply to Universities Abroad",
    accent: "#0066B3",
    accentLight: "#e6f2ff",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=700&q=85&fit=crop",
    pullQuote: "A well-prepared application doesn't just tick boxes — it tells your story in a way that makes admissions committees remember you.",
    paragraphs: [
      "Applying to a university abroad involves several distinct stages, and understanding each one early gives you a significant advantage over other applicants. The process typically begins 12 to 18 months before your intended start date. This timeline allows you to research programmes thoroughly, prepare your documents, sit required language tests such as IELTS or TOEFL, and craft a compelling personal statement without rushing any stage.",
      "Most international universities require a combination of academic transcripts, proof of English language proficiency, a Statement of Purpose (SOP) or personal statement, letters of recommendation from academic or professional referees, and a valid passport copy. Some programmes — particularly in business, law, and medicine — also require standardised test scores such as the GMAT, GRE, or LNAT. Understanding exactly what each university requires for your chosen programme is the critical first step.",
      "Once your documents are ready, you will typically apply either directly through the university's online portal or through a centralised national application system — such as UCAS in the UK. Pay close attention to each institution's specific deadlines, as missing one can mean waiting an entire academic year. Our counsellors at Flyintake will build a personalised application calendar for you so nothing slips through the cracks."
    ]
  },
  {
    id: "visa-finances",
    tag: "Visas & Finances",
    number: "02",
    heading: "Securing Your Visa & Funding",
    accent: "#E65100",
    accentLight: "#fff4ef",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=85&fit=crop",
    pullQuote: "An offer letter is just the beginning — the right visa strategy and funding plan are what actually get you on the plane.",
    paragraphs: [
      "Once you receive a conditional or unconditional offer from your chosen university, the next critical steps are accepting the offer, meeting any conditions attached to it, and initiating your student visa application. Each country has its own visa pathway — the UK Student Visa, the US F-1 Visa, Canada's Study Permit, and Australia's Student Visa (Subclass 500) all have different documentation requirements, processing times, and financial proof thresholds. Starting this process early is essential, as delays can jeopardise your enrolment.",
      "Funding your international education is a challenge many students face, but there are far more options available than most people realise. Government scholarships, university merit awards, country-specific bursaries, and private foundation grants can significantly offset tuition and living costs. Countries like Canada and Australia also allow international students to work part-time during their studies — up to 20 hours per week during term time — which helps cover day-to-day living expenses.",
      "Creating a realistic budget before you depart is just as important as securing your funding. Factor in tuition fees, accommodation, health insurance, travel, and personal expenses for the full duration of your course. Flyintake's counsellors will walk you through every financial requirement for your specific destination and help you identify scholarship opportunities you may not have considered, ensuring you arrive fully prepared and financially secure."
    ]
  }
];

export default function HowToApplyContent() {
  return (
    <div className="wsa-root">

      {/* ── Intro band ── */}
      <div className="wsa-intro-band">
        <div className="wsa-intro-inner">
          <div className="wsa-intro-line" />
          <p className="wsa-intro-text">
            Applying to a university abroad can feel overwhelming — but broken down into clear, manageable steps it becomes entirely achievable. From building your document checklist to submitting your visa application, understanding the full process gives you the confidence to move forward without second-guessing every decision.
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
            <h3>Ready to Start Your Application?</h3>
            <p>Let our expert counsellors handle the complexity — from document prep to visa submission — so you can focus on your future.</p>
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