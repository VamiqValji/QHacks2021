import React from "react";
import "./Home.css";
import logo from "../images/FULLR.png";

export default function Home() {
  return (
    <div className="App">
    <div className="imageLogo">
      <h1 className="logo-name">
        <img src={logo}></img>
      </h1>
      <h2>About Us</h2>
      <div className="hello">
        <p>Allowing charities to connect with Restaurants.</p>
      </div>
      <div className="container">
        <h2>For Restaurants</h2>
        <a className = "signup" href = "SignUp.js">Sign Up</a>
        <a className = "signup" href = "SignIn.js">Log In</a>
      </div>
    </div>
      <div className="container">
        <h2>For Organizations</h2>
        <a className = "signup" href = "SignUp.js">Sign Up</a>
        <a className = "signup" href = "SignIn.js">Log In</a>
      </div>
    </div>
  );
}
