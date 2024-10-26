import React, { useEffect } from "react";
import "./Election.css";
import Navbar from "../../Navbar/UserNavbar/UserNavbar";

function Election() {
  useEffect(() => {
    document.title = "Election";
  }, []);

  const elections = [
    { type: "NACOSS President Election :", date: "12-18-2024" },
    { type: "NACOSS Vice-President Election :", date: "12-18-2024" },
    { type: "NACOSS Secretary Election :", date: "12-18-2024" },
    { type: "NACOSS Commisioner Election :", date: "12-18-2024" },
    { type: "NACOSS Welfare Director Election :", date: "12-18-2024" },
  ];

  return (
    <div className="election-main">
      <Navbar />
      <div className="election">
        <div className="election-content">
          <div className="election-title">
            <h2>Upcoming Elections :</h2>
          </div>
          <div className="election-body">
            {elections.map((election, index) => (
              <div className="election-data">
                <span className="election-type">{election.type}</span>
                <span className="election-date">{election.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Election;
