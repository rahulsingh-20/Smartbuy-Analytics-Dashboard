import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the /login endpoint
      const response = await axios.post(
        "/api/v1/login",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Check the 'success' field in the response
      if (response.data.success) {
        // If login is successful, call the onLogin callback
        onLogin(response.data.user.name);
        history.push("/dashboard");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred during login");
      window.alert(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-heading">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="field-container">
            Email:
            <input
              className="textbox"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="field-container">
            Password:
            <input
              className="textbox"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <div className="login-button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
