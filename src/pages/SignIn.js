import React from "react";
import "../App.css";

export default function SignIn() {

  const submit = (e) => {
    e.preventDefault();
    let email = document.getElementById("EMAIL").value;
    let password = document.getElementById("PASSWORD").value;
    console.log(email)
    console.log(password)
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
