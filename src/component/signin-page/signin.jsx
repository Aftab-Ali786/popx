import React from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile", { replace: true }); 
  };

  return (
    <div className="mobile-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign in to your PopX Account</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="input">
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
          </label>
        </div>

        <div className="input">
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signin;
