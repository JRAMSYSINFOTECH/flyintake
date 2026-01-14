import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../StudentEss.css";

import ServicesSection from "../ServiceSection";
import StudyAbroadPromo from "../StudyAdroadPromo";
import EssentialsCards from "../EssentialsCards";
import ContactPage from "../../../../../components/Contact/Contact";

export default function Student() {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [faqOpen, setFaqOpen] = useState(null);

  const handleChange = () => {
    navigate("/pages/white-link/Sign_Up");
  };

  // Navigate on dropdown change
  const handleDestinationChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case "Australia":
        navigate("/study-destinations/australia");
        break;
      case "Canada":
        navigate("/study-destinations/canada");
        break;
      case "Ireland":
        navigate("/study-destinations/ireland");
        break;
      case "UK":
        navigate("/study-destinations/uk");
        break;
      case "USA":
        navigate("/study-destinations/usa");
        break;
      default:
        navigate("/student");
    }
  };

  const submitNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    // connect to API here if needed
    alert(`Thanks! We'll send updates to ${newsletterEmail}`);
    setNewsletterEmail("");
  };

  const toggleFaq = (index) => {
    setFaqOpen((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      q: "How long does visa processing typically take?",
      a: "Visa timelines vary by country and individual circumstances — typically 4–12 weeks depending on document readiness.",
    },
    {
      q: "Can I get help with accommodation?",
      a: "Yes — we provide guidance and partner options for on-campus and private housing.",
    },
    {
      q: "Do you offer test-prep classes?",
      a: "Yes — IELTS/TOEFL courses and mock tests are available.",
    },
  ];

  return (
    <div className="essentials-container">
      {/* HERO */}
      <div className="essentials-hero">
        <div className="hero-overlay">
          <p className="breadcrumb-text">Study Abroad / Student Essentials</p>
          <h1 className="hero-heading">Student Essentials</h1>
          <p className="hero-subtext">
            Everything you need to start your study abroad journey smoothly.
          </p>

          <div className="hero-cta">
            <button onClick={handleChange} className="free-btn">
              Sign Up for Free
            </button>
            <a className="hero-link" href="#how-it-works">
              How it works
            </a>
          </div>
        </div>
      </div>

      {/* FILTER / QUICK NAV */}
      <div className="recommend-section">
        <div>
          <p>Discover recommended products & services for your destination</p>
        </div>

        <div className="recommend-actions">
          <select
            className="destination-select"
            onChange={handleDestinationChange}
            defaultValue="All"
          >
            <option value="All">All</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="Ireland">Ireland</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </select>

          <button
            className="contact-scroll-btn"
            onClick={() =>
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
            }
          >
            Contact us
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <section className="features-section">
        <div className="features-grid">
          <div className="card">
            <h3>Visa & Documentation</h3>
            <p>
              End-to-end guidance for visa paperwork and document checking so you apply with confidence.
            </p>
          </div>

          <div className="card">
            <h3>Pre-departure Support</h3>
            <p>
              Airport pick-up advice, accommodation options and settling-in tips from our local partners.
            </p>
          </div>

          <div className="card">
            <h3>Test Prep & Courses</h3>
            <p>
              IELTS/TOEFL practice, tuition discounts and course bundles to boost your readiness.
            </p>
          </div>
        </div>
      </section>

      {/* ESSENTIALS CARDS */}
      <div className="essentials-cards">
        <EssentialsCards />
      </div>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-it-works">
        <div className="how-grid">
          <div className="card">
            <div className="step-number">1</div>
            <h4>Tell us your plans</h4>
            <p>Choose destination, timeline and study level so we can personalise recommendations.</p>
          </div>

          <div className="card">
            <div className="step-number">2</div>
            <h4>Get matched services</h4>
            <p>We match you with products, preparatory courses and local partners.</p>
          </div>

          <div className="card">
            <div className="step-number">3</div>
            <h4>Fly with confidence</h4>
            <p>Pre-departure briefings and post-arrival support make the transition easier.</p>
          </div>
        </div>
      </section>




      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h2>What students say</h2>
        <div className="testimonials-grid">
          <blockquote className="testimonial-card">
            <p>“Great support — visa process was seamless.”</p>
            <cite className="testimonial-author">— Priya, Canada 2024</cite>
          </blockquote>

          <blockquote className="testimonial-card">
            <p>“Helpful pre-departure briefing and local tips.”</p>
            <cite className="testimonial-author">— Ahmed, Australia 2023</cite>
          </blockquote>

          <blockquote className="testimonial-card">
            <p>“Saved me time and gave confidence.”</p>
            <cite className="testimonial-author">— Neha, UK 2024</cite>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((item, idx) => (
            <div key={idx} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(idx)}>
                <span>{item.q}</span>
                <span>{faqOpen === idx ? "−" : "+"}</span>
              </div>
              {faqOpen === idx && <div className="faq-answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <div className="newsletter-inner">
          <div>
            <h3>Stay updated</h3>
            <p>Get monthly tips and exclusive offers for students.</p>
          </div>

          <form onSubmit={submitNewsletter} className="newsletter-form">
            <input
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="free-btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners">
        <h4>Our partners</h4>
        <div className="partners-logos">
          <img src="/assets/partner1.png" alt="partner 1" className="partner-logo" />
          <img src="/assets/partner2.png" alt="partner 2" className="partner-logo" />
          <img src="/assets/partner3.png" alt="partner 3" className="partner-logo" />
          <img src="/assets/partner4.png" alt="partner 4" className="partner-logo" />
        </div>
      </section>

      {/* PROMO */}
      <StudyAbroadPromo />

      {/* QUICK FORM (repeat / bottom) */}
      <section className="form-section">
        <div className="form-inner">
          <h2>Get personalised help</h2>
          <p>Fill the quick enquiry and our counsellor will contact you.</p>
        <ContactPage/>
        </div>
      </section>


      <ServicesSection />
    </div>
  );
}
