import React from "react";
import "./Landingpage.css";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
const LandingPage = () => {
  return (
    <div>
      <Header />

      <Main />
      <Footer />
    </div>
  );
};

export default LandingPage;
