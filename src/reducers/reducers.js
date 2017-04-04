import { getRandomLetters } from '../utils/letterUtils';

const initialState = {
  gameState: 'playing',
  letters: {
    allLetters: getRandomLetters(54).map((letter, index) => {
      return {
        letter: letter,
        index: index,
        selected: false
      };
    }),
    selectedLetters: []
  },
  gameResults: {},
  highScores: []
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
    case 'YOUTUBE_ERROR':
      newState.gameState = 'networkError';
      return newState;
    case 'YOUTUBE_RESULTS':
      newState.gameState = 'results';
      newState.gameResults = action.results;
      return newState;  
    case 'HIGH_SCORE_RESULTS':
      newState.gameState = 'results';
      newState.highScores = action.scores;
      return newState;
    case 'LETTER_SELECT':
    case 'LETTER_DESELECT':
      newState.letters = letters(state.letters, action);
      return newState;  
    case 'PLAY_AGAIN':
      return resetState();
    default: 
      return state;
  }
}

function letters(state, action) {
  let newState = {};
  switch(action.type) {
    case 'LETTER_SELECT':
      newState.selectedLetters = state.selectedLetters.map((letter) => {
        return letter;
      });
      state.allLetters.forEach((letter) => {
        if(letter.index === action.index && !letter.selected) {
          newState.selectedLetters.push(letter);
        }
      });
      newState.allLetters = state.allLetters.map((letter) => {
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
      newState.allLetters = state.allLetters.map((letter) => {
        if(letter.index === action.index) {
          letter.selected = false;
        }
        return letter;
      });
      return newState;
    }
}

function resetState() {
  return {
    gameState: 'playing',
    letters: {
      allLetters: getRandomLetters(54).map((letter, index) => {
        return {
          letter: letter,
          index: index,
          selected: false
        };
      }),
      selectedLetters: []
    },
    gameResults: {},
    highScores: []
  } 
}
