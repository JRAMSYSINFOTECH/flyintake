"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Careers.css";

const IconCheck = () => (
  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconMail = () => (
  <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconChat = () => (
  <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

export default function CareerPage() {
  const [email, setEmail]             = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError]             = useState("");

  const handleSubmit = () => {
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setShowSuccess(true);
    setEmail("");
  };

  return (
    <div>

      {/* ── Toast ───────────────────────────────────────────── */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="cp-toast-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              className="cp-toast"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="cp-toast__icon"><IconCheck /></div>
              <p className="cp-toast__title">You're on the list!</p>
              <p className="cp-toast__msg">
                We'll email you as soon as a new career opportunity opens up at FlyinTake.
              </p>
              <button className="cp-toast__btn" onClick={() => setShowSuccess(false)}>
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="cp-hero">
        <div className="cp-hero__glow cp-hero__glow--1" />
        <div className="cp-hero__glow cp-hero__glow--2" />
        <div className="cp-hero__inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="cp-hero__eyebrow">
              <span className="cp-hero__dot" />
              Careers · FlyinTake Global Consulting
            </div>
            <h1 className="cp-hero__title">
              Join Our Growing<br />
              <em>Global Team</em>
            </h1>
            <p className="cp-hero__sub">
              We're always looking for talented people passionate about technology consulting
              and educational support services. Register below to be notified when a role opens.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="cp-accent" />

      {/* ── Notify Card ─────────────────────────────────────── */}
      <section className="cp-notify">
        <motion.div
          className="cp-notify__card"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          <span className="cp-notify__bell">🔔</span>

          <h2 className="cp-notify__title">Stay in the Loop</h2>
          <p className="cp-notify__desc">
            Looking to grow with us? Subscribe to stay updated on the latest opportunities and openings. 
            We’ll keep you informed!
          </p>

          <input
            className="cp-notify__field"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={e => { setEmail(e.target.value); setError(""); }}
            onKeyPress={e => e.key === "Enter" && handleSubmit()}
          />
          {error && (
            <p style={{ color: "#DC2626", fontSize: "0.82rem", marginBottom: "10px", textAlign: "left" }}>
              {error}
            </p>
          )}

          <button className="cp-notify__btn" onClick={handleSubmit}>
            Notify Me of New Openings
          </button>

          <p className="cp-notify__privacy">🔒 No spam. Your email stays private.</p>
        </motion.div>
      </section>

      {/* ── CTA Strip ───────────────────────────────────────── */}
      <section className="cp-cta">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="cp-cta__label">Can't wait?</p>
          <p className="cp-cta__text">Reach out directly and introduce yourself</p>
          <div className="cp-cta__buttons">
            <a
              href="mailto:office@flyintakegc.com?subject=Career Opportunity at FlyinTake"
              className="cp-btn-primary"
            >
              <IconMail />
              Send Your CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="cp-footer">
        <strong>FlyinTake Global Consulting Pvt. Ltd.</strong>
        &nbsp;·&nbsp;Technology Consulting &amp; Educational Support Services
        &nbsp;·&nbsp;
        <a href="mailto:office@flyintakegc.com">office@flyintakegc.com</a>
      </footer>

    </div>
  );
}