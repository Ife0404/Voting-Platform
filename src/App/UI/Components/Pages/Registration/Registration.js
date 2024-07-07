import React, { useState } from 'react';
import "./Registration.css";
import PERSON from "../../../../Images/svg/Person.svg";
import RegButton from "../../../Components/Buttons/RegButton/RegButton";
import { MdVisibilityOff } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


function Registration() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/elections")
    }

    return (
        <div className='registration'>
            <div className='registration-content'>
                <div className='first-half'>
                    <img src={PERSON} alt='altText' />
                </div>
                <div className='second-half'>
                    <div className='sh-title'>
                        <h2>Registration form</h2>
                    </div>
                    <div className='input-form'>
                        <div className='first-form'>
                            <label className='main-form'>
                                Name
                            </label>
                            <input
                                type='text'
                                id=''
                                placeholder='Enter Your Name'
                                className='reg-input'
                                required
                            />
                        </div>
                        <div className='seventh-form'>
                            {/* <label className='main-form'>
                                Matric Number
                            </label>
                            <select
                                name="matricNumber"
                                id="matricNumber"
                                className='reg-select'
                            >
                                <option value="" hidden>
                                    Select Level
                                </option>
                                <option value="alevel">A level</option>
                                <option value="100">100 Level</option>
                                <option value="200">200 Level</option>
                                <option value="300">300 Level</option>
                                <option value="400">400 Level</option>
                            </select> */}
                            <label className='main-form'>
                                Department
                            </label>
                            <input
                                type='text'
                                id=''
                                placeholder='Enter Your Department'
                                className='reg-input'
                                required
                            />
                        </div>
                        <div className='second-form'>
                            <label className='main-form'>
                                Matric Number
                            </label>
                            <input
                                type='text'
                                id=''
                                placeholder='Enter Your Matric Number'
                                className='reg-input'
                                pattern="BU[0-9]{2}[A-Z]{3}[0-9]{4}"
                                title="Format: BU followed by 2 digits, 3 uppercase letters, and 4 digits (e.g., BU21CSC1055)"
                                required
                            />
                        </div>
                        <div className='third-form'>
                            <label className='main-form'>
                                Level
                            </label>
                            <input
                                type='number'
                                id=''
                                placeholder='Enter Your Level'
                                className='reg-input'
                                required
                            />
                        </div>
                        <div className='fourth-form'>
                            <label className='main-form'>
                                Email
                            </label>
                            <input
                                type='text'
                                id=''
                                placeholder='Enter Your Email'
                                className='reg-input'
                                required
                            />
                        </div>
                        <div className='fifth-form'>
                            <label className='main-form'>
                                Password
                            </label>
                            <div className='password-container'>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id=''
                                    placeholder='Enter Your Password'
                                    className='reg-input'
                                    required
                                />
                                <button type='button' onClick={togglePasswordVisibility} className='visibility-toggle'>
                                    {passwordVisible ? <MdVisibility /> : <MdVisibilityOff />}
                                </button>
                            </div>
                        </div>
                        <div className='reg-but'>
                            <RegButton onClick={handleRegisterClick} type='button' text={'SUBMIT'} class='submit' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration