import React from "react";
import "./header.css";
import "./background.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faClock,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" head">
      <div className="text-center">
        <h1 className="headerh1 sm">Eternal Classics, Enduring Style</h1>
        <h2 className="headerh2">
          From elegant dresses to tailored suits, find pieces that stand the
          test of time
        </h2>
        <Link to="/products">
          <button className="shopbt">Shop Now</button>
        </Link>
      </div>
      <div className="clockdiv">
        <div>
          <FontAwesomeIcon icon={faClock} />
          <p className="clockp">Daily Arrivals</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faShoppingCart} />
          <p className="clockp">Hassle Free Shopping</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faInfinity} />
          <p className="clockp">Unlimited Items</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
