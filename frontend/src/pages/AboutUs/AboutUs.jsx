import React, { useState } from "react";
import {
  Eye, Target, Compass, Sparkles, BookOpen, Globe2, Users, Lightbulb,
  Shield, Award, TrendingUp, Heart, Quote, MapPin, Briefcase,
  GraduationCap, Languages, Plane, Brain, Network, Zap, Sun, MessageCircle,
  ArrowRight, ArrowUpRight, ChevronRight
} from "lucide-react";
import "./AboutUs.css";
import { Link } from "react-router-dom";

/* ────────────────────────────────────────────
   DATA
──────────────────────────────────────────── */
const TEAM = [
  {
    name: "Saikiran Surineni",
    role: "Founder & CEO",
    accent: "navy",
    image: "/public/assets/saikiran.jpeg",
    quote: "Education is the passport to the future.",
    bio: "Visionary leader driving Flyintake's mission to connect students with world-class global opportunities.",
    tag: "Leadership"
  },
  {
    name: "Maneendra Reddy Meegada",
    role: "Co-Founder",
    accent: "orange",
    image: "/public/assets/maneendra.jpg",
    quote: "Every student deserves a world-class future.",
    bio: "Strategic co-founder building robust systems and partnerships that empower student success globally.",
    tag: "Strategy"
  },
  {
    name: "Venkata Krishna Miriyala",
    role: "General Secretary",
    accent: "teal",
    image: "/public/assets/venkata.jpg",
    quote: "Operations excellence creates student excellence.",
    bio: "Orchestrates seamless operations and governance, ensuring every student journey runs flawlessly.",
    tag: "Operations"
  },
  {
    name: "Ganesh Surineni",
    role: "Marketing Executive",
    accent: "gold",
    image: "/public/assets/ganesh.jpg",
    quote: "Great stories inspire great futures.",
    bio: "Amplifies Flyintake's brand voice, connecting ambitious students with the guidance they need to succeed.",
    tag: "Marketing"
  }
];

const VALUES = [
  { icon: Shield,    title: "Integrity First",  desc: "Building lasting relationships through honest guidance and transparent processes.", color: "navy"   },
  { icon: Heart,     title: "Student-Centric",  desc: "Your dreams and aspirations are at the heart of everything we do.",                color: "orange" },
  { icon: Lightbulb, title: "Innovation",       desc: "Pioneering fresh approaches to make international education more accessible.",     color: "teal"   },
  { icon: Globe2,    title: "Global Vision",    desc: "Connecting ambitious students with world-class opportunities worldwide.",          color: "gold"   }
];

const OFFERINGS = [
  { icon: BookOpen,   title: "Expert Counseling",  desc: "Personalized guidance tailored to your unique goals and academic profile." },
  { icon: Users,      title: "Dedicated Support",  desc: "A committed team with you every step of your journey abroad." },
  { icon: Compass,    title: "Strategic Planning", desc: "Structured roadmaps that bring clarity to complex application processes." },
  { icon: TrendingUp, title: "Career Guidance",    desc: "Aligning your education choices with your long-term career aspirations." }
];

const BENEFITS = [
  { icon: Globe2,        title: "Cultural Immersion",             desc: "Live and breathe different cultures, traditions and perspectives that permanently reshape how you see the world and your place in it." },
  { icon: GraduationCap, title: "Academic Excellence",            desc: "Access world-class institutions, cutting-edge research facilities and curricula designed by the brightest minds in every field." },
  { icon: Languages,     title: "Language Mastery",               desc: "Gain genuine fluency and cross-cultural confidence through real daily immersive practice — far beyond any classroom." },
  { icon: Brain,         title: "Personal Transformation",        desc: "Discover resilience, independence and a deeper self-awareness you never knew you possessed until you were truly on your own." },
  { icon: Briefcase,     title: "Global Career Edge",             desc: "International credentials and experience open doors to globally competitive employers who actively seek world-ready talent." },
  { icon: Sun,           title: "Broadened Perspectives",         desc: "Challenge long-held assumptions and develop nuanced, balanced thinking — the defining trait that separates leaders from followers." },
  { icon: Network,       title: "Lifelong Global Network",        desc: "Build deep friendships and high-value professional connections spanning every continent and every major industry." },
  { icon: Zap,           title: "Adaptability & Problem-Solving", desc: "Navigate real-world challenges daily and build practical skills no classroom alone can teach — the world becomes your university." },
  { icon: Award,         title: "True Independence",              desc: "Learn to manage yourself, your finances and your future entirely on your own terms — a skill that pays dividends for life." },
  { icon: MessageCircle, title: "Communication Excellence",       desc: "Sharpen the cross-cultural communication and presentation skills that top employers worldwide value above almost everything else." },
  { icon: Shield,        title: "Unshakable Confidence",          desc: "Every challenge you overcome abroad adds another layer of confidence in your abilities, judgment and resilience under pressure." },
  { icon: MapPin,        title: "Global Mindset",                 desc: "Think beyond borders, systems and barriers — the defining characteristic of tomorrow's most influential leaders and innovators." },
  { icon: Plane,         title: "Extraordinary Travel",           desc: "Explore breathtaking destinations, hidden cultures and iconic landmarks on every continent as part of everyday student life." },
  { icon: Heart,         title: "Lifelong Memories",              desc: "Experiences so vivid, formative and fulfilling they become the stories you'll treasure and tell for the rest of your life." }
];

