import React, { useEffect } from "react";
import "./Steps.css";
import notebook from "../../../../Images/svg/notebook.svg";
import signin from "../../../../Images/svg/signin.svg";
import windows from "../../../../Images/svg/windows.svg";
import key from "../../../../Images/svg/key.svg";
import ballot from "../../../../Images/svg/ballot.svg";
import AOS from "aos";

function Steps() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the duration of the animations
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div className="steps">
      <div className="steps-title">
        <h2>
          <span className="title">Follow these ea</span>
          <span className="second-title">sy steps</span>
        </h2>
      </div>
      <div data-aos="fade-up" className="steps-body">
        <div className="body-one">
          <img src={notebook} alt="" className="body-image" />
          <div className="body-body">
            <p>Register yourself by filling the required informations</p>
          </div>
        </div>
        <div className="body-two">
          <img src={signin} alt="" className="body-image" />
          <div className="body-body">
            <p>Sign in as user</p>
          </div>
        </div>
        <div className="body-three">
          <img src={windows} alt="" className="body-image" />
          <div className="body-body">
            <p>Go to the vote option on the dashboard</p>
          </div>
        </div>
        <div className="body-four">
          <img src={key} alt="" className="body-image" />
          <div className="body-body">
            <p>Give security key</p>
          </div>
        </div>
        <div className="body-five">
          <img src={ballot} alt="" className="body-image" />
          <div className="body-body">
            <p>Vote your candidate and submit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
