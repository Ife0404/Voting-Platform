import React from 'react';
import './Navbar.css';
import NavBut from '../Buttons/NavBut/NavBut';

function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li><a href='/pick'>About</a></li>
                    <li><a href='/pick'>Contact</a></li>
                </ul>
            </nav>
            <NavBut type='button' text={'Login'} class='login' />
        </div>
    )
}

export default Navbar