import React from "react";
import "./Restaurants.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Restaurants() {
  const submit = (e) => {
    let fullName = document.getElementById("fullName").value;
    let restaurantName = document.getElementById("restaurantName").value;
    let resPostalCode = document.getElementById("resPostalCode").value;
    let resAddress = document.getElementById("resAddress").value;
    let phoneNumber = document.getElementById("phoneNumber").value;

    console.log(fullName);
    console.log(restaurantName);
    console.log(resPostalCode);
    console.log(resAddress);
    console.log(phoneNumber);
  };

  return (
    <div className="component3">
      <form onSubmit={submit} className="restaurantsignup">
        <h1 className="restaurant">Restaurant Sign Up</h1>

        <TextField
          className="fullName"
          id="fullName"
          label="Full Name"
          name="fullName"
        />
        <TextField
          className="fullName"
          id="restaurantName"
          label="Restaurant Name"
        />
        <TextField
          className="fullName"
          id="resPostalCode"
          label="Restaurant Postal Code"
        />
        <TextField
          className="fullName"
          id="resAddress"
          label="Restaurant Address"
        />
        <TextField className="fullName" id="phoneNumber" label="Phone Number" />
        <Button
          type="submit"
          className="fullButton"
          variant="contained"
          color="primary"
        >
          Submit Application
        </Button>
      </form>
    </div>
  );
}
