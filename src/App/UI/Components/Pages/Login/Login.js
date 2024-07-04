import React from 'react';
import "./Login.css";
import SIDE from "../../../../Images/svg/login.svg";
import LoginButton from '../../Buttons/LoginButton/LoginButton';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/registration")
    }

    return (
        <div className='login'>
            <div className='login-content'>
                <div className='first-side'>
                    <img src={SIDE} alt='altText' />
                </div>
                <div className='second-side'>
                    <div className='ss-title'>
                        <h2>Login</h2>
                    </div>
                    <div className='form-input'>
                        <div className='first-input'>
                            <label className='main-label'>
                                Email
                            </label>
                            <input
                                type='email'
                                id=''
                                placeholder='Enter Your Email'
                                className='log-input'
                            />
                        </div>
                        <div className='second-input'>
                            <label className='main-label'>
                                Password
                            </label>
                            <input
                                type='password'
                                id=''
                                placeholder='Enter Your Password'
                                className='log-input'
                            />
                        </div>
                    </div>
                    <div className='forgot-password'>
                        Forgot Password?
                    </div>
                    <div className='user-reg'>
                        <span className='first-reg'>Not a user?</span><span onClick={handleRegisterClick} className='second-reg'>Register now</span>
                    </div>
                    <div className='log-but'>
                        <LoginButton type='button' text={'LOGIN'} class='login' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login