import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import "./Signin.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import { Link } from "react-router-dom";

export default function SignUp() {
  const [feedback, setFeedback] = useState();

  const success = <div className="success1">Sign Up Successful!</div>;
  // const fail = <div className="fail">Failed Sign Up.</div>;

  const submit = (e) => {
    e.preventDefault();
    let EMAIL = document.getElementById("EMAIL").value;
    let PASSWORD = document.getElementById("PASSWORD").value;
    let ORG = document.getElementById("orgSelect").value;
    console.log(EMAIL);
    console.log(PASSWORD);
    console.log(ORG);

    axios
      .post("http://localhost:3001/signup", {
        email: EMAIL,
        password: PASSWORD,
        organization: ORG,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data.message));
    setFeedback(success);
  };

  return (
    <div className="signinn">
      <header className="App-header">
        <div className="signInPage">Sign Up</div>
        <div className="div">
          <form onSubmit={submit} className="form">
            <div className="input">
              <label className="labels" for="Email">
                Email:
              </label>
              <br />
              <TextField
                className="email"
                id="EMAIL"
                label="Email"
                name="email"
                required
              />
            </div>
            <div className="Password">
              <label className="labels" for="password">
                Password
              </label>
              <br />
              <TextField
                className="password"
                id="PASSWORD"
                label="Password"
                name="password"
                required
              />
            </div>
            <div id="orgSelectContainer">
              <select id="orgSelect">
                <option value="Restaurant">Restaurant</option>
                <option value="Charity" selected>
                  Charity
                </option>
              </select>
            </div>
            <div className="elly">
              {/* <Link to="/signupcheck" style={{ textDecoration: "none" }}> */}
              <Button
                type="submit"
                className="fullButton"
                variant="contained"
                color="primary"
                required
                // onClick={submit}
              >
                Sign Up
              </Button>
              {/* </Link> */}
              {feedback}
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
