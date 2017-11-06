import React from 'react';

import './gamebox.css';

export default function Gamebox (props) {

const histories = props.history.map((history, index) => {
  return <li key={index}>{history}</li>
})

  return (
    <div className='game-container'>
      <div className='feedback'>{props.feedback}</div>
      <div className='form'>
        <form>
          <input type='text' placeholder='Enter your Guess'></input>
          <button type="button">Guess</button>
        </form>
        <span>Guess #{props.currentNumber}!</span>
      </div>
      <div className='history'>{histories}</div>
    </div>
  )
}