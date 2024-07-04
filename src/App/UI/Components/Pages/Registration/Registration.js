import React from 'react';
import "./Registration.css";
import PERSON from "../../../../Images/svg/Person.svg";
import RegButton from "../../../Components/Buttons/RegButton/RegButton";

function Registration() {
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
                            />
                        </div>
                        <div className='second-form'>
                            <label className='main-form'>
                                Matric Number
                            </label>
                            <input
                                type='text'
                                id=''
                                placeholder='Enter Your Name'
                                className='reg-input'
                            />
                        </div>
                        <div className='third-form'>
                            <label className='main-form'>
                                Email
                            </label>
                            <input
                                type='text'
                                id=''
                                placeholder='Enter Your Name'
                                className='reg-input'
                            />
                        </div>
                        <div className='fourth-form'>
                            <label className='main-form'>
                                Password
                            </label>
                            <input
                                type='text'
                                id=''
                                placeholder='Enter Your Name'
                                className='reg-input'
                            />
                        </div>
                        <div className='fifth-form'>
                            <label className='main-form'>
                                Re-enter password
                            </label>
                            <input
                                type='text'
                                id=''
                                placeholder='Enter Your Name'
                                className='reg-input'
                            />
                        </div>
                        <div className='reg-but'>
                            <RegButton type='button' text={'SUBMIT'} class='submit' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration