import React from 'react';
import './IntroButton.css';

function IntroButton({onClick, type, text}) {
  return (
    <button onClick={onClick} type={type} className='button'>
        {text}
    </button>
  )
}

export default IntroButton;