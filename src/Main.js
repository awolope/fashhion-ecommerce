import React from "react";
import "./Main.css";
import "./man.png";
import "./woman.png";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main ">
      <h1 className="mainh1">
        Discover <span className="focus">Timeless Beauty</span>
      </h1>
      <div className="row m-5">
        <div className="col-md-6">
          <div className="m-5 h2div">
            <h2 className="mainh2">
              <span className="focus">Fresh Looks</span> For <br />
              The Modern Classic
            </h2>
            <p className="mainp">
              Discover the perfect fusion of classic charm and modern trends.
              Our new collection offers fresh looks that embody sophistication
              and style, ideal for the discerning fashionista who values both
              tradition and innovation
            </p>
          </div>
        </div>
        <div className=" col-md-6">
          <img src="./woman.png" className="img-fluid text-center"></img>
        </div>
      </div>
    </div>
  );
};
export default Main;
