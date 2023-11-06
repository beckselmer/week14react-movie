import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import './App.css';

const Movie = ({ movie }) => {
  const [reviews, setReviews] = useState(movie.reviews);
  const [userRating, setUserRating] = useState(movie.rating);

  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  const handleRate = (newRating) => {
    setUserRating(newRating);
  };

  return (
    <div className="movie-box">
      <img src={movie.image} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <Stars rating={userRating} onRate={handleRate} />
      <ReviewList reviews={reviews} />
      <ReviewForm movieId={movie.id} addReview={addReview} userRating={userRating} />
    </div>
  );
};

export default Movie;