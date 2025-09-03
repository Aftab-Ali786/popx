import React from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile", { replace: true }); 
  };

  return (
    <div className="mobile-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>Create your PopX Account</h1>

        <div className="input">
          <label>
            Full Name<span>*</span>
          </label>
          <input type="text" placeholder="Enter your Full Name*" required />
        </div>

        <div className="input">
          <label>
            Phone Number<span>*</span>
          </label>
          <input type="number" placeholder="Enter your Phone Number*" required />
        </div>

        <div className="input">
          <label>
            Email Address<span>*</span>
          </label>
          <input type="email" placeholder="Enter your Email Address*" required />
        </div>

        <div className="input">
          <label>
            Password<span>*</span>
          </label>
          <input type="password" placeholder="Enter your Password*" required />
        </div>

        <div className="input">
          <label>Company Name</label>
          <input type="text" placeholder="Enter Your Company Name" />
        </div>

        <p>Are you an Agency?</p>
        <div>
          <label>
            <input type="radio" name="agency" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="agency" value="no" /> No
          </label>
        </div>

        <button type="submit" className="btn-primary">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
