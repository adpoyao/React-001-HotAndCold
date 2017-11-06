import React from 'react';

import './form.css';

export default function Form (props) {
  return (
    <div className='form'>    
      <form>
        <input type='text' placeholder='Enter your Guess'></input>
        <button type="button">Guess</button>
      </form>
      <div className='guess'>Guess #<span className='guessNumber'>{props.currentNumber}</span>!</div>
    </div>
  )}