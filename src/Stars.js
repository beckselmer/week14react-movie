import React, { useState } from 'react';

const Stars = ({ rating, onRate }) => {
  const maxStars = 5;
  const [hoveredStars, setHoveredStars] = useState(0);

  const handleStarClick = (clickedIndex) => {
    // Update the parent component with the clicked rating
    onRate(clickedIndex + 1);
  };

  return (
    <div className="stars">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < (hoveredStars || rating) ? 'filled' : 'empty'}`}
          onMouseEnter={() => setHoveredStars(index + 1)}
          onMouseLeave={() => setHoveredStars(0)}
          onClick={() => handleStarClick(index)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Stars;