import React from 'react';
import './App.css';
import Navbar from './navbar';
import Gamebox from './gamebox';

export class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      currentNumber: 8,
      recentGuess: 7,
      history: [6, 9, 13],
      feedback: 'Make your guess!',
      feedbackOptions: ['super hot', 'hot', 'cold']
    }
  }

  render() {
    return(
      <div className='container'>
        <Navbar />
        <h1 className='title'>HOT or COLD</h1>
        <Gamebox history={this.state.history}
        feedback={this.state.feedback}
        currentNumber={this.state.currentNumber}/>
      </div>
    )  
  }
}

export default App;
