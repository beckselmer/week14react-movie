import React, { useState } from 'react';

const ReviewForm = ({ movieId, addReview, userRating }) => {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (reviewText.trim() !== '') {
      const newReview = {
        id: new Date().getTime(), // Generate a unique ID (you may use a better approach in a real app)
        rating: userRating, 
        text: reviewText,
      };

      // Pass the new review to the parent component
      addReview(newReview);

      // Clear the form after that
      setReviewText('');
    } else {
      alert('Please provide a review text.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Review:
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;