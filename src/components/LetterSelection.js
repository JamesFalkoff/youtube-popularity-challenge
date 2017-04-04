import React from 'react';

import Letter from './Letter';
import HighScoreDisplay from './HighScoreDisplay';

class LetterSelection extends React.Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
    return (
      <div>
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