import React, { useState } from "react";


function HowToApplyHelp () {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "1. Benefits of studying abroad",
      content: (
        <div>
          <p>
            From quality education, personal growth to career progression, discover how studying abroad can help you succeed through these helpful articles and videos.
          </p>
          <ul>
            <li>What is studying abroad</li>
            <li>Why study abroad</li>
            <li>Study abroad vs study locally</li>
            <li>Benefits</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2. The study abroad experience",
      content: (
        <div>
          Learn all about what it’s like to experience life in a different country.
          <ul><li>whats the experience like</li> <li>How much does it typically cost</li></ul>
        </div>
      ),
    },
    {
      title: "3. Breaking down the steps",
      content: (
        <div>
          Not sure where to start? Follow these<ul><li>simple steps</li></ul>
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
        Discover how studying abroad can help you
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

export default HowToApplyHelp;