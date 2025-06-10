import React from "react";
import StarRating from "./StarRating";
import pizzaImg from "../img/pizza.jpeg";
import burgerImg from "../img/burger.jpeg";

function Dialog({ onClose }) {
  return (
    <div className="dialog-box">
      <h3>Pizza vs. Burger</h3>
      <div className="food-rating">
        <div className="food-item">
          <img src={pizzaImg} alt="Pizza" />
          <p>Rate Pizza</p>
          <StarRating />
        </div>
        <div className="food-item">
          <img src={burgerImg} alt="Burger" />
          <p>Rate Burger</p>
          <StarRating />
        </div>
      </div>
      <button className="close-btn" onClick={onClose} > Close </button>
    </div>
  );
}

export default Dialog;
