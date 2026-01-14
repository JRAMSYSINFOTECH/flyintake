import React from "react";
import "./ArriveandthriveVid.css";
function Arriveandthrivevid() {
  return (
    <div className="hdap">
      <div>
       
        <h1>Supporting you all the way through</h1>
        <p>
         Welcome to an exciting new journey of studying abroad. Get ready for a fascinating adventure where you’ll meet new people, forge new friendships, learn new skills and create unforgettable memories. Adjusting in a foreign land can take time at first, but once you settle in, it’s sure to be a rewarding experience. We are here to guide and counsel you every step of the way, from accommodation changes to financial planning and migration advice. Your wellbeing is our priority and we’ve also partnered with mental health professionals to provide you with any support you might need along the away. This is your time to shine and create a remarkable success story, filled with achievements and experiences to cherish for a lifetime.  </p>
       
        
      </div>

      <div className="vid">
        <div style={{ margin: "2rem 0" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/video4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="vid-txt">
          <h2>One account for all your study abroad needs</h2>
          <h3>
            Create your profile and unlock a wide array of features including personalised recommendations, fast-tracked applications and much more.
          </h3>
          <button>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Arriveandthrivevid;