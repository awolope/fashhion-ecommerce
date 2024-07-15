import React from "react";
import "./searchbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-fluid sm">
      <form onSubmit={handleSubmit} className="search-form sm">
        <input
          type="text"
          placeholder="Search..."
          className="search-input sm"
        />
        <br />
        <div className="btndiv">
          <button type="submit" className="search-btn sm">
            Submit
          </button>
          <div className="arrow">
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Search;
