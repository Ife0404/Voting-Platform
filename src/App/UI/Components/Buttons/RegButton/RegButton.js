import React from 'react';
import "./RegButton.css";

function RegButton({ onClick, type, text }) {
    return (
        <button onClick={onClick} type={type} className='navbut'>
            {text}
        </button>
    )
}

export default RegButton