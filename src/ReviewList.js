import React from 'react';
import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews.map((review) => (
        <Review key={review.id} text={review.text} />
      ))}
    </div>
  );
};

export default ReviewList;