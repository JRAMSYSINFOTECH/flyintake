import React from "react";
import { Link } from "react-router-dom";
import "./Destinations.css";

const DESTINATIONS = [
  {
    slug: "australia",
    name: "Australia",
    img: "https://www.earthsattractions.com/wp-content/uploads/2018/08/sydney_opera-unsplash.jpg",
    info: "Top universities, great lifestyle and strong post-study work rights.",
  },
  {
    slug: "canada",
    name: "Canada",
    img: "https://tse2.mm.bing.net/th/id/OIP.WRgVC8BkTAuUaiseSKwnigHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    info: "High quality education, welcoming culture and PR pathways.",
  },
  {
    slug: "ireland",
    name: "Ireland",
    img: "https://images.adsttc.com/media/images/5bd6/fd00/f197/ccaa/4a00/027c/large_jpg/shutterstock_1116656705.jpg?1540816099",
    info: "Ranked high for safety & quality of life with a vibrant tech scene.",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    img: "https://tse2.mm.bing.net/th/id/OIP.SXxeQoxZ-UVPMnJVQGKaBAHaE7?pid=Api&P=0&h=180",
    info: "Stunning landscapes, research focus and student friendly cities.",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    img: "https://tse2.mm.bing.net/th/id/OIP.aqXrnWXh3IZI7ode4D_p1QHaE7?pid=Api&P=0&h=180",
    info: "World-class unis, shorter degrees and strong global recognition.",
  },
  {
    slug: "usa",
    name: "United States",
    img: "https://a.cdn-hotels.com/gdcs/production79/d567/927124e0-6bc6-4123-b007-e2b235afab1a.jpg",
    info: "Cutting-edge research, diverse campuses and vast course options.",
  },
];

export default function Destinations() {
  return (
    <section className="destinations-sec">
      <div className="destinations-wrap">
        <h2 className="dest-title">Know your destination</h2>

        <div className="dest-grid">
          {DESTINATIONS.map((d) => (
            <div
              key={d.slug}
              className="dest-card"
              style={{ backgroundImage: `url(${d.img})` }}
            >
             
              <div className="dest-label">
                <span>{d.name}</span>
              </div>

             
              <div className="dest-hover">
                <p>{d.info}</p>
                <Link className="dest-btn" to={`/study-destinations/${d.slug.toLowerCase().replace(/ /g, "-")}`}>
                  Discover
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
