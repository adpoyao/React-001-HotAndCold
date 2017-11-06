import React from 'react';

import './navbar.css';

export default function Navbar(){
  return(
    <nav>
      <ul>
        <li className='what'><a href='example.com'>WHAT?</a></li>
        <li className='new-game'><a href='example.com'>+ NEW GAME</a></li>
      </ul>
    </nav>
  )
}