import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

function IntroPage(props) {

//make sure links to are exact path
  return (
    <div className="center">
    <h2>Track your shows and movies from the Watch Tower</h2>
    <SearchBar />
    </div>
  );
}

export default IntroPage;