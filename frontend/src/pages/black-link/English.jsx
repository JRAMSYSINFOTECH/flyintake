import React from "react";
import "./English.css";
import { useNavigate } from "react-router-dom";

const English = () => {
  const navigate = useNavigate();

 const handleExploreClick = () => {
  navigate("/english/programs");
};

  return (
    <div className="english-container">
      {/* Header */}
      <h1>Global English</h1>

      {/* Intro */}
      <p className="intro-text">
        English is the most widely spoken language in the world and is often considered 
        the global language for business, education, and travel. Learning English opens 
        doors to international opportunities and helps you connect with people from 
        diverse cultures and backgrounds.
      </p>

      {/* Why Learn English */}
      <h2>Why Learn English?</h2>
      <ul>
        <li>Access to top universities and academic resources worldwide.</li>
        <li>Better career prospects and global job opportunities.</li>
        <li>Ease of travel and communication across different countries.</li>
        <li>Connect with people from diverse backgrounds effortlessly.</li>
        <li>Stay updated with global media, news, and entertainment.</li>
      </ul>

      {/* How to Improve */}
      <h2>How to Improve Your English</h2>
      <ol>
        <li>Practice speaking with native speakers or language partners.</li>
        <li>Read English books, articles, and newspapers regularly.</li>
        <li>Watch English movies, shows, and educational YouTube channels.</li>
        <li>Use English in your daily life — messages, notes, and emails.</li>
        <li>Join online English classes or conversation groups.</li>
      </ol>

      {/* English Proficiency Exams */}
      <h2>Popular English Proficiency Exams</h2>
      <p>
        To study or work abroad, students often need to prove their English 
        proficiency through standardized tests. Here are the most popular ones:
      </p>
      <ul className="exam-list">
        <li><strong>IELTS (International English Language Testing System):</strong> Accepted by universities in the UK, Australia, and Canada.</li>
        <li><strong>TOEFL (Test of English as a Foreign Language):</strong> Widely recognized in the USA and other English-speaking countries.</li>
        <li><strong>PTE (Pearson Test of English):</strong> Computer-based and accepted by many universities worldwide.</li>
        <li><strong>Duolingo English Test:</strong> Fast and affordable online test gaining global acceptance.</li>
      </ul>

      {/* Types of English Courses */}
      <h2>Types of English Courses</h2>
      <ul>
        <li><strong>General English:</strong> For everyday communication and travel.</li>
        <li><strong>Academic English:</strong> Prepares students for university-level study.</li>
        <li><strong>Business English:</strong> Focuses on corporate communication and presentations.</li>
        <li><strong>Test Preparation Courses:</strong> For IELTS, TOEFL, and other exams.</li>
      </ul>

      {/* Study Destinations */}
      <h2>Top Study Destinations for English Learners</h2>
      <p>
        Many international students travel abroad to learn English in immersive environments. 
        The most popular destinations include:
      </p>
      <ul className="destination-list">
        <li><strong>United Kingdom:</strong> Home to world-class institutions and classic British English.</li>
        <li><strong>United States:</strong> Diverse accents, vibrant campus culture, and global exposure.</li>
        <li><strong>Australia:</strong> Excellent universities, relaxed lifestyle, and scenic beauty.</li>
        <li><strong>Canada:</strong> Friendly environment and bilingual learning opportunities.</li>
        <li><strong>New Zealand:</strong> Affordable programs and high-quality teaching standards.</li>
      </ul>

      {/* Career Benefits */}
      <h2>Career Benefits of Learning English</h2>
      <ul>
        <li>Enhanced global networking opportunities.</li>
        <li>Better performance in interviews and international meetings.</li>
        <li>Access to multinational job roles and remote work opportunities.</li>
        <li>Confidence to represent your organization globally.</li>
      </ul>

      {/* Tips Section */}
      <h2>Tips for Learning Faster</h2>
      <ol>
        <li>Think in English instead of translating from your native language.</li>
        <li>Listen to English podcasts and audiobooks daily.</li>
        <li>Write short journals or blogs in English.</li>
        <li>Surround yourself with English — change your phone language settings!</li>
        <li>Be consistent — 30 minutes a day is better than 3 hours once a week.</li>
      </ol>

      {/* CTA */}
      <div className="cta-box">
        <p>
          Start your journey to mastering English today and unlock a world of possibilities!
        </p>
        <button className="cta-button" onClick={handleExploreClick}>Explore English Programs</button>
      </div>
    </div>
  );
};

export default English;
