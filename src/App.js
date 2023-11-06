import React from 'react';
import './App.css';
import MovieList from './MovieList';
import moviesData from './movieData';

const App = () => {
  return (
    <div>
      <h1>Movie Review Page</h1>
      <MovieList movies={moviesData} />
    </div>
  );
};

export default App;