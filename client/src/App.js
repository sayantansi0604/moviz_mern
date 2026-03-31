import React ,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviePortal from './MoviePortal';
import Watchlist from './Watchlist';
import Profile from './Profile';
import NavB from './Navbar';
import './App.css';

function App() {
  const addW = (movie) => {
    // Change 'm.id' and 'movie.id' to 'm._id' and 'movie._id'
    if (!watchlist.some(m => (m._id || m.id) === (movie._id || movie.id))) 
    {
      setWatchlist([...watchlist, movie]);
      alert(`${movie.title} added to your Watchlist`);
    } 
    else {
      alert(`${movie.title} is already in your watchlist.`);
    }
  };

  const removeW = (movieWId) => {
    // Change 'movie.id' to 'movie._id'
    const updatedList = watchlist.filter(movie => (movie._id || movie.id) !== movieWId);
    setWatchlist(updatedList);
  };
  return (
    <Router>
      <div className="App">
        <NavB/>
        <Routes>
          <Route path="/" element={<MoviePortal addW={addW} />} />
          <Route path="/watchlist" element={<Watchlist watchlist = {watchlist} removeW={removeW}/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;