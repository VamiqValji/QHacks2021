import React from "react";
import "./Home.css";
import logo from "../images/FULLR.png";
import stat from "../images/stats.png";
import stats from "../images/stats-2.png";
import eating from "../images/undraw_eating.png"

export default function Home() {
  return (
    <div className="App">
    <div className="imageLogo">
      <h1 className="logo-name">
        <img className = "logo" src={logo}></img>
      </h1>
      <div id="aboutUsBelow">
      <h2 className = "aboutUs">About Us</h2>
      <div className="hello">
        <p className = "aboutusp">Restaurants make up for over 13% of the total food waste and
           there are over 10,000 people in Toronto each night that are homeless. FULLER connects those who 
           can give with those in need through a simple automated platform. Charities are able to contact restaurants
            and pick up the extra food or groceries they have available. </p>  
      </div>
      <div className="STATS">
      <div className = "stat">
         <img   src = {stat}></img>
    </div>
    <div className = "stats">
         <img   src = {stats}></img>
    </div>
    </div>
    </div>
    <div className="undraw">
      <img src={eating} style={{ width:"50%"}} alt=""/>
    </div>

    </div>

    </div>
  );
}


