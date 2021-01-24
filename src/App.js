import './App.css';
import Restaurants from "./pages/Restaurants";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  let data = [];
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3001/signin/logged");
      data = await res.json();
      console.log(data);
    } catch(err) {
      console.log(err)
    }
    if (data.length > 0) {
      console.log("logged in")
    } else {
      console.log("not logged in")
    }
  };

  getData();

  return (
    <div className="App">
    <header className="App-header">
    <Router>
      <div>
        <div className="nav">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
            <li>
              <Link to="/Charity">Charity</Link>
            </li>
            <li>
              <Link to="/Dashboard">dashboard</Link>
            </li>
              <Link to="/restaurants">Restaurants</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Switch>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />

          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </header>
    </div>
  );
}
