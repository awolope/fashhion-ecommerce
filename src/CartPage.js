// src/CartPage.js

import React from "react";
import { useNavigate } from "react-router-dom";

const CartPage = ({ cart, clearCart }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h5>{item.name}</h5>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
          <button onClick={clearCart} className="btn btn-danger mt-3">
            Clear Cart
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="btn btn-primary mt-3 ms-3"
          >
            Proceed to Pay
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
