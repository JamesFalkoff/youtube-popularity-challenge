import React from 'react';

import { alphabet } from '../config/alphabet';
import LetterSelection from './LetterSelection';

class PlayArea extends React.Component {
  constructor() {
    super();
    this.state = {
    	letterSelection: this.getRandomLetters(54)
    }
  }

  getRandomLetters(size) {
    var letterSelection = [];
    for(let i = 0; i < size; i++) {
      letterSelection[i] = alphabet[Math.floor(Math.random() * alphabet.length)]; 
    } 
    return letterSelection;
  }
 
  render() {
    return (
      <LetterSelection letters={this.state.letterSelection} />
    );
  }
}
export default PlayArea;
