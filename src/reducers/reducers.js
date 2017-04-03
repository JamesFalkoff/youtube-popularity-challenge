import { getRandomLetters } from '../utils/letterUtils';

let initialState = {
  gameState: 'playing',
  letters: getRandomLetters(54).map((letter, index) => {
    return {
      letter: letter,
      index: index,
      selected: false
    };
  }),
  selectedLetters: []
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
      newState.selectedLetters = state.selectedLetters.map((letter) => {
        return letter;
      });
      state.letters.forEach((letter) => {
        if(letter.index === action.index && !letter.selected) {
          newState.selectedLetters.push(letter);
        }
      });
      newState.letters = state.letters.map((letter) => {
        if(letter.index === action.index) {
          letter.selected = true;
        }
        return letter;
      });
      return newState;
    case 'LETTER_DESELECT':
      newState.selectedLetters = state.selectedLetters.map((letter) => {
        return letter;
      });
      newState.selectedLetters.forEach((letter, index) => {
        if(letter.index === action.index) {
          newState.selectedLetters.splice(index, 1);
        }
      });      
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

