import React from 'react';
import './NavBut.css';

function NavBut({ onClick, type, text }) {
    return (
        <button onClick={onClick} type={type} className='navbut'>
            {text}
        </button>
    )
}

export default NavBut;