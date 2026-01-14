import React from "react";
import "./PreparetodepartVid.css";
function Preparetodepartvid() {
  return (
    <div className="hdap">
      <div>
        
        <h2>Let's set you up for the big move</h2>
       
       
        <p>
          The countdown has begun and you’re all ready to fly off! As thrilling as it is, we know it’s equally nerve-wracking to be leaving the comfort of your home for a foreign land. We’re here to make the transition smooth and easy for you. From packing tips, arrival support to helping you set up, we’re here to help. We’ll also assist you with opening bank accounts, finalising your accommodation and other essential services so you can focus on your studies and enjoy this incredible new chapter of your life.  </p>
      </div>

      <div className="vid">
        <div style={{ margin: "2rem 0" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/video3"
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

export default Preparetodepartvid;