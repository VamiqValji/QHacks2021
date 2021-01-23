import './App.css';
import Restaurants from "./pages/Restaurants";
import SignIn from "./pages/SignIn";
import SignUp from './pages/SignUp';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
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
        </Switch>
      </div>
    </Router>
    </header>
    </div>
  );
}
