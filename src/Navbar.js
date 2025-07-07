import './Navbar.css';

const Navbar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('storage'));
    window.location.href = '/login'; // or use navigate() if you prefer
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
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
