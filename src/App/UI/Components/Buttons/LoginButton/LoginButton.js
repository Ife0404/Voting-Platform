import React from 'react';
import "./LoginButton.css"

function LoginButton({ onClick, type, text }) {
    return (
        <button onClick={onClick} type={type} className='logbut'>
            {text}
        </button>
    )
}

export default LoginButton