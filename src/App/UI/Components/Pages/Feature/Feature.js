import React from 'react';
import "./Feature.css";
import line from "../../../../Images/svg/line2.svg";
import lock from "../../../../Images/svg/lock.svg";
import back from "../../../../Images/svg/back.svg";
import laptop from "../../../../Images/svg/laptop.svg";
import hands from "../../../../Images/svg/hand.svg";
import cheap from "../../../../Images/svg/cheap.svg";
import easy from "../../../../Images/svg/easy.svg";

function Feature() {
    return (
        <div className='feature'>
            <div className='feature-content'>
                <div className='feature-first'>
                    <div className='feature-title'>
                        <h2>Features</h2>
                    </div>
                    <div className='feature-image'>
                        <img src={line} alt='altText' />
                    </div>
                </div>
                <div data-aos="fade-up" className='feature-side'>
                    <div className='first-feature'>
                        <img src={lock} alt='altText' />
                    </div>
                    <div className='second-feature'>
                        <img src={back} alt='altText' />
                    </div>
                    <div className='second-feature'>
                        <img src={laptop} alt='altText' />
                    </div>
                    <div className='first-feature'>
                        <img src={hands} alt='altText' />
                    </div>
                    <div className='first-feature'>
                        <img src={cheap} alt='altText' />
                    </div>
                    <div className='first-feature'>
                        <img src={easy} alt='altText' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature