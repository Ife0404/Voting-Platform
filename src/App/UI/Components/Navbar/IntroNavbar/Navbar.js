import React from "react";
import "./Navbar.css";
import NavBut from "../../Buttons/NavBut/NavBut";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="nav">
        <NavLink to="/about" className="nav-one">
          About
        </NavLink>
        <NavLink to="/steps" className="nav-two">
          Steps
        </NavLink>
      </div>
      <NavBut
        onClick={handleLoginClick}
        type="button"
        text={"Login"}
        class="login"
      />
    </div>
  );
}

export default Navbar;