const CHAIRMAN_MSG = [
  "Dear Students and Parents,",
  "Welcome to Flyintake Global Consulting Pvt. Ltd., where we are dedicated to turning your aspirations for global education and career success into reality. As Chairman, I am proud to lead a team of committed professionals who are passionate about guiding students toward meaningful academic, professional, and personal growth.",
  "At Flyintake, we believe education goes beyond classrooms — it shapes futures. Our mission is to provide comprehensive support and personalized guidance to help students confidently navigate the journey of studying abroad. We understand that every student's path is unique, and we are here to make that journey smooth, informed, and rewarding.",
  "In addition to overseas education services, we offer industry-focused IT and Management training programs designed to equip students with practical, in-demand skills. We also facilitate internship opportunities that provide real-world exposure, enabling students to build strong professional foundations and gain a competitive edge in today's global job market. Furthermore, our in-house project development initiatives allow students to work on live, practical projects, enhancing their technical expertise, problem-solving abilities, and workplace readiness.",
  "Our commitment goes beyond admissions — we focus on long-term success. From career-oriented training and hands-on project experience to international academic placements, Flyintake Global Consulting Pvt. Ltd. stands as a trusted partner in shaping brighter futures.",
  "We look forward to being part of your success story.",
  "— Marketing Executive Chairman, Flyintake Global Consulting Pvt. Ltd."
];

