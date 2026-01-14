import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Related.css";

export const articles = [
  {
    id: 1,
    title: "Study Abroad | Student Loans Vs Scholarships To Fund Your Dream Degree",
    excerpt:
      "Studying abroad need not be as expensive as you think. Here is a list of the best scholarships available to help fund your...",
    image: "/assets/Ai.jpg",
  },
  {
    id: 2,
    title: "5 Ways to help fund your overseas degree",
    excerpt:
      "Studying abroad need not be as expensive as you think. Here is a list of the best scholarships available to help fund your...",
    image: "/assets/5-way.jpg",
  },
  {
    id: 3,
    title: "University tuition fees for international students in Canada",
    excerpt:
      "Want to know about the cost of studying in Canada? To know more about exact university tuition fees and study costs, check...",
    image: "/assets/Blog.jpg",
  },
  {
    id: 4,
    title: "Costs of living in Ireland",
    excerpt:
      "Let's explore typical expenses for students living in Ireland and how to budget effectively while studying abroad...",
    image: "/assets/Study.jpg",
  },
  {
    id: 5,
    title: "Tuition and living costs in Australia",
    excerpt:
      "Learn more about how much it costs to study and live as a student in Australia and ways to manage your budget efficiently...",
    image: "/assets/tuition.jpg",
  },
];

const Related_Articles = ({ className = "" }) => {
  const trackRef = useRef(null);
  const navigate = useNavigate();

  const scrollBy = (dir = "left") => {
    const node = trackRef.current;
    if (!node) return;
    const distance = node.clientWidth * 0.8; // scroll one viewport width
    node.scrollBy({
      left: dir === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <div className={`related-container ${className}`}>
      <h2 className="heading" style={{ textAlign: "center" }}>Related Articles</h2>

      <div className="carousel-wrapper">
        <div className="related-articles" ref={trackRef}>
          {articles.map((article) => (
            <button
              key={article.id}
              className="article"
              type="button"
              onClick={() => navigate(`/articles/${article.id}`)}
            >
              <img src={article.image} alt={article.title} />
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </button>
          ))}
        </div>

        <div className="nav-buttons" >
          <button className="btn2" onClick={() => scrollBy("left")}>
            &#8249;
          </button>
          <button className="btn2" onClick={() => scrollBy("right")}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Related_Articles;
