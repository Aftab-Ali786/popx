import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div className="mobile-container">
      <div className="content">
        <h1>Welcome to PopX</h1>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div className="button-group">
           <a href="/signUp" className="btn-primary ">
            Create Account
          </a>
          <a href="/signin" className="btn-secondary"> 
            Already Registered ? Login
          </a>
         
        </div>
      </div>
    </div>
  );
}
export default Home;