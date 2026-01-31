import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Destinations.css";

const DESTINATIONS = [
  
  
  {
    slug: "uk",
    name: "United Kingdom",
    img: "https://tse2.mm.bing.net/th/id/OIP.aqXrnWXh3IZI7ode4D_p1QHaE7?pid=Api&P=0&h=180",
    info: "World-class unis, shorter degrees and strong global recognition.",
    color: "#F97316"
  },

  {
    slug: "usa",
    name: "United States",
    img: "https://a.cdn-hotels.com/gdcs/production79/d567/927124e0-6bc6-4123-b007-e2b235afab1a.jpg",
    info: "Cutting-edge research, diverse campuses and vast course options.",
    color: "#003D82"
  },
  {
    slug: "canada",
    name: "Canada",
    img: "https://tse2.mm.bing.net/th/id/OIP.WRgVC8BkTAuUaiseSKwnigHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    info: "High quality education, welcoming culture and PR pathways.",
    color: "#FF6B35"
  },
  {
    slug: "australia",
    name: "Australia",
    img: "https://www.earthsattractions.com/wp-content/uploads/2018/08/sydney_opera-unsplash.jpg",
    info: "Top universities, great lifestyle and strong post-study work rights.",
    color: "#2563EB"
  },
  {
    slug: "germany",
    name: "Germany",
    img: "https://tse2.mm.bing.net/th/id/OIP.SXxeQoxZ-UVPMnJVQGKaBAHaE7?pid=Api&P=0&h=180",
    info: "Engineering excellence, affordable education and innovation hub.",
    color: "#FF8C42"
  },
  {
    slug: "ireland",
    name: "Ireland",
    img: "https://images.adsttc.com/media/images/5bd6/fd00/f197/ccaa/4a00/027c/large_jpg/shutterstock_1116656705.jpg?1540816099",
    info: "Ranked high for safety & quality of life with a vibrant tech scene.",
    color: "#0052A5"
  },
  {
    slug: "europe",
    name: "Europe",
    img: "https://tse2.mm.bing.net/th/id/OIP.WRgVC8BkTAuUaiseSKwnigHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    info: "Diverse cultures, historic institutions and Schengen mobility.",
    color: "#FF6B35"
  }
];

export default function Destinations() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="destinations-sec">
      {/* Animated background elements */}
      <div className="dest-bg-wrapper">
        <div className="dest-flight-path path-1"></div>
        <div className="dest-flight-path path-2"></div>
        <div className="dest-flight-path path-3"></div>
      </div>

      <div className="destinations-wrap">
        <div className="dest-header">
          <div className="dest-header-content">
            <div className="dest-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Study Abroad</span>
            </div>
            <h2 className="dest-title">
              Explore Your
              <span className="dest-title-highlight"> Dream Destination</span>
            </h2>
            <p className="dest-subtitle">
              We serve students across 7 premier destinations worldwide
            </p>
          </div>
        </div>

        <div className="dest-grid">
          {DESTINATIONS.map((dest, index) => (
            <div
              key={dest.slug}
              className={`dest-card ${hoveredIndex === index ? 'is-hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ '--accent-color': dest.color }}
            >
              {/* Image layer */}
              <div className="dest-card-image">
                <img src={dest.img} alt={dest.name} />
                <div className="dest-card-overlay"></div>
              </div>

              {/* Accent border */}
              <div className="dest-card-border"></div>

              {/* Flight icon */}
              <div className="dest-flight-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                </svg>
              </div>

              Content
              <div className="dest-card-content">
                <div className="dest-card-country">
                  <h3>{dest.name}</h3>
                  <div className="dest-card-arrow">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <p className="dest-card-info">{dest.info}</p>
                <Link 
                  className="dest-card-link" 
                  to={`/study-destinations/${dest.slug}`}
                >
                  <span>Explore Programs</span>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>

              Decorative corner
              <div className="dest-card-corner"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}