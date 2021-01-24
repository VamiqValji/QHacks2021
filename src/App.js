import React, { useState, useContext } from "react";
import './App.css';
import Restaurants from "./pages/Restaurants";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home'
import Charity from './pages/Charity'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  // const user = useContext(userContext);
  // setInterval(() => {
  // }, 1000);
  return (
    <div className="App">
    <header className="App-header">
    <Router>
      <div>
        <div className="nav">
        {/* <UserContext> */}
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
              <Link to="/Dashboard">Dashboard</Link>
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
        {/* </UserContext> */}
        </div>
        <Switch>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
          <Route path="/Charity">
            <Charity />
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
