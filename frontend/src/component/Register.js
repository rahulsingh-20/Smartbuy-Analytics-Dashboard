// Register.js
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration request to the /register endpoint
      const response = await axios.post(
        "/api/v1/register",
        { name, email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Check the 'success' field in the response
      if (response.data.success) {
        // Simulate login after successful registration
        onLogin(response.data.user.name);

        // Redirect to the dashboard
        history.push("/dashboard");
      } else {
        setError("Registration failed");
      }
    } catch (err) {
      console.error("Error during registration:", error);
      console.log(err.response);
      // setError(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
