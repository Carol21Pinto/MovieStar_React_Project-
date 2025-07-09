import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('storage'));
    window.location.href = '/login'; // or use navigate() if you prefer
  };

  const goToWatchlist = () => {
    navigate('/watchlist');
  };

  return (
    <nav className="navbar">
      <div className="logo">MOVIE|STAR</div>

      <div className="search-bar-logout">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={handleInputChange}
        />
        <button className="watchlist-btn" onClick={goToWatchlist}>📽 Watchlist</button>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
