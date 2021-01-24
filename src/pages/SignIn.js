import React, {useContext} from "react";
import "../App.css";
// import "./Signin.css";
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
        }
      });
  };
  // useEffect(() => {
  //   getData();
  // }, []);
  getData();

  }

  return (
    <div className="signinn">
      <header className="App-header">
        <h1 className="signInPage">Sign In</h1>

         <div className = "div">
        <form onSubmit={submit} className="form">

        <div className="input">
        
          <label className= "labels" for="Email">Email:</label>

          <br />
          <TextField  className = "email" id="EMAIL" label="Email" name = "email" required/>
       
        </div>
        <div className="Password">
          <label className = "labels" for="password">Password:</label>
          <br />
         <TextField className = "password"  id="PASSWORD" label="Password" name = "password" required />
        </div>
        <div className = "elly">
        <Button type = "submit" className = "fullButton"  variant="contained" color="primary">
       Login
      </Button>
      </div>
      </form>
      </div>
      </header>
    </div>
  );
}
