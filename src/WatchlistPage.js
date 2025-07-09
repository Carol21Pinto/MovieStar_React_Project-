import React, { useContext } from 'react';
import { WatchlistContext } from './App';
import { useNavigate } from 'react-router-dom';
import './App.css';

const WatchlistPage = () => {
  const { watchlist, setWatchlist } = useContext(WatchlistContext);
  const navigate = useNavigate();

  const handleRemove = (movieId) => {
    const updated = watchlist.filter((movie) => String(movie.id) !== String(movieId));
    setWatchlist(updated);
    alert('❌ Movie removed from watchlist');
  };

  const handleCardClick = (movieId) => {
    navigate(`/trailer/${movieId}`);
  };

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div>
      {/* ✅ Home Button */}
      <button
        style={{
          backgroundColor: '#f44336',
          color: 'white',
          padding: '10px 16px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '16px',
          margin: '1rem',
        }}
        onClick={goToHome}
      >
        ⬅ Home
      </button>

      <h2 style={{ textAlign: 'center' }}>🎞️ Your Watchlist</h2>

      {watchlist.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No movies in watchlist</p>
      ) : (
        <div className="movie-results">
          {watchlist.map((movie) => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => handleCardClick(movie.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="poster-container">
                <img
                  src={
                    movie.poster_path?.startsWith('http')
                      ? movie.poster_path
                      : movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                      : 'https://via.placeholder.com/200x300?text=No+Image'
                  }
                  alt={movie.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/200x300?text=No+Image';
                  }}
                />
              </div>

              <div className="movie-info">
                <h3>{movie.title}</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent navigation
                    handleRemove(movie.id);
                  }}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
