import React, { useState, useEffect } from 'react';
import { Info, Trash2 } from "lucide-react";
import './ShortList.css';

const ShortList = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const fetchFavorites = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/Favorite", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setFavorites(data.data);
      } else {
        setError("Failed to load favorites");
      }
    } catch (err) {
      setError("Cannot connect to server");
    }
    setLoading(false);
  };

  const removeFavorite = async (name) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch(`/api/Favorite/${name}`, {
        method: 'DELETE',
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        setFavorites(favorites.filter(fav => fav.name !== name));
        // Dispatch event to update navbar count
        window.dispatchEvent(new Event('favoritesUpdated'));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchFavorites();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="saved-courses-container">
        <h2 className="saved-title">
          <span className="underline">S</span>aved courses
        </h2>
        <p>Loading your favorites...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="saved-courses-container">
        <h2 className="saved-title">
          <span className="underline">S</span>aved courses
        </h2>
        <p className="error-text">{error}</p>
      </div>
    );
  }

  return (
    <div className="saved-courses-container">
      <h2 className="saved-title">
        <span className="underline">S</span>aved courses
      </h2>

      <p className="saved-description">
        Courses you have saved appear here, explore our new feature that sorts based on eligibility!
        Let us help set you up for the best success.
      </p>

      {!user ? (
        <div className="save-box">
          <Info size={20} className="info-icon" />
          <div>
            <p className="save-text">
              <strong>Save your shortlists to compare later</strong>
            </p>
            <p className="save-link">
              <a href="/pages/white-link/Sign_Up">Create an account today</a> to access your favourites on any device.
            </p>
          </div>
        </div>
      ) : favorites.length === 0 ? (
        <h3 className="no-course-text">No Shortlist courses Found</h3>
      ) : (
        <div className="favorites-list">
          {favorites.map((favorite, index) => (
            <div key={index} className="favorite-item">
              <div className="favorite-info">
                <h4>{favorite.name}</h4>
                <p>{favorite.country}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFavorite(favorite.name)}
                title="Remove from favorites"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShortList;
