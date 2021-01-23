import React from "react";
import "../App.css";
import axios from "axios";

export default function SignIn() {

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
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="signInPage">Sign In</div>
        <form onSubmit={submit} className="form">
        <div className="input">
          <label for="Email">Email:</label>
          <br />
          <input type="text" id="EMAIL" name="email" placeholder="Email" required/>
        </div>
        <div className="Password">
          <label for="password">Password</label>
          <br />
          <input
            type="text"
            id="PASSWORD"
            name="password"
            placeholder="Password"
          />
        </div>
        <input type="submit" />
      </form>
      </header>
    </div>
  );
}
