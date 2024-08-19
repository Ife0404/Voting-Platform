import React, { useEffect } from 'react';
import "./UserInfo.css";
import PROFILE from "../../../../Images/svg/profile.svg";
import UserButton from "../../Buttons/UserButton/UserButton"
import PENCIL from "../../../../Images/svg/pencil.svg";
import UserNavbar from '../../Navbar/UserNavbar/UserNavbar';

function UserInfo() {

    useEffect(() => {
        document.title = "User Info";
    }, []);

    return (
        <div className='user-info'>
            <div className='user-content'>
                <div className='user-first'>
                    <div className='profile-image'>
                        <img src={PROFILE} alt='altText' />
                    </div>
                    <div className='ubut'>
                        <UserButton type='button' text={'Change profile picture'} class='submit' />
                    </div>
                    <div className='edit-profile'>
                        <span className='edit-image'>
                            <img src={PENCIL} alt='altText' />
                        </span>
                        <span className='edit-text'>Edit Profile</span>
                    </div>
                </div>
                <div className='user-second'>
                    <div className='info-nav'>
                        <UserNavbar />
                    </div>
                    <div className='usersec-content'>
                        <div className='name'>
                            <div className='name-fill'>Name:</div>
                            <div className='name-real'>John Doe</div>
                        </div>
                        <div className='matric'>
                            <div className='matric-no'>
                                <div className='matric-fill'>Matric Number:</div>
                                <div className='matric-real'>BU18CSC1005</div>
                            </div>
                            <div className='department'>
                                <div className='department-fill'>Department</div>
                                <div className='department-real'>Computer Science</div>
                            </div>
                        </div>
                        <div className='email'>
                            <div className='email-fill'>Email:</div>
                            <div className='email-real'>johndoe@gmail.com</div>
                        </div>
                        <div className='level'>
                            <div className='level-fill'>Level:</div>
                            <div className='level-real'>300</div>
                        </div>
                        <div className='verification'>
                            <div className='ver-content'>
                                <div className='ver-fill'>Eligible</div>
                                <div className='ver-real'>Yes</div>
                            </div>
                            <div className='sver-content'>
                                <div className='sver-fill'>Verified</div>
                                <div className='sver-real'>Yes</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserInfo