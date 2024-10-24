import React from "react";
import "./UserNavbar.css";
import NavBut from "../../Buttons/NavBut/NavBut";
import { NavLink, useNavigate } from "react-router-dom";
import VoteButton from "../../Buttons/VoteButton/VoteButton";

function UserNavbar() {
  const navigate = useNavigate();

  const handleVotingClick = () => {
    navigate("/voting");
  };

  return (
    <div className="user-navbar">
      <div className="user-nav">
        <NavLink to="/elections" className="usernav-one">
          Elections
        </NavLink>
        <NavLink to="/userinfo" className="usernav-two">
          Personal Info
        </NavLink>
      </div>
      <VoteButton
        onClick={handleVotingClick}
        type="button"
        text={"Vote"}
        class="vote"
      />
    </div>
  );
}

export default UserNavbar;
