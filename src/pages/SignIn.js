import React, { useState } from "react";
import "../App.css";
import "./Signin.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import { Link } from "react-router-dom";

export default function SignIn() {
  const [feedback, setFeedback] = useState();

  const success = <div className="success">Sign In Successful!</div>;
  const fail = <div className="fail">Failed Login.</div>;

  const submit = (e) => {
    e.preventDefault();
    let EMAIL = document.getElementById("EMAIL").value;
    let PASSWORD = document.getElementById("PASSWORD").value;
    axios
      .post("http://localhost:3001/signin", {
        email: EMAIL,
        password: PASSWORD,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data.message));

    let data = [];
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3001/signin/logged");
        data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
      console.log(data);
      console.log(EMAIL);
      setFeedback(fail);
      data.forEach((profile) => {
        if (profile.email === EMAIL) {
          setFeedback(success);
          console.log("logged in");
          console.log(profile);
          console.log(profile.email);
          console.log(profile.organization);
          sessionStorage.setItem("user", [
            profile.email,
            profile.organization,
            profile._id,
          ]);
        } else {
          console.log("Invalid.");
        }
      });
    };
    // useEffect(() => {
    //   getData();
    // }, []);
    getData();
  };

  return (
    <div className="signinn">
      <header className="App-header">
        <h1 className="signInPage">Sign In</h1>

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
                Password:
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
            <div className="elly">
              {/* <Link to="/signincheck" style={{ textDecoration: 'none' }} > */}
              <Button
                type="submit"
                className="fullButton"
                variant="contained"
                color="primary"
                required
              >
                Login
              </Button>
              {/* </Link> */}
              {/* {render ? success : fail} */}
              {feedback}
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
