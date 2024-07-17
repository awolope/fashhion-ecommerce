import React from "react";
import "./Navbar.css";
import "./CheckoutPage";
import "./CartPage";
import "./LandingPage";
import "bootstrap/js/src/collapse.js";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar bg bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand navb" to="/">
          TimbuCloud™
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item me-3 navba">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-3 navba">
              <Link className="nav-link" to="/products">
                Shop
              </Link>
            </li>
            <li className="nav-item me-3 navba">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item me-3 navba">
              <Link className="nav-link" to="/checkout">
                Checkout
              </Link>
            </li>
          </ul>
          <form class="d-flex ml-5" role="search" id="search">
            <input
              class="form-control me-2 bg-dark bg-opacity-10 navba"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn " type="submit">
              <FontAwesomeIcon icon={faSearch} color="red" />
            </button>
          </form>
          <FontAwesomeIcon
            icon={faShoppingCart}
            color="red"
            className="me-4 cart"
          />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
