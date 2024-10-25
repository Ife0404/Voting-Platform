import React, { useEffect } from "react";
import "./Voting.css";
import UserNavbar from "../../Navbar/UserNavbar/UserNavbar";

function Voting() {
  useEffect(() => {
    document.title = "Voting-Panel";
  }, []);

  return (
    <div className="voting">
      <div>
        <UserNavbar />
        <div className="voting-content">
          <div className="voting-title">
            <h2>Voting Panel</h2>
          </div>
          <div className="voting-body"></div>
        </div>
      </div>
    </div>
  );
}

export default Voting;
