import React from "react";
import "./Show.css";

export const Show = () => {
  return (
    <div className="mobile-container">
      <h1 className="h1-show" >Account Setting</h1>

      <div className="img-text">
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="user"
        />
        <div className="text">
          <h2>John Doe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Show;
