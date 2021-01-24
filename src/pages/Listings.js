import React, {useState, useEffect} from "react";
import '../App.css';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
  
 export default function Listings(){

  const [numbers, setNumbers] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3001/createListing");
    const data = await res.json();
    let nums = [];
    data.forEach(l => {
      // nums.push(l)
      nums.push([l.fullName,l.resName,l.resPostalCode,l.resAddress,l.resName, l.resPostalCode])
    });
    setNumbers(nums)
    console.log(numbers)
  };

  useEffect(() => {
    getData();
  }, []);

  // setNumbers([["fullName", "restaurantName", "resPostalCode", "resAddress", "phoneNumber", "img"],["fullName2", "restaurantName2", "resPostalCode2", "resAddress2", "phoneNumber2", "img"]])
  console.log([["fullName", "restaurantName", "resPostalCode", "resAddress", "phoneNumber", "img"],["fullName2", "restaurantName2", "resPostalCode2", "resAddress2", "phoneNumber2", "img"]])
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

  const nothingHere = <div className="nothingHere">Nothing here yet!</div>
  
  return (
    <div className="App">
        <h1 className ="restaurant">Listings</h1> 
        <div>{numbers.length < 1 ? nothingHere : listItems}</div>
    </div>
  );
};


