import React, { useEffect } from 'react';
import "./Feature.css";
import line from "../../../../Images/svg/line2.svg";
import lock from "../../../../Images/svg/lock.svg";
import back from "../../../../Images/svg/back.svg";
import laptop from "../../../../Images/svg/laptop.svg";
import hands from "../../../../Images/svg/hand.svg";
import cheap from "../../../../Images/svg/cheap.svg";
import easy from "../../../../Images/svg/easy.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Feature() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Customize the duration of the animations
            once: true,     // Whether animation should happen only once - while scrolling down
        });
    }, []);

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
                        <p className='feature-words'>Secured by 256 bit encryption</p>
                    </div>
                    <div className='second-feature'>
                        <img src={back} alt='altText' />
                        <p className='feature-words'>Backend by ethereum based technology</p>
                    </div>
                    <div className='third-feature'>
                        <img src={laptop} alt='altText' />
                        <p className='feature-words'>Verifiable transactions</p>
                    </div>
                    <div className='fourth-feature'>
                        <img src={hands} alt='altText' />
                        <p className='feature-words'>Easy to use</p>
                    </div>
                    <div className='fifth-feature'>
                        <img src={cheap} alt='altText' />
                        <p className='feature-words'>Cheaper than ballot voting system</p>
                    </div>
                    <div className='sixth-feature'>
                        <img src={easy} alt='altText' />
                        <p className='feature-words'>Faster voting process</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature