const express = require('express');
const router = express.Router();
const {
  searchMovies,
  getMovieTrailer,
  getTrendingMovies,
  getUpcomingMovies,
  getFilteredTrendingMovies,
  getFilteredUpcomingMovies
} = require('../controllers/movieController');

// Original routes
router.get('/trending', getTrendingMovies);
router.get('/upcoming', getUpcomingMovies);
router.get('/search', searchMovies);
router.get('/trailer/:id', getMovieTrailer);

// ✅ New filtered routes
router.get('/trending/filtered', getFilteredTrendingMovies);
router.get('/upcoming/filtered', getFilteredUpcomingMovies);

module.exports = router;
