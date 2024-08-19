import React, { useEffect } from 'react';
import "./Voting.css";
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';

function Voting() {

  useEffect(() => {
    document.title = "Voting";
  }, []);

  return (
    <div className='voting'>
      <div>
        <UserNavbar />
      </div>
    </div>
  )
}

export default Voting