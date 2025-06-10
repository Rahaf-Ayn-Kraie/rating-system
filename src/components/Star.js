import React from "react";
import { FaStar } from "react-icons/fa";

function Star({ selected, onClick }) {
  return (
    <FaStar
      className="star"
      color={selected ? "gold" : "lightgray"}
      size={30}
      onClick={onClick}
    />
  );
}

export default Star;
