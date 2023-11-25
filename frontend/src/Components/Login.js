import React, { useState } from "react";
import { login } from "../API/userAPI";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        className="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div id="btn">
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <Link to="/signup">
          <button id="newmember">
            New member? <span>click here!</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
