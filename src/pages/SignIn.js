import React, { useState } from "react"; // createContext
import "../App.css";
import axios from "axios";

// export const UserContext = React.createContext(["email", "org"]);

export default function SignIn() {
  const [user, setUser] = useState(["email", "org", "id"]);

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
      } catch(err) {
        console.log(err)
      }
      console.log(data)
      console.log(EMAIL)
      data.forEach(profile => {
        if (profile.email === EMAIL) {
          console.log("logged in")
          console.log(profile)
          console.log(profile.email)
          console.log(profile.organization)
          setUser([profile.email, profile.organization, profile._id])
          sessionStorage.setItem("user",[profile.email, profile.organization, profile._id])
          console.log(user);
        }
      });
  };
  // useEffect(() => {
  //   getData();
  // }, []);
  getData();

  }

  return (
    // <UserContext.Provider value={user}>
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
            required
          />
        </div>
        <input type="submit" />
      </form>
      </header>
    </div>
    // </UserContext.Provider>
  );
}
