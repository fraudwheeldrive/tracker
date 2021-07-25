import React from "react";
import { Link } from "react-router-dom";
import SearchShows from "../components/SearchShows";
import SearchResults from "../components/SearchResults";
import Carousel from "../components/Carousel";

function Home(props) {

  //make sure links to are exact path
  return (
    <div className="home-box">
      <SearchShows />
      <Carousel />
      <SearchResults />
    </div>
  );
}

export default Home;