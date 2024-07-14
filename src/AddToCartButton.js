// src/AddToCartButton.js

import React from "react";
import { useNavigate } from "react-router-dom";

const AddToCartButton = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
