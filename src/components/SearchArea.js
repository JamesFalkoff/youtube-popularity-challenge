import React from 'react';
import { connect } from 'react-redux';

import { letterDeselect } from '../actions/actions';
import SearchSelection from './SearchSelection';

const mapStateToProps = (state) => {
  return {
    letters: state.letters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLetterClick: (index) => {
      dispatch(letterDeselect(index));
    }
  };
}

const SearchArea = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchSelection);

export default SearchArea;