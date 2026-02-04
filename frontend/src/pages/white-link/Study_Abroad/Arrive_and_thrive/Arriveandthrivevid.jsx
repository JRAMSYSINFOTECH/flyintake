import React from "react";
import "./ArriveandthriveVid.css";
import { Link } from "react-router-dom";

function Arriveandthrivevid() {
  return (
    <div className="atv-wrapper">
      <div className="atv-container">
        
        {/* Header Section */}
        <div className="atv-header">
          <h1>Supporting you all the way through</h1>
          <p>
            Welcome to an exciting new journey of studying abroad. Get ready for a fascinating adventure where you'll meet new people, forge new friendships, learn new skills and create unforgettable memories. Adjusting in a foreign land can take time at first, but once you settle in, it's sure to be a rewarding experience. We are here to guide and counsel you every step of the way, from accommodation changes to financial planning and migration advice. Your wellbeing is our priority and we've also partnered with mental health professionals to provide you with any support you might need along the away. This is your time to shine and create a remarkable success story, filled with achievements and experiences to cherish for a lifetime.
          </p>
        </div>

        {/* Video Section */}
        <div className="atv-video-section">
          <iframe
            src="https://www.youtube.com/embed/3HL2l6ZCzEg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Contact CTA Section */}
        <div className="atv-cta-section">
          <h2>We're here to support you</h2>
          <p>
            Contact us today for guidance and support throughout your study abroad journey. 
            Our experienced counsellors are ready to help you every step of the way.
          </p>
          <Link to="/pages/white-link/Avail">
            <button>Contact Us</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Arriveandthrivevid;