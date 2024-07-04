import React from 'react';
import "./About.css";
import LINE from "../../../../Images/svg/line.svg"

function About() {
    return (
        <div className='about'>
            <div className='about-content'>
                <div className='initial-side'>
                    <div className='side-title'>
                        <h2>About</h2>
                    </div>
                    <div className='side-image'>
                        <img src={LINE} alt='altText' />
                    </div>
                </div>
                <div className='next-side'>
                    <p>An electronic voting system that will take the place of the outdated paper or ballot systems. We have used the necessary technology in every industry over time to increase productivity and conserve additional resources. However, the voting process still costs a lot of money and needs a larger staff.
                        Even with its slowdown, the system is not impervious to hacking. We provide a system that is dependable and safe, and it tackles modern issues including easier booth accessibility, polling without crowds, affordable, quick results, and more.</p>
                </div>
            </div>

        </div>
    )
}

export default About