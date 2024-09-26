import React, { useState } from 'react';

const RatingPage = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    // Submit rating to backend
    console.log(`Rating submitted: ${value}`);
  };

  return (
    <div>
      <h1>Rate Task Difficulty</h1>
      <p>How difficult was this task?</p>
      {[1, 2, 3, 4, 5].map((value) => (
        <button key={value} onClick={() => handleRating(value)}>
          {value} {value === 1 ? 'Star' : 'Stars'}
        </button>
      ))}
      <p>Your rating: {rating} {rating === 1 ? 'Star' : 'Stars'}</p>
    </div>
  );
};

export default RatingPage;
