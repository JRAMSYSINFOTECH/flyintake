import React from "react";
import "./HowDoApplyVid.css"; // Assuming a CSS file for this component


function Howdoaplyvid() {
  return (
    <div className="hdap">
      <div className="vid-content">
        <p>
          Applying to universities abroad can seem daunting, but with the right guidance, it's a straightforward process. Watch this video to get a clear overview of the steps involved in submitting a successful application to your dream university.
        </p>
      </div>

      <div className="vid">
        <div style={{ margin: "2rem 0" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/lrgO0qopsR0"
            title="How to Apply to Universities Abroad"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Howdoaplyvid;