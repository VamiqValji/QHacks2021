import React from "react";
import "./Restaurants.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function CreateListing() {
  const submit = (e) => {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let restaurantName = document.getElementById("restaurantName").value;
    let resPostalCode = document.getElementById("resPostalCode").value;
    let resAddress = document.getElementById("resAddress").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let image = document.getElementById("img").value;

    console.log(fullName);
    console.log(restaurantName);
    console.log(resPostalCode);
    console.log(resAddress);
    console.log(phoneNumber);
    console.log(image);
  };

  return (
    <div className="component3">
      <form onSubmit={submit} className="restaurantsignup">
        <h1 className="restaurant">Create Listings</h1>

        <TextField
          required
          className="fullName"
          id="fullName"
          label="Full Name"
          name="fullName"
        />
        <TextField
          required
          className="fullName"
          id="restaurantName"
          label="Restaurant Name"
        />
        <TextField
          required
          className="fullName"
          id="resPostalCode"
          label="Restaurant Postal Code"
        />
        <TextField
          required
          className="fullName"
          id="resAddress"
          label="Restaurant Address"
        />
        <TextField
          required
          className="fullName"
          id="phoneNumber"
          label="Phone Number"
        />
        <TextField
          required
          className="fullName"
          id="img"
          label="Image Link Address"
        />
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
