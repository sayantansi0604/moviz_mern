const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// 1. SEED: Populate the database with your 12 movies
// Access this once at: http://localhost:5000/api/movies/seed
router.get('/seed', async (req, res) => {
  try {
    const movieData = [
      { id: 1, title: "Interstellar", image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX1000_.jpg", rating: 8.6, year: 2014, genre: "Sci-Fi" },
      { id: 2, title: "Se7en", image: "https://hpshplaidline.org/wp-content/uploads/2025/01/screenshot-2025-01-17-at-2.39.27e280afpm.png", rating: 8.6, year: 1995, genre: "Thriller" },
      { id: 3, title: "The Perks of Being a Wallflower", image: "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Perks_of_Being_a_Wallflower_Poster.jpg", rating: 7.9, year: 2012, genre: "Rom-Com" },
      { id: 4, title: "Harry potter and the Philosopher's stone", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMM2Sqwp1Bp6RyMVc3AOz3fegBwsooQ1rYNg&s", rating: 7.7, year: 2001, genre: "Fantasy" },
      { id: 5, title: "The Dark Knight", image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg", rating: 9.1, year: 2008, genre: "Action" },
      { id: 6, title: "Baishe Srabon", image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/baishe-srabon-iemv001695-24-03-2017-15-55-38.jpg", rating: 8.1, year: 2011, genre: "Thriller" },
      { id: 7, title: "The Devils Advocate", image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Devilsadvocate.jpg/250px-Devilsadvocate.jpg", rating: 7.5, year: 1997, genre: "Psychological Thriller" },
      { id: 8, title: "3 idiots", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/3_idiots_poster.jpg/250px-3_idiots_poster.jpg", rating: 8.4, year: 2009, genre: "Comedy" },
      { id: 9, title: "Rio", image: "https://lumiere-a.akamaihd.net/v1/images/rio_584x800_7a83f253.jpeg", rating: 6.9, year: 2011, genre: "Animation" },
      { id: 10, title: "Captain America: The Winter Soldier", image: "https://images.moviesanywhere.com/2cde825213e154ea76959084c78d026c/d1a27851-992c-4cd2-bf10-2228a8a77d8f.jpg", rating: 7.7, year: 2014, genre: "Sci-fi" },
      { id: 11, title: "The Conjuring", image: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg", rating: 7.5, year: 2013, genre: "Horror" },
      { id: 12, title: "Jab We Met", image: "https://stat4.bollywoodhungama.in/wp-content/uploads/2020/04/75-10.jpg", rating: 7.9, year: 2007, genre: "Rom-Com" }
    ];

    await Movie.deleteMany({}); // Clear collection
    const createdMovies = await Movie.insertMany(movieData);
    res.status(201).json({ message: "Database Seeded!", data: createdMovies });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. GET: Fetch all movies
// Access at: http://localhost:5000/api/movies/all
router.get('/all', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. DELETE: Remove a movie by ID (Optional for later)
router.delete('/:id', async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.json({ message: "Movie deleted from database" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;