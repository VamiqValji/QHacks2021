import "./App.css";
import Restaurants from "./pages/Restaurants";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import CreateListing from "./pages/CreateListing";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="signInPage"></div>
        <Router>
          <div>
            <div className="nav">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/listings">Listings</Link>
                  </li>
                  <li>
                    <Link to="/createListings">Create Listing</Link>
                  </li>
                  <li>
                    <Link to="/Dashboard">Dashboard</Link>
                  </li>
                  {/* <li>
                    <Link to="/restaurant">Restaurant</Link>
                  </li> */}
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
              {/* <Route path="/restaurant">
                <Restaurants />
              </Route> */}
              <Route path="/listings">
                <Listings />
              </Route>
              <Route path="/createListings">
                <CreateListing />
              </Route>
              {/* <Route path="/Charity">
            <Charity />
          </Route> */}
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
