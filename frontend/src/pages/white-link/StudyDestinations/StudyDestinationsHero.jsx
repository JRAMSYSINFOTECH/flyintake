import React from 'react';
import './StudyDestinationsHero.css';

const StudyDestinationsHero = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="study-dest-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="study-dest-hero__overlay">
        <div className="study-dest-hero__content">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default StudyDestinationsHero;
