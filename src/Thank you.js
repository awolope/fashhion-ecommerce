import React from "react";
import "./addtocartbutton.css";
import { Link } from "react-router-dom";
import Footer from "./footer";
import MiniFooter from "./minifooter";
const ThankYouPage = () => {
  return (
    <div className="thank-you-page text-center mt-5">
      <h4>Thank You for Shopping with Us at TimbuCloud™!</h4>
      <p>Your order has been placed successfully.</p>
      <p>We'll call you for confirmation shortly.</p>
      <p>Expect your order in a week time</p>
      <Link to="/products" className="btn btnv mt-3 mb-5">
        Continue Shopping
      </Link>
      <div className="row mt-5 mb-5">
        <div className="col-md-6 mt-5">
          <p className="pfp text-start ms-5">TimbuCloud™</p>
        </div>
        <div className="col-md-6 ">
          {" "}
          <MiniFooter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
