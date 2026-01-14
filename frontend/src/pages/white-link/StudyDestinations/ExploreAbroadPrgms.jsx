import React from "react";
import { Link } from "react-router-dom";
import "./ExploreAbroadPrgms.css";

const programs = [
  {
    title: "Study Abroad in Australia",
    path: "/study-destinations/australia",
    img: "https://www.earthsattractions.com/wp-content/uploads/2018/08/sydney_opera-unsplash.jpg",
    desc: "Australia offers world-class education, vibrant student life, and unique cultural experiences. Discover top universities, scholarships, and expert guidance for your study abroad journey."
  },
  {
    title: "Study Abroad in the UK",
    path: "/study-destinations/uk",
    img: "https://tse2.mm.bing.net/th/id/OIP.SXxeQoxZ-UVPMnJVQGKaBAHaE7?pid=Api&P=0&h=180",
    desc: "The UK is renowned for its historic universities, diverse culture, and excellent academic standards. Explore opportunities and support for your study abroad adventure."
  },
  {
    title: "Study Abroad in Ireland",
    path: "/study-destinations/ireland",
    img: "https://a.cdn-hotels.com/gdcs/production79/d567/927124e0-6bc6-4123-b007-e2b235afab1a.jpg",
    desc: "Ireland combines rich heritage with innovative education. Find out about top institutions, scholarships, and student life in Ireland."
  },
  {
    title: "Study Abroad in New Zealand",
    path: "/coming-soon", // Path for New Zealand
    img: "https://tse2.mm.bing.net/th/id/OIP.aqXrnWXh3IZI7ode4D_p1QHaE7?pid=Api&P=0&h=180",
    desc: "New Zealand offers stunning landscapes and high-quality education. Learn about universities, scholarships, and student support."
  },
  {
    title: "Study Abroad in the USA",
    path: "/study-destinations/usa",
    img: "https://tse2.mm.bing.net/th/id/OIP.WRgVC8BkTAuUaiseSKwnigHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "The USA is home to top-ranked universities and diverse programs. Discover your options for studying in America."
  },
  {
    title: "Study Abroad in Canada",
    path: "/study-destinations/canada",
    img: "https://tse2.mm.bing.net/th/id/OIP.aqXrnWXh3IZI7ode4D_p1QHaE7?pid=Api&P=0&h=180",
    desc: "Canada is known for its welcoming environment and excellent education. Explore Canadian universities, scholarships, and student life."
  },
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