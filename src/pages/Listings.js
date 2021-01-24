import React from "react";
import '../App.css';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
  
 export default function Listings(){
  let numbers = [["fullName", "restaurantName", "resPostalCode", "resAddress", "phoneNumber", "img"],["fullName2", "restaurantName2", "resPostalCode2", "resAddress2", "phoneNumber2", "img"]]
  const listItems = numbers.map((n) =>
    <div className="cardContainer">
      <div className="card">
        <h1 key={n[0]}>{n[0]}</h1>
        <h1 key={n[1]}>{n[1]}</h1>
        <h1 key={n[2]}>{n[2]}</h1>
        <h1 key={n[3]}>{n[3]}</h1>
        <h1 key={n[4]}>{n[4]}</h1>
        <h1 key={n[5]}>{n[5]}</h1>
      </div>
    </div>
  );
  return (
    <div className="App">
        <h1 className ="restaurant">Listings</h1> 
        <div>{listItems}</div>
    </div>
  );
};


