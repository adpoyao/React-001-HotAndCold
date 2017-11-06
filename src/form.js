import React from 'react';

import './form.css';

export default function Form (props) {
  return (
    <div className='form'>    
      <form>
        <input type='text' placeholder='Enter your Guess'></input>
        <button type="button">Guess</button>
      </form>
      <span>Guess #{props.currentNumber}!</span>
    </div>
  )}