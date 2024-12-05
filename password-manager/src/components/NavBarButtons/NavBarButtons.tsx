import "./NavBarButtons.css";
import React from "react";
import { useNavigate } from "react-router";

function NavBarButtons() {
  const navigate = useNavigate();
  return (
    <div className="buttons-container">
      <button className="link">Home</button>
      <button className="link">About Us</button>
      <button className="link">Contact</button>
    </div>
  );
}

export default NavBarButtons;
