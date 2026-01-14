import React, { useState } from "react";


function WhereToStudyFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "What is studying abroad?",
      content: (
        <div>
          <p>
            Studying abroad is the experience of living overseas in order to acquire a foreign education. It can take many forms – from a few weeks in a...
          </p>
        </div>
      ),
    },
    {
      title: "Why study abroad vs study locally?",
      content: (
        <div>
          <p>
            While studying locally is the easier option, in the longer run studying abroad offers unique opportunities and experiences that cannot be found at home. For more information, read this article.
          </p>
        </div>
      ),
    },
    {
      title: "What are the benefits of studying abroad?",
      content: (
        <div>
          <p>
            Studying abroad offers a wide range of benefits, from inspiring a global mindset to helping you learn new s...
          </p>
        </div>
      ),
    },
    {
      title: "What’s the experience like?",
      content: (
        <div>
          <p>
            Studying abroad is a transformative experience of personal growth that helps you broaden your perspective, develop independence, self-confidence and...
          </p>
        </div>
      ),
    },
    {
      title: "How much does it cost to study abroad?",
      content: (
        <div>
          <p>
            Studying abroad is not as expensive as you may think! Use our cost of living calculator to estimate how much you will need to cover all your expenses as an international student. We also connect you to over 5,100 scholarships across our partner university network, plus you may be eligible for study loans too. Reach out to us to explore your options.
          </p>
        </div>
      ),
    },
  ];

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="asked-questions">
      <h2 className="accordion-title">
        Frequently Asked Questions
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

export default WhereToStudyFAQ;
