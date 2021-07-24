import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Carousel from "../components/Carousel";

function Home(props) {

  //make sure links to are exact path
  return (
    <div className="home-box">
      <SearchBar />
      <Carousel />
      <SearchResults />
    </div>
  );
}

export default Home;