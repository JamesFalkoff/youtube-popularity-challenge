import React from 'react';

import Timer from './Timer';
import Letter from './Letter';
import HighScoreDisplay from './HighScoreDisplay';

class LetterSelection extends React.Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
    return (
      <div>
        <Timer gameState={this.props.gameState} 
              selectedLetters={this.props.selectedLetters} 
              onTimeout={this.props.onTimeout} 
              playAgain={this.props.playAgain}/>
        {this.props.gameState !== 'results' &&
          <div className='letterSelection'>
            {this.props.letters.map((letter) => <Letter letter={letter} onLetterClick={this.props.onLetterClick} />)}
          </div>
        }
        {this.props.gameState === 'results' &&
          <HighScoreDisplay highScores={this.props.highScores} />
        }
      </div>
    );
  }
}

export default LetterSelection;