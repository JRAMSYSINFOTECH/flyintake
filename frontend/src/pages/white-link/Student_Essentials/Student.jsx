import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./StudentEss.css";

import StudentEssFrom from "./StudentEssFrom/StudentEssFrom";
import ServicesSection from "./StudentEssFrom/ServiceSection";
import StudyAbroadPromo from "./StudentEssFrom/StudyAdroadPromo";
import EssentialsCards from "./StudentEssFrom/EssentialsCards";
import ContactPage from "../../../components/Contact/Contact";

export default function Student() {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [faqOpen, setFaqOpen] = useState(null);

  const handleChange = () => {
    navigate("/signup");
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
       
          <p className="breadcrumb-text">Study Abroad / Student Essentials</p>
          <h1 className="hero-heading">Student Essentials</h1>
          <p className="hero-subtext">
            Everything you need to start your study abroad journey smoothly.
          </p>

          <div className="hero-cta">
            <button onClick={handleChange} className="free-btn">
              Sign Up for Free
            </button>
            <Link className="hero-link" to="/student-essentials/how-it-works">
              How it works
            </Link>
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
        </div>
      </div>

    <section className="features-section">
      <h1 className="features-title">
        Essential Services for Your Study Abroad Journey
      </h1>

      <div className="features-grid">

        <div
          className="feature-card"
          onClick={() => navigate("/Visa")}
        >
          <div className="feature-icon">📄</div>
          <h3>Visa & Documentation</h3>
          <p>
            End-to-end guidance for visa paperwork and document checking so you apply with confidence.
          </p>
        </div>

        <div
          className="feature-card"
          onClick={() => navigate("/Ongoing")}
        >
          <div className="feature-icon">✈️</div>
          <h3>Pre-departure Support</h3>
          <p>
            Airport pick-up advice, accommodation options and settling-in tips from our local partners.
          </p>
        </div>

        <div
          className="feature-card"
          onClick={() => navigate("/ielts/IELTS_prep/Prep")}
        >
          <div className="feature-icon">🎓</div>
          <h3>Test Prep & Courses</h3>
          <p>
            IELTS/TOEFL practice, tuition discounts and course bundles to boost your readiness.
          </p>
        </div>

      </div>
    </section>







      {/* ESSENTIALS CARDS */}
      <div >
        <EssentialsCards />
      </div>

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
           <blockquote className="testimonial-card">
            <p>“Saved me time and gave confidence.”</p>
            <cite className="testimonial-author">— Neha, UK 2024</cite>
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
            <button type="submit" className="free-btn1">
              Subscribe
            </button>
          </form>
        </div>
      </section>

   

      {/* PROMO */}
      <StudyAbroadPromo />

      {/* QUICK FORM */}
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
