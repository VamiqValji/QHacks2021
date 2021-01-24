import React from "react";
import "../App.css";
import axios from "axios";
 import './Signin.css';
 import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function SignUp() {
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
  };

  return (
    <div className="signinn">
      <header className="App-header">
        <div className="signInPage">Sign Up</div>
        <div className = "div">
        <form onSubmit={submit} className="form">
          <div className="input">
            <label className= "labels" for="Email">Email:</label>
            <br />
             <TextField  className = "email" id="EMAIL" label="Email" name = "email" required/>
          </div>
          <div className="Password">
            <label className= "labels" for="password">Password</label>
            <br />
           <TextField className = "password"  id="PASSWORD" label="Password" name = "password" required />
          </div>
          <div id="orgSelectContainer">
            <select id="orgSelect">
              <option value="Restaurant">Restaurant</option>
              <option value="Charity" selected>
                Charity
              </option>
            </select>
          </div>
          <div className = "elly">
          <Button type = "submit" className = "fullButton"  variant="contained" color="primary">
         Sign Up
      </Button>
      </div>
        </form>
        </div>
      </header>
    </div>
  );
}
