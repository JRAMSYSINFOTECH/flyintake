import React, { useState } from "react";


function StdyabroadOptions () {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "1. Choose a destination",
      content: (
        <div>
          <p>
           You can choose from six amazing countries to study abroad in. Click the links below to learn more about each destination including what it’s like to live there and post education career and residency options.
          </p>
          <ul>
            <li>Uk</li>
            <li>Australia</li>
            <li>Newzland</li>
            <li>canada</li>
            <li>ireland</li>
            <li>USA</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2. Explore costs",
      content: (
        <div>
          Find out how much things cost in your chosen destination, and what options you have after your study by using our
          <ul><li>cost calculator</li></ul>
        </div>
      ),
    },
    {
      title: "3. Pick a study level",
      content: (
        <div>
          Undergraduate, graduate, PhD or pathway courses, learn which is appropriate for you and what is required before you start studying across each level.
          <li>Study Masters</li>
           <li>Study bachelors</li>
            <li>Study phd</li>
        </div>
      ),
    },
    {
      title: "4. Study abroad guide for parents",
      content: (
        <div>
         Learn more about how you can support your child’s overseas education journey with helpful resources such as articles and videos on what to expect and what it’s like living in each country.
        </div>
      ),
    },
    {
      title: "5. Hear from our students",
      content: (
        <div>
          <p>
            If you’re interested in studying overseas, you can read and watch videos to hear first-hand experiences from our students to inform your study abroad decisions.
          </p>
        </div>
      ),
    },
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion-outer">
      <h2 className="accordion-title">
        Explore study abroad options
      </h2>
      <div className="accordion-list">
        {sections.map((section, idx) => (
          <div key={idx} className="accordion-item">
            <button
              className="accordion-header"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{section.title}</span>
              <span className="accordion-icon">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="accordion-content">{section.content}</div>
            )}
            <div className="accordion-divider" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default  StdyabroadOptions;