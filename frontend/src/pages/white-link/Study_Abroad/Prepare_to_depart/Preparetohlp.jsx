import React, { useState } from "react";


function Preparetohlp () {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "1. Who can help me",
      content: (
        <div>
          <p>
           Download the Intake Live app to refine your search or book a free appointment with an INTAKE counsellor.
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
      title: "2. Check your eligibility",
      content: (
        <div>
          Learn all about what it’s like to experience life in a different country.
          <ul><li>whats the experience like</li> <li>How much does it typically cost</li></ul>
        </div>
      ),
    },
    {
      title: "3. Check the application guidelines",
      content: (
        <div>
          Not sure where to start? Follow these<ul><li>simple steps</li></ul>
        </div>
      ),
    },
    {
      title: "4. Check English proficiency requirements",
      content: (
        <div>
         Learn more about how you can support your child’s overseas education journey with helpful resources such as articles and videos on what to expect and what it’s like living in each country.
        </div>
      ),
    },
    {
      title: "5. Submit your application",
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
        Quick references
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

export default Preparetohlp;