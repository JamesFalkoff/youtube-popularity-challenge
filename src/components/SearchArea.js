import React from 'react';
import { connect } from 'react-redux';

import { letterDeselect, fetchYouTubeResults } from '../actions/actions';
import SearchSelection from './SearchSelection';

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState,
    letters: state.letters.selectedLetters,
    results: state.gameResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLetterClick: (index) => {
      dispatch(letterDeselect(index));
    },
    onSubmit: (letters) => {
      let query = letters.map((letter) => { return letter.letter; }).join('');
      dispatch(fetchYouTubeResults(query));
    }
  };
}

const SearchArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSelection);

export default SearchArea;