import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('storage'));
    window.location.href = '/login';
  };

  const toggleProfile = () => setShowProfile(!showProfile);
  const goToWatchlist = () => navigate('/watchlist');

  return (
    <nav className="navbar">
      <div className="logo">MOVIE|STAR</div>

      <div className="search-bar-logout">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="watchlist-btn" onClick={goToWatchlist}>📽 Watchlist</button>

        {user && (
          <div className="profile-wrapper">
            <img
              src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              className="profile-icon"
              onClick={toggleProfile}
              alt="Profile"
            />

            {showProfile && (
              <div className="profile-dropdown">
                <p><strong>{user.name}</strong></p>
                <p>{user.email}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
