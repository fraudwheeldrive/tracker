import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {

//make sure links to are exact path
  return (
    <div className="footer-box">
    <h3>Made with 💖 and 🌮 by Group 5 Productions.  Ⓒ2021</h3>
    <h5><a href="https://www.privacypolicies.com/blog/privacy-policy-template/#:~:text=A%20Privacy%20Policy%20is%20a,or%20sold%20to%20third%20parties." target="_blank" rel="noopener noreferrer">Privacy Policy</a></h5>
    </div>
  );
}

export default Footer;