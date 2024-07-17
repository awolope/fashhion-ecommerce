import React, { useState, useEffect } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";//
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import ThankYouPage from "./Thank you";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };
  const updateCartItemQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    );
  };
  return (
    <Router>
      <NavBar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/products"
            element={<ProductPage addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                clearCart={clearCart}
                updateCartItemQuantity={updateCartItemQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cart={cart}
                clearCart={clearCart}
                updateCartItemQuantity={updateCartItemQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />

          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
