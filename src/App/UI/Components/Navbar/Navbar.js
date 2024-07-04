import React from 'react';
import './Navbar.css';
import NavBut from '../Buttons/NavBut/NavBut';
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login")
    }

    // const handleAboutClick = () => {
    //     navigate("/about")
    // }

    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li><a href='/about' className='underline-from-left'>About</a></li>
                    <li><a href='/pick' className='underline-from-left'>Contact</a></li>
                </ul>
            </nav>
            <NavBut onClick={handleLoginClick} type='button' text={'Login'} class='login' />
        </div>
    )
}

export default Navbar