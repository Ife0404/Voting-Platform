import React from 'react';
import "./VoteButton.css";

function VoteButton({ onClick, type, text }) {
  return (
    <button onClick={onClick} type={type} className='votebut'>
        {text}
    </button>
  )
}

export default VoteButton