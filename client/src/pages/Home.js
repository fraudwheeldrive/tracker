import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchShows from "../components/SearchShows";
import SearchResults from "../components/SearchResults";
import Carousel from "../components/Carousel";
import { CarouselData } from "../components/CarouselData";


function Home(props) {
  var watchLogo = require('../assets/img/watchlogo-01-01.png')
  //make sure links to are exact path
  return (
    <div className="home-box box-center">
      <SearchShows />
      <img className="logo-box" src={watchLogo} />
      <Carousel slides ={CarouselData} />
      <SearchResults />
    </div>
  );
}

export default Home;
