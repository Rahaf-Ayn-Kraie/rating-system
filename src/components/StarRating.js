import React, { useState } from "react";
import Star from "./Star";

function StarRating() {
  const [rating, setRating] = useState(0);
  const messages = [
  " I hate it!",
  " Not great...",
  " Meh, it's okay.",
  " I like it!",
  " Absolutely amazing!",
];


  return (
    <div className="rating-container">
      <h2>{rating > 0 ? messages[rating - 1] : "Rate this"}</h2>
      <div className="stars-row">
        {[0, 1, 2, 3, 4].map((index) => (
          <Star
            key={index}
            selected={index < rating}
            onClick={() => setRating(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default StarRating;
