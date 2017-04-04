import React from 'react';
import { connect } from 'react-redux';

import { letterSelect } from '../actions/actions';
import LetterSelection from './LetterSelection';

const mapStateToProps = (state) => {
  return {
    letters: state.letters.allLetters,
    gameState: state.gameState,
    highScores: state.highScores
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLetterClick: (index) => {
      dispatch(letterSelect(index));
    }
  };
}

const PlayArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(LetterSelection);

export default PlayArea;
