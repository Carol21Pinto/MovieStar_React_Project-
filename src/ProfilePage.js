import React from 'react';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  if (!user) {
    return <p style={{ textAlign: 'center' }}>User not logged in</p>;
  }

  return (
    <div className="profile-popup">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://www.gstatic.com/images/branding/product/2x/avatar_circle_blue_512dp.png"
            alt="Profile"
            className="profile-avatar"
          />
          <div className="profile-name">Hi, {user.name || 'User'}!</div>
        </div>
        <div className="profile-email">{user.email}</div>

        <button className="profile-home-btn" onClick={() => navigate('/home')}>
          🔙 Go to Home
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
