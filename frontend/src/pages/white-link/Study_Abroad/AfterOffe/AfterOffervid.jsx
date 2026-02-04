import React from "react";
import "./AfterOfferVid.css";
import { useNavigate } from "react-router-dom";

function AfterOfferVid() {
  const navigate = useNavigate();
  
  const handleNav = () => {
    navigate("/pages/white-link/Avail");
  };

  return (
    <div className="aov-wrapper">
      <div className="aov-container">
        
        {/* Header */}
        <div className="aov-header">
          <h1>Accepting your offer</h1>
        </div>

        {/* Video Section */}
        <div className="aov-video-section">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/4kQXsmLKNe4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Main Content */}
        <div className="aov-content">
          <p>
            Congratulations! An approved university application means you're one step closer to achieving your dream to study abroad. 
            It's an exciting time but it's natural to feel nervous. INTAKE is here to support you at every step of your journey. 
            You can speak to one of our experienced counsellors to guide you through the process after you receive an offer. 
            We'll also help you with student visas, money transfer, health cover and accommodation before your move. 
            So take a deep breath, and make a confident decision with the reassurance that we have your back every step of the way. 
            From accepting your offer to preparing for your departure, there are a few key steps to ensure a smooth transition. 
            We have helped thousands of students like you navigate this stage, and we can help you too.
          </p>
        </div>

        {/* CTA Section */}
        <div className="aov-cta-section">
          <h2>Speak to our study abroad experts</h2>
          <p>
            Have questions about your offer or next steps? Our experienced counsellors are here to guide you through
            applications, visas, accommodation, and more. Get personalised support at every stage of your journey.
          </p>
          <button onClick={handleNav}>Contact Us</button>
        </div>

      </div>
    </div>
  );
}

export default AfterOfferVid;