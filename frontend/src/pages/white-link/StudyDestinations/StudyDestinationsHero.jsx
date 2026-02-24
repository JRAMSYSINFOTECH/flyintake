import React from 'react';
import './StudyDestinationsHero.css';

// 80 country codes — Flagpedia CDN serves free PNG flags at:
// https://flagcdn.com/w80/{code}.png
const countryCodes = [
  'us','gb','ca','au','de','fr','jp','nl','sg','nz',
  'se','ch','ie','it','es','kr','cn','dk','no','fi',
  'at','be','pt','pl','cz','hk','ae','mx','br','in',
  'za','ar','cl','tr','gr','ro','hu','ua','ru','sa',
  'il','eg','ng','ke','th','vn','ph','id','my','pk',
  'us','gb','ca','au','de','fr','jp','nl','sg','nz',
  'se','ch','ie','it','es','kr','cn','dk','no','fi',
  'at','be','pt','pl','cz','hk','ae','mx','br','in',
];

const StudyDestinationsHero = () => {
  return (
    <section className="hero-wrap">

      {/* Real flag image grid */}
      <div className="hero-flags" aria-hidden="true">
        {countryCodes.map((code, i) => (
          <div
            key={i}
            className="hero-flag-cell"
            style={{
              '--dur': `${3 + (i % 6) * 0.5}s`,
              '--delay': `${(i * 0.12) % 3}s`,
            }}
          >
            <img
              src={`https://flagcdn.com/w80/${code}.png`}
              alt=""
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="hero-overlay" />
      <div className="hero-glow" />
      <div className="hero-rule" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-tag">✦ Global Study Destinations</div>

        <h1 className="hero-h1">
          Choose Your<br /><span>Country.</span>
        </h1>
        <div className="hero-h2">Shape Your Future.</div>

        <div className="hero-divider">
          <div className="hero-divider-line" />
          <div className="hero-divider-dot" />
          <div className="hero-divider-line" />
        </div>

        <p className="hero-body">
          From the lecture halls of Oxford to the campuses of Tokyo —
          discover the world's best study destinations and find the country
          that's right for you.
        </p>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll">
        <div className="hero-scroll-bar" />
        <span className="hero-scroll-label">scroll</span>
      </div>

    </section>
  );
};

export default StudyDestinationsHero;