import React from "react";
// import "../App.css";
import axios from "axios";
// import './Signin.css'

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
    <div className="App">
      <header className="App-header">
        <div className="signInPage">Sign Up</div>
        <form onSubmit={submit} className="form">
          <div className="input">
            <label for="Email">Email:</label>
            <br />
            <input
              type="text"
              id="EMAIL"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="Password">
            <label for="password">Password</label>
            <br />
            <input
              type="text"
              id="PASSWORD"
              name="password"
              placeholder="Password"
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
          <input type="submit" />
        </form>
      </header>
    </div>
  );
}
