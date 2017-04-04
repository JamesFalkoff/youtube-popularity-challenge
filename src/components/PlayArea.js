import React from 'react';
import { connect } from 'react-redux';

import { letterSelect, fetchYouTubeResults, playAgain } from '../actions/actions';
import LetterSelection from './LetterSelection';

const mapStateToProps = (state) => {
  return {
    letters: state.letters.allLetters,
    selectedLetters: state.letters.selectedLetters,
    gameState: state.gameState,
    highScores: state.highScores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLetterClick: (index) => {
      dispatch(letterSelect(index));
    },
    onTimeout: (selectedLetters) => {
      let query = selectedLetters.map((letter) => { return letter.letter; }).join('');
      dispatch(fetchYouTubeResults(query));      
    },
    playAgain: () => {
      dispatch(playAgain());
    }
  };
}

const PlayArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(LetterSelection);

export default PlayArea;
