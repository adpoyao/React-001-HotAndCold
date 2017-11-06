import React from 'react';
import Feedback from './feedback';
import Form from './form';
import History from './history';
import './gamebox.css';

export default function Gamebox (props) {

  return (
    <div className='game-container'>
      <Feedback feedback={props.feedback}/>
      <Form currentNumber={props.currentNumber}/>
      <History history={props.history}/>
    </div>
  )
}