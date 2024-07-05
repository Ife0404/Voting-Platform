import React from 'react';
import "./UserButton.css";

function UserButton({ onClick, type, text }) {
    return (
        <button onClick={onClick} type={type} className="userbut">
            {text}
        </button>
    )
}

export default UserButton