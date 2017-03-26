import { getRandomLetters } from '../utils/letterUtils';

let initialState = {
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

  switch(action.type) {
    case 'LETTER_CLICK':
      let newState = Object.assign({}, state);
      newState.letters = state.letters.map((letter) => {
        if(letter.index === action.index) {
          letter.selected = true;
        }
        return letter;
      });
      return newState;
    default: 
      return state;
  }
}

