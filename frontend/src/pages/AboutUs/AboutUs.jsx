import React, { useEffect, useRef } from "react";
import { Eye, Target, Compass, Sparkles, BookOpen, Globe2, Users, Lightbulb, Shield, Award, TrendingUp, Heart } from "lucide-react";
import "./AboutUs.css";

export default function AboutUs() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      desc: "Building lasting relationships through honest guidance and transparent processes.",
      gradient: "blue"
    },
    {
      icon: Heart,
      title: "Student-Centric",
      desc: "Your dreams and aspirations are at the heart of everything we do.",
      gradient: "orange"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Pioneering fresh approaches to make international education more accessible.",
      gradient: "blue"
    },
    {
      icon: Globe2,
      title: "Global Vision",
      desc: "Connecting ambitious students with world-class opportunities worldwide.",
      gradient: "orange"
    }
  ];

  const offerings = [
    { icon: BookOpen, title: "Expert Counseling", desc: "Personalized guidance tailored to your unique goals" },
    { icon: Users, title: "Dedicated Support", desc: "With you every step of your journey" },
    { icon: Compass, title: "Strategic Planning", desc: "Structured roadmaps to ensure clarity" },
    { icon: TrendingUp, title: "Career Guidance", desc: "Aligning education with your aspirations" }
  ];

  return (
    <div className="about-flyintake">
      {/* Hero Section */}
      <section className="hero-flyintake">
        <div className="hero-ornament"></div>
        
        <div className="container-fly">
          <div className="hero-content-fly animate-on-scroll">
            <div className="hero-label">
              <Sparkles size={16} />
              <span>ABOUT FLYINTAKE</span>
            </div>
            
            <h1 className="hero-heading">
              Your Partner in
              <br />
              <span className="highlight-text">Global Education</span>
            </h1>
            
            <p className="hero-subtext">
              Empowering students to transform their educational dreams into reality through expert guidance, integrity, and innovation.
            </p>
          </div>
        </div>

        <div className="hero-wave"></div>
      </section>

      {/* Company Introduction */}
      <section className="intro-section">
        <div className="container-fly">
          <div className="intro-grid">
            <div className="intro-visual animate-on-scroll">
              <div className="intro-card card-1">
                <div className="card-icon">
                  <Globe2 size={48} />
                </div>
                <h3>Global Reach</h3>
              </div>
              <div className="intro-card card-2">
                <div className="card-icon">
                  <BookOpen size={48} />
                </div>
                <h3>Expert Guidance</h3>
              </div>
            </div>

            <div className="intro-content animate-on-scroll">
              <div className="section-label">
                <span className="label-number">01</span>
                <span className="label-text">WHO WE ARE</span>
              </div>

              <h2 className="section-heading">
                FLYINTAKE Global Consulting Private Limited
              </h2>

              <div className="intro-text">
                <p>
                  We are a fresh, forward-thinking education consulting company committed to helping students access world-class international education opportunities.
                </p>
                <p>
                  Through expert guidance, personalized counseling, and structured advisory services, we simplify the complex journey of studying abroad—making your global education dreams achievable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offerings-section">
        <div className="container-fly">
          <div className="section-header animate-on-scroll">
            <div className="section-label">
              <span className="label-number">02</span>
              <span className="label-text">WHAT WE OFFER</span>
            </div>
            <h2 className="section-heading">Comprehensive Support</h2>
          </div>

          <div className="offerings-grid">
            {offerings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="offering-card animate-on-scroll" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="offering-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vm-section">
        <div className="container-fly">
          <div className="section-header animate-on-scroll">
            <div className="section-label centered">
              <span className="label-number">03</span>
              <span className="label-text">VISION & MISSION</span>
            </div>
            <h2 className="section-heading centered">Guiding Our Purpose</h2>
          </div>

          <div className="vm-wrapper">
            <div className="vm-card vision-card animate-on-scroll">
              <div className="vm-icon-box vision-icon">
                <Eye size={40} />
              </div>
              <div className="vm-badge">VISION</div>
              <h3>Where We're Headed</h3>
              <p>
                To become a globally trusted partner in education consulting and academic support—known for integrity, innovation, and student success.
              </p>
            </div>

            <div className="vm-card mission-card animate-on-scroll">
              <div className="vm-icon-box mission-icon">
                <Target size={40} />
              </div>
              <div className="vm-badge">MISSION</div>
              <h3>What Drives Us</h3>
              <p>
                To simplify access to international education through transparent guidance, innovative solutions, and expert advisory services that put students first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container-fly">
          <div className="section-header animate-on-scroll">
            <div className="section-label centered">
              <span className="label-number">04</span>
              <span className="label-text">CORE VALUES</span>
            </div>
            <h2 className="section-heading centered">What We Stand For</h2>
            <p className="section-desc">
              The principles that guide every decision we make and every service we provide
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div 
                  key={idx} 
                  className={`value-card animate-on-scroll ${value.gradient}-gradient`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="value-number">{String(idx + 1).padStart(2, '0')}</div>
                  <div className="value-icon-wrap">
                    <Icon size={36} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-flyintake">
        <div className="footer-gradient"></div>
      </footer>
    </div>
  );
}