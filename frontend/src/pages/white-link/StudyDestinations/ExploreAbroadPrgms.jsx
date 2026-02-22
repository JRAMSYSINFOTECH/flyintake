import React from "react";
import { Link } from "react-router-dom";
import "./ExploreAbroadPrgms.css";

const programs = [
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

function ExploreAbroadPrgms() {
  return (
    <div className="explore-abroad-container">
      <h2 className="explore-abroad-title">
        Explore Study Abroad Programs: The Future Starts Here
      </h2>
      <div className="explore-abroad-grid">
        {programs.map((prg, idx) => (
          <Link to={prg.path} className="explore-abroad-card" key={idx}>
            <div
              className="explore-abroad-img"
              style={{
                backgroundImage: `url(${prg.img})`
              }}
            >
              <div className="explore-abroad-overlay">
                <span className="explore-abroad-card-title">{prg.title}</span>
              </div>
            </div>
            <div className="explore-abroad-hover-content">
              <span className="explore-abroad-card-title">{prg.title}</span>
              <p className="explore-abroad-card-desc">{prg.desc}</p>
              <div className="explore-abroad-discover-btn">
                Discover
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ExploreAbroadPrgms;