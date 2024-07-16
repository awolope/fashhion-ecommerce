import React from "react";
import Search from "./searchbar";
import "./Main.css";
import "./man.png";
import "./woman.png";
import MiniFooter from "./minifooter";
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
            <h2 className="mainh2 ">
              <span className="focus">Fresh Looks</span> For <br />
              The Modern Classic
            </h2>
            <p className="mainp ">
              Discover the perfect fusion of classic charm and modern trends.
              Our new collection offers fresh looks that embody sophistication
              and style, ideal for the discerning fashionista who values both
              tradition and innovation
            </p>
          </div>
        </div>
        <div className=" col-md-6">
          <img src="./woman.png" className="img-fluid text-center" alt=""></img>
        </div>
      </div>

      <div className="row m-5">
        <div className=" col-md-6">
          <img src="./man.png" className="img-fluid text-center" alt=""></img>
        </div>

        <div className="col-md-6 ">
          <div className="m-5 h2div">
            <h2 className="mainh2 ">
              <span className="focus">Stand Out</span> In Style
            </h2>
            <p className="mainp ">
              Make a statement with our bold and stylish collection. Designed
              for those who dare to be different, our pieces blend contemporary
              trends with unique designs.
            </p>
          </div>
        </div>
      </div>
      <h3 className="text-center">
        {" "}
        Our <span className="focus">Shop</span>
      </h3>
      <div className="row text-center">
        <div className="col-md-4">
          <img src="./shirt.png" className="img-fluid m-2" alt=""></img>
        </div>
        <div className="col-md-4">
          <img src="./suit.png" className="img-fluid m-2" alt=""></img>
        </div>
        <div className="col-md-4">
          <img src="./shirt.png" className="img-fluid m-2" alt=""></img>
        </div>
      </div>
      <br />
      <Link to="/products">
        <button className="shopbt ms-3">Shop Now</button>
      </Link>
      <p className="semfd ms-3">TimbuCloud™</p>
      <p className="semfd2 ms-3">
        Sign up for our to receive updates on upcoming products and exclusive
        discounts on all items
      </p>
      <Search />
      <div className="minifootm">
        {" "}
        <MiniFooter />
      </div>
    </div>
  );
};
export default Main;
