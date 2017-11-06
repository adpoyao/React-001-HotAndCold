import React from 'react';

import './history.css';

export default function History (props) {
  const histories = props.history.map((history, index) => {
    return <li key={index} className='historyList'>{history}</li>
  })

  return (
  <div className='history'>{histories}</div>
)}