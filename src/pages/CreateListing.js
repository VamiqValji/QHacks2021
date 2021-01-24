import React from "react";
import "./Restaurants.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

export default function CreateListing() {
  const submit = (e) => {
    e.preventDefault();

    let fn = document.getElementById("fullName").value;
    let rn = document.getElementById("restaurantName").value;
    let rpc = document.getElementById("resPostalCode").value;
    let ra = document.getElementById("resAddress").value;
    let pn = document.getElementById("phoneNumber").value;
    let pu = document.getElementById("pu").value;
    let img = document.getElementById("img").value;

    axios
      .post("http://localhost:3001/createListing", {
        fullName: fn,
        resName: rn,
        resPostalCode: rpc,
        resAddress: ra,
        phoneNumber: pn,
        pickUpTime: pu,
        image: img,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data.message));
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
        <TextField required className="fullName" id="pu" label="Pick Up Time" />
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
