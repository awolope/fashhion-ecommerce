// src/AddToCartButton.js
import "./addtocartbutton.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddToCartButton = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <button onClick={handleClick} className="btn btnv">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
