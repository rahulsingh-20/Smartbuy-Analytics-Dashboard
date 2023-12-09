// App.js
import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Login from "./component/Login/Login";
import Register from "./component/Register";

const App = () => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState("");

  const handleLogin = (name) => {
    // Implement your login logic here
    // For simplicity, let's assume login is successful if username and password are provided
    setLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    setLoggedIn(false);
    setUserName("");
  };

  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          {isLoggedIn ? (
            <Dashboard userName={userName} onLogout={handleLogout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/register">
          <Register onLogin={handleLogin} />
        </Route>
        <Route exact path="/">
          {/* Redirect to /login if not logged in */}
          {isLoggedIn ? <Redirect to="/dashboard" /> : null}
          {/* Render content for the home page */}
          <div className="homepage-content">
            <h1>Smartbuy Analytics Dashboard</h1>
            <p>Please login/register to gain access</p>
          </div>
        </Route>
      </Switch>

      <div className="footer">
        {/* <div className="nonlinkdiv">
          <Link className="link" to="/">
            Home
          </Link>
        </div> */}
        <div>
          {isLoggedIn ? (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
        </div>
        <div>
          {isLoggedIn ? null : (
            <Link className="link" to="/register">
              Register
            </Link>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
