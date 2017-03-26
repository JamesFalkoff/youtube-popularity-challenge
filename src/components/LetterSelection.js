import React from 'react';

import Letter from './Letter';

class LetterSelection extends React.Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
    return (
      <div className='letterSelection'>
        {this.props.letters.map((letter) => <Letter letter={letter} onLetterClick={this.props.onLetterClick} />)}
      </div>
    );
  }
}

export default LetterSelection;