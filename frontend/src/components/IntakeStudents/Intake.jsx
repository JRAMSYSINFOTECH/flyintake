import React, { useEffect, useRef, useState } from "react";
import "./Intake.css";
const videos = [
  { id: "vfwZZDcmeQo", title: "Study Abroad Journey" }, // Study Abroad: Your Journey Starts Here
  { id: "QezXb5N1lzk", title: "why do you study in abroad" }, 
  { id: "O6pNMthfXto", title: "visa interview" }, 
  { id: "YSHSHJKNi_U", title: "DO not select" },
  { id: "yBFCVuvkB2Q", title: "How You Can Get a TECH Job" }, 
  { id: "qU07t-VHrew", title: "Top 5 countries" }, 
];

const IDP = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [currentVisibleCount, setCurrentVisibleCount] = useState(4); // Default to 4
  const playersRef = useRef({});

  // Function to determine visible count based on screen width
  const getVisibleCount = () => {
    if (window.innerWidth <= 480) {
      return 1; // 1 video on very small screens
    } else if (window.innerWidth <= 768) {
      return 2; // 2 videos on mobile (as requested)
    } else if (window.innerWidth <= 1024) {
      return 3; // 3 videos on tablets/smaller desktops
    }
    return 4; // 4 videos on larger screens
  };



  // Load YouTube API once
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }
  }, []);

  // Update visible count on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setCurrentVisibleCount(getVisibleCount());
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial count
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause all videos
  const pauseAll = () => {
    Object.values(playersRef.current).forEach((player) => {
      if (player?.pauseVideo) player.pauseVideo();
    });
  };

  const prevSlide = () => {
    pauseAll();
    setStartIndex((prev) => Math.max(prev - currentVisibleCount, 0));
  };

  const nextSlide = () => {
    pauseAll();
    setStartIndex((prev) => {
      const nextIndex = prev + currentVisibleCount;
      return nextIndex >= videos.length ? prev : nextIndex;
    });
  };

  const visibleVideos = videos.slice(startIndex, startIndex + currentVisibleCount);

  return (
    <section className="idp-section1">
      <div className="idp-container1">
        <h2 className="headi">Featured Videos: Study Abroad & English</h2>
        <p>Gain insights into studying abroad and improving your English skills.</p>

        <div className="idp-carousel1">
          {visibleVideos.map((video, index) => (
            <div className="video-card1" key={video.id}>
              <div className="iframe-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
                  title={video.title}
                  ref={(el) => {
                    if (el && window.YT?.Player && !playersRef.current[video.id]) {
                      playersRef.current[video.id] = new window.YT.Player(el, {
                        events: {
                          onStateChange: (e) => {
                            if (e.data === window.YT.PlayerState.PLAYING) {
                              pauseAll();
                              playersRef.current[video.id].playVideo();
                            }
                          },
                        },
                      });
                    }
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p>{video.title}</p>
            </div>
          ))}
        </div>

        <div className="carousel-buttons1">
          <button onClick={prevSlide} disabled={startIndex === 0}>
            &lt;
          </button>
          <button
            onClick={nextSlide}
            disabled={startIndex + currentVisibleCount >= videos.length}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default IDP;
