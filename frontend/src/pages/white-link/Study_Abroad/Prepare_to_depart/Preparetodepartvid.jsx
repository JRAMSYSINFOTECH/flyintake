import React from "react";
import "./PreparetodepartVid.css";
import { useNavigate } from "react-router-dom";

function Preparetodepartvid() {
  const navigate = useNavigate();
  
  const handleNav = () => {
    navigate("/pages/white-link/Avail");
  };

  return (
    <div className="ptd-wrapper">
      <div className="ptd-container">
        
        {/* Header Section */}
        <div className="ptd-header">
          <h2>Let's set you up for the big move</h2>
          <p>
            The countdown has begun and you're all ready to fly off! As thrilling as it is, we know it's equally nerve-wracking to be leaving the comfort of your home for a foreign land. We're here to make the transition smooth and easy for you. From packing tips, arrival support to helping you set up, we're here to help. We'll also assist you with opening bank accounts, finalising your accommodation and other essential services so you can focus on your studies and enjoy this incredible new chapter of your life.
          </p>
        </div>

        {/* Video Section */}
        <div className="ptd-video-section">
          <iframe
            src="https://www.youtube.com/embed/eN2hKOynBIY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

export default Preparetodepartvid;