/* ────────────────────────────────────────────
   COMPONENT
──────────────────────────────────────────── */
export default function AboutUs() {
  const [activeBenefit, setActiveBenefit] = useState(0);

  return (
    <div className="flyintake-root">

      {/* ══════════════ HERO ══════════════ */}
      <section className="flyintake-hero">
        <div className="flyintake-hero-mesh" />
        <div className="flyintake-hero-orb flyintake-hero-orb--a" />
        <div className="flyintake-hero-orb flyintake-hero-orb--b" />
        <div className="flyintake-wrap">
          <div className="flyintake-hero-inner">
            <div className="flyintake-hero-pill">
              <span className="flyintake-pill-pulse" />
              <span>ABOUT FLYINTAKE</span>
            </div>
            <h1 className="flyintake-hero-h1">
              Your Partner in<br />
              <span className="flyintake-hero-grad">Global Education</span>
            </h1>
            <p className="flyintake-hero-sub">
              Empowering students to transform their educational dreams into reality through expert guidance, integrity, and innovation.
            </p>
          </div>
        </div>
        <div className="flyintake-hero-wave" />
      </section>

      {/* ══════════════ WHO WE ARE ══════════════ */}
      <section className="flyintake-intro">
        <div className="flyintake-wrap">
          <div className="flyintake-intro-grid">
            <div className="flyintake-intro-visual">
              <div className="flyintake-intro-card flyintake-icard--a">
                <div className="flyintake-icard-icon flyintake-icard-icon--navy"><Globe2 size={38} /></div>
                <h3>Global Reach</h3>
                <p>Connecting students with 500+ institutions worldwide</p>
              </div>
              <div className="flyintake-intro-card flyintake-icard--b">
                <div className="flyintake-icard-icon flyintake-icard-icon--orange"><BookOpen size={38} /></div>
                <h3>Expert Guidance</h3>
                <p>Seasoned counselors with deep domain knowledge</p>
              </div>
            </div>

            <div className="flyintake-intro-content">
              <div className="flyintake-sec-label">
                <span className="flyintake-label-txt">WHO WE ARE</span>
              </div>
              <h2 className="flyintake-sec-heading">
                FLYINTAKE Global Consulting Private Limited
              </h2>
              <div className="flyintake-intro-text">
                <p>We are a fresh, forward-thinking education consulting company committed to helping students access world-class international education opportunities.</p>
                <p>Through expert guidance, personalized counseling, and structured advisory services, we simplify the complex journey of studying abroad — making your global education dreams achievable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ WHAT WE OFFER ══════════════ */}
      <section className="flyintake-offerings">
        <div className="flyintake-wrap">
          <div className="flyintake-sec-header">
            <div className="flyintake-sec-label flyintake-sec-label--center">
              <span className="flyintake-label-txt">WHAT WE OFFER</span>
            </div>
            <h2 className="flyintake-sec-heading flyintake-sec-heading--center">Comprehensive Support</h2>
          </div>
          <div className="flyintake-offerings-grid">
            {OFFERINGS.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flyintake-offer-card">
                  <div className="flyintake-offer-glow" />
                  <div className="flyintake-offer-icon"><Icon size={28} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="flyintake-offer-line" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ VISION & MISSION ══════════════ */}
      <section className="flyintake-vm">
        <div className="flyintake-vm-bg" />
        <div className="flyintake-wrap">
          <div className="flyintake-sec-header">
            <div className="flyintake-sec-label flyintake-sec-label--center flyintake-sec-label--light">
              <span className="flyintake-label-txt">VISION & MISSION</span>
            </div>
            <h2 className="flyintake-sec-heading flyintake-sec-heading--center flyintake-sec-heading--light">Guiding Our Purpose</h2>
          </div>
          <div className="flyintake-vm-grid">
            <div className="flyintake-vm-card flyintake-vm-card--vision">
              <div className="flyintake-vm-tag">VISION</div>
              <h3>Where We're Headed</h3>
              <div className="flyintake-vm-rule" />
              <p>To become a globally trusted partner in education consulting and academic support — known for integrity, innovation, and student success.</p>
            </div>
            <div className="flyintake-vm-card flyintake-vm-card--mission">
              <div className="flyintake-vm-tag">MISSION</div>
              <h3>What Drives Us</h3>
              <div className="flyintake-vm-rule" />
              <p>To simplify access to international education through transparent guidance, innovative solutions, and expert advisory services that put students first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CORE VALUES ══════════════ */}
      <section className="flyintake-values">
        <div className="flyintake-wrap">
          <div className="flyintake-sec-header">
            <div className="flyintake-sec-label flyintake-sec-label--center">
              <span className="flyintake-label-txt">CORE VALUES</span>
            </div>
            <h2 className="flyintake-sec-heading flyintake-sec-heading--center">What We Stand For</h2>
            <p className="flyintake-sec-desc">The principles that guide every decision we make and every service we provide</p>
          </div>
          <div className="flyintake-values-grid">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className={`flyintake-val-card flyintake-val-card--${v.color}`}>
                  <span className="flyintake-val-num">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flyintake-val-icon"><Icon size={32} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════ LEADERSHIP TEAM ══════════════ */}
      <section className="flyintake-team">
        <div className="flyintake-team-bg" />
        <div className="flyintake-wrap">
          <div className="flyintake-sec-header">
            <div className="flyintake-sec-label flyintake-sec-label--center">
              <span className="flyintake-label-txt">LEADERSHIP</span>
            </div>
            <h2 className="flyintake-sec-heading flyintake-sec-heading--center">Growth-Driven Team</h2>
            <p className="flyintake-sec-desc">The visionaries and builders who make Flyintake's mission a daily reality</p>
          </div>

          <div className="flyintake-team-grid">
            {TEAM.map((member, i) => (
              <div key={i} className={`flyintake-member-card flyintake-member-card--${member.accent}`}>
                {/* Image area */}
                <div className="flyintake-member-photo-wrap">
                  <img
                    className="flyintake-member-photo"
                    src={member.image}
                    alt={member.name}
                    onError={e => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div
                    className={`flyintake-member-avatar flyintake-member-avatar--${member.accent}`}
                    style={{ display: "none" }}
                  >
                    <span>{member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                  </div>


                </div>

                {/* Card body */}
                <div className="flyintake-member-body">
                  <div className="flyintake-member-header">
                    <div>
                      <span className={`flyintake-member-role flyintake-member-role--${member.accent}`}>{member.role}</span>
                      <h3 className="flyintake-member-name">{member.name}</h3>
                    </div>
                    <div className={`flyintake-member-arrow flyintake-member-arrow--${member.accent}`}>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                  <p className="flyintake-member-bio-short">{member.bio}</p>
                  <div className={`flyintake-member-quote-strip flyintake-member-quote-strip--${member.accent}`}>
                    <Quote size={11} />
                    <em>{member.quote}</em>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CHAIRMAN'S MESSAGE ══════════════ */}
      <section className="flyintake-chairman">
        <div className="flyintake-chairman-bg" />
        <div className="flyintake-wrap">
          <div className="flyintake-chairman-label">
            <span className="flyintake-label-txt">CHAIRMAN'S MESSAGE</span>
          </div>

          <div className="flyintake-chairman-card">
            <div className="flyintake-chairman-deco-mark">"</div>

            <div className="flyintake-chairman-content">
              {CHAIRMAN_MSG.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "flyintake-chairman-salute"
                      : i === CHAIRMAN_MSG.length - 1
                      ? "flyintake-chairman-sign"
                      : "flyintake-chairman-para"
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            <div className="flyintake-chairman-stripe" />
          </div>
        </div>
      </section>

      {/* ══════════════ BENEFITS OF STUDYING ABROAD ══════════════ */}
      <section className="flyintake-benefits">
        <div className="flyintake-wrap">
          <div className="flyintake-sec-header">
            <div className="flyintake-sec-label flyintake-sec-label--center">
              <span className="flyintake-label-txt">WHY STUDY ABROAD</span>
            </div>
            <h2 className="flyintake-sec-heading flyintake-sec-heading--center">Benefits of Studying Abroad</h2>
            <p className="flyintake-sec-desc">
              Studying abroad is more than a degree — it's a transformation that touches every dimension of who you are and who you become.
            </p>
          </div>

          <div className="flyintake-benefits-layout">
            {/* Left: list */}
            <div className="flyintake-benefits-list">
              {BENEFITS.map((b, i) => {
                const Icon = b.icon;
                return (
                  <button
                    key={i}
                    className={`flyintake-brow${activeBenefit === i ? " flyintake-brow--on" : ""}`}
                    onMouseEnter={() => setActiveBenefit(i)}
                    onClick={() => setActiveBenefit(i)}
                  >
                    <div className="flyintake-brow-icon-wrap"><Icon size={15} /></div>
                    <span className="flyintake-brow-label">{b.title}</span>
                    <ChevronRight size={13} className="flyintake-brow-chevron" />
                  </button>
                );
              })}
            </div>

            {/* Right: panel */}
            <div className="flyintake-benefit-panel-wrap">
              {(() => {
                const b = BENEFITS[activeBenefit];
                const Icon = b.icon;
                return (
                  <div className="flyintake-benefit-panel" key={activeBenefit}>
                    <div className="flyintake-panel-top">
                      <div className="flyintake-panel-icon"><Icon size={36} /></div>
                    </div>
                    <h3 className="flyintake-panel-heading">{b.title}</h3>
                    <div className="flyintake-panel-divider" />
                    <p className="flyintake-panel-body">{b.desc}</p>
                    <p className="flyintake-panel-note">
                      One of {BENEFITS.length} life-changing advantages of studying abroad with Flyintake's global network.
                    </p>
                    <div className="flyintake-panel-dots">
                      {BENEFITS.map((_, j) => (
                        <button
                          key={j}
                          className={`flyintake-panel-dot${j === activeBenefit ? " flyintake-panel-dot--active" : ""}`}
                          onClick={() => setActiveBenefit(j)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* CTA */}
          <div className="flyintake-benefits-cta">
            <div className="flyintake-cta-text">
              <h3>Ready to Begin Your Global Journey?</h3>
              <p>Our expert counselors are here to guide you every step of the way.</p>
            </div>
           <Link to="/contact" className="flyintake-cta-btn">
             Get Free Consultation
              
            </Link>

          </div>
        </div>
      </section>

      {/* ══════════════ FOOTER BAR ══════════════ */}
      <footer className="flyintake-footer-bar" />
    </div>
  );
}