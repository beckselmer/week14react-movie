import React from 'react';
import Movie from './Movie';
import './App.css';

const MovieList = ({ movies }) => {
  return (
    <div className='movie-container'>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;