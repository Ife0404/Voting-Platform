import React, { useEffect } from 'react';
import "./Election.css";
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';

function Election() {

  useEffect(() => {
    document.title = "Election";
  }, []);

  return (
    <div className='election'>
      <div>
        <UserNavbar />
      </div>
      <div className='election-container'>
        <div className='upcoming'>
          <div className='upcoming-data'>
            <p>BBSF election:</p>
            <div className='date'>@{new Date().getFullYear()}</div>
          </div>
        </div>
        <div className='other'></div>
      </div>
    </div>
  )
}

export default Election