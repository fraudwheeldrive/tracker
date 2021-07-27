import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {

  //make sure links to are exact path
  return (
    <div className="navbar">
      <ul id="nav-mobile" className="nav-links">

        <Link to="/Home"><h3 className="nav-text">Home</h3></Link>

        <Link to="/LogIn"><h3 className="nav-text">Log In</h3></Link>

        <Link to="/SignUp"><h3 className="nav-text">Sign Up</h3></Link>

        <Link to="/GoPremium"><h3 className="nav-text">Go Premium</h3></Link>

      </ul>
    </div>
  );
}

export default NavBar;

