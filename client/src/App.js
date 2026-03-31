import React ,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviePortal from './MoviePortal';
import Watchlist from './Watchlist';
import Profile from './Profile';
import NavB from './Navbar';
import './App.css';

function App() {
  const [watchlist,setWatchlist] =useState([]);
  const addW = (movie) =>{
    if(!watchlist.some(m => m.id === movie.id))
    {
      setWatchlist([...watchlist,movie]);
      alert(`${movie.title} added to your Watchlist`)
    }
    else {
      alert(`${movie.title} is already in your watchlist.`);
    }
  };

  const removeW = (movieW) =>{
    const updatedList = watchlist.filter(movie => movie.id !== movieW);
  setWatchlist(updatedList);
  }
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