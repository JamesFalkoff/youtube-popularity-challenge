import { getRandomLetters } from '../utils/letterUtils';

let initialState = {
  gameState: 'playing',
  letters: getRandomLetters(54).map((letter, index) => {
    return {
      letter: letter,
      index: index,
      selected: false
    };
  })
}

export function reducer(state, action) {
  if(state === undefined) {
    return initialState;
  } 

  let newState = Object.assign({}, state);
  switch(action.type) {
    case 'YOUTUBE_REQUEST':
      newState.gameState = 'fetching';
      return newState;
    case 'LETTER_SELECT':
      newState.letters = state.letters.map((letter) => {
        if(letter.index === action.index) {
          letter.selected = true;
        }
        return letter;
      });
      return newState;
    case 'LETTER_DESELECT':
      newState.letters = state.letters.map((letter) => {
        if(letter.index === action.index) {
          letter.selected = false;
        }
        return letter;
      });
      return newState;
    default: 
      return state;
  }
}

