import React from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {

//make sure links to are exact path
  return (
    <div className="box-center">
    <h2 className="center">This is the searchbar area</h2>
    <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search movies our shows"
            name="s" 
        />
        <button type="submit" className="padding-left">Let's Go!</button>
    </form>
    </div>
  );
}

export default SearchBar;