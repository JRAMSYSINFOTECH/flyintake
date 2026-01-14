import React from "react";
import "./AskIntake.css";

function AskIntake() {
  const videos = [
  "https://www.youtube.com/embed/1kfugHv60ag",
  "https://www.youtube.com/embed/xC0j2T7h1KQ",
  "https://www.youtube.com/embed/0zM3nApSvMg",
  "https://www.youtube.com/embed/9bZkp7q19f0",
];


  // Convert shorts URLs to embeddable format
  const getEmbedUrl = (url) => {
    const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className="shorts-gallery">
      {videos.map((url, idx) => (
        <div className="shorts-video" key={idx}>
          <iframe
            width="220"
            height="390"
            src={getEmbedUrl(url)}
            title={`YouTube Short ${idx + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default AskIntake;