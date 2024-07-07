import React from 'react';
import "./Intro.css";
import Head from "../../../../Images/svg/vote.svg"
import Navbar from '../../Navbar/IntroNavbar/Navbar';
import IntroButton from '../../Buttons/IntroButton/IntroButton';
import { useNavigate } from 'react-router-dom';

function Intro() {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/registration")
    }

const handleFeatureClick = () => {
    navigate("/feature")
}

    return (
        <div className='intro'>
            <div className='intro-content'>
                <div className='intro-image'>
                    <img src={Head} alt='altText' />
                </div>

                <div className='header'>
                    <Navbar />
                    <div className='header-container'>
                        <div className='header-first'>
                            <p>Be a part of decision</p>
                        </div>
                        <div className='header-second'>
                            <p>Vote Today</p>
                        </div>
                        <div className='but-ton'>
                            <IntroButton onClick={handleRegisterClick} type='button' text={'REGISTER'} class='register' />
                            <IntroButton onClick={handleFeatureClick} type='button' text={'READ MORE'} class='read-more' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Intro