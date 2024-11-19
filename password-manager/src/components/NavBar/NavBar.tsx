import NavBarButtons from "../NavBarButtons/NavBarButtons";
import "./NavBar.css";
import React from "react";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <div className="container">
      <div className="name-logo">
        <img className="logo" src={logo} alt="" />
        <p className="name">PasSave</p>
      </div>

      <NavBarButtons />
    </div>
  );
}

export default NavBar;
