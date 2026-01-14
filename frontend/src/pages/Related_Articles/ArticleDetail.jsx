import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Related.css";
import { articles } from "./Related_Articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const articleId = Number(id);
  const article = articles.find((a) => a.id === articleId) || articles[0];

  return (
    <div className="related-detail-container">
      <p className="breadcrumb-text" style={{ margin: "16px 0" }}>
        Study Abroad / Articles / {article.title}
      </p>

      <article className="article-detail">
        <h1 className="article-detail-title">{article.title}</h1>
        <img src={article.image} alt={article.title} className="article-detail-image" />
        <p className="article-detail-body">
          {article.excerpt} {/* You can later replace this with full article content */}
        </p>
      </article>

      <div style={{ marginTop: "24px" }}>
        <Link to="/pages/Related_Articles" className="article-back-link">
          ← Back to related articles
        </Link>
      </div>
    </div>
  );
}


