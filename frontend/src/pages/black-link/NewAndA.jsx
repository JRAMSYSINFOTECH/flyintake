import React, { useState, useMemo } from "react";
import "./NewAndA.css";

const ARTICLES_PER_PAGE = 9;

/* ===============================
   Trusted NON-IDP Article Sources
================================ */
const allArticles = [
  {
    id: 1,
    title: "The Ultimate Guide to Studying Abroad",
    description: "A complete roadmap for students planning to study overseas.",
    url: "https://www.topuniversities.com/student-info/studying-abroad",
  },
  
  
  {
    id: 4,
    title: "Study in Canada: Complete Guide",
    description: "Everything you need to know about studying in Canada.",
    url: "https://www.educanada.ca/study-plan-etudes/index.aspx?lang=eng",
  },
  {
    id: 5,
    title: "IELTS Preparation Tips",
    description: "Proven strategies to score high in IELTS.",
    url: "https://takeielts.britishcouncil.org/take-ielts/prepare",
  },
 
  {
    id: 7,
    title: "Choosing the Right University",
    description: "How to select the best university for your career goals.",
    url: "https://www.topuniversities.com/student-info/choosing-university",
  },
 
 
  {
    id: 10,
    title: "Health Insurance for International Students",
    description: "Why health insurance is mandatory when studying abroad.",
    url: "https://www.internationalstudent.com/insurance/",
  },
];

const NewAndA = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  /* ===============================
     Filter Logic
  ================================ */
  const filteredArticles = useMemo(() => {
    const term = search.toLowerCase();
    return allArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(term) ||
        article.description.toLowerCase().includes(term)
    );
  }, [search]);

  /* ===============================
     Pagination
  ================================ */
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  const currentArticles = filteredArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  /* ===============================
     Safe External Navigation
  ================================ */
  const openArticle = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="news-articles-section">
      <div className="news-articles-container">

        {/* Header */}
        <h1 className="news-articles-heading">
          <span className="underline-green">I</span>NTAKE Insights
        </h1>

        {/* Search */}
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        {/* Articles */}
        <div className="articles-grid">
          {currentArticles.length ? (
            currentArticles.map((article) => (
              <article key={article.id} className="article-card">
                <h2>{article.title}</h2>
                <p>{article.description}</p>

                <button
                  className="read-more-btn"
                  onClick={() => openArticle(article.url)}
                >
                  Read Full Article
                </button>
              </article>
            ))
          ) : (
            <p className="no-results">No articles found.</p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </button>

            <span>
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewAndA;
