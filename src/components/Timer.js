import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: 30
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    ); 
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if(this.props.gameState === 'playing') {
      var timeRemaining = this.state.timeRemaining - 1;
      this.setState({
        timeRemaining: timeRemaining
      });
      if(timeRemaining === 0) {       
        this.props.onTimeout(this.props.selectedLetters);
      }
    } else {
      this.state.timeRemaining = 30;
    }
  } 

  render() {
    return (
      <div className='timer'>
        <span>0:{this.state.timeRemaining >= 10 ? this.state.timeRemaining : '0' + this.state.timeRemaining}</span>
        {this.props.gameState !== 'playing' && 
          <button className='playAgainButton' onClick={this.props.playAgain}>Play Again</button>
        }
      </div>
    );
  }
}

export default Timer;