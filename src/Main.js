import React from "react";

import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className=" container-sm">
      <h1>Welcome to Our Fashion Brand</h1>
      <p>Discover the latest trends in fashion.</p>
      <Link to="/products">
        <button className="btn btn-primary">Shop Now</button>
      </Link>
    </div>
  );
};
export default Main;
