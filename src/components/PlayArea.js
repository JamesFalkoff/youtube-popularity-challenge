import React from 'react';
import { connect } from 'react-redux';

import { letterClick } from '../actions/actions';
import LetterSelection from './LetterSelection';

const mapStateToProps = (state) => {
  return {
    letters: state.letters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLetterClick: (index) => {
      dispatch(letterClick(index));
    }
  };
}

const PlayArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(LetterSelection);

export default PlayArea;
