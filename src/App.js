// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Signup from './signup';
import Login from './login';
import HomePage from './HomePage';
import TrailerPage from './TrailerPage';
import Navbar from './Navbar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <Router>
      <AppContent isAuthenticated={isAuthenticated} />
    </Router>
  );
};

const AppContent = ({ isAuthenticated }) => {
  const location = useLocation();
  const showNavbar = location.pathname === '/home';

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    setQuery(searchTerm);
    if (!searchTerm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/movies/search?query=${searchTerm}`);
      const data = await res.json();
      setSearchResults(data.results || []);
    } catch (error) {
      console.error('Search failed:', error);
      setSearchResults([]);
    }
  };

  return (
    <div className="App">
      {showNavbar && <Navbar onSearch={handleSearch} />}
      <Routes>
        <Route
          path="/"
          element={!isAuthenticated ? <Navigate to="/signup" /> : <Navigate to="/home" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <HomePage query={query} movies={searchResults} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/trailer/:id" element={<TrailerPage />} />
      </Routes>
    </div>
  );
};

export default App;
