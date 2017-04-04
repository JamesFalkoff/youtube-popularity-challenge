import { getTopYouTubeResult } from '../utils/YouTubeUtils';
import { getHighScores, postResults } from '../utils/highScoreUtils';

export function letterSelect(index) {
  return { 
    type: 'LETTER_SELECT', 
    index: index 
  };
}

export function letterDeselect(index) {
  return { 
    type: 'LETTER_DESELECT', 
    index: index 
  };
}

export function requestYouTubeResults() {
  return {
    type: 'YOUTUBE_REQUEST'
  }
}

export function errorYouTubeResults() {
  return {
    type: 'YOUTUBE_ERROR'
  }
}

export function receiveYouTubeResults(results) {
  return {
    type: 'YOUTUBE_RESULTS',
    results: results
  }
}

export function receiveHighScores(scores) {
  return {
    type: 'HIGH_SCORE_RESULTS',
    scores: scores
  }
}

export function fetchYouTubeResults(query) {
  return (dispatch) => {
    dispatch(requestYouTubeResults());
    getTopYouTubeResult(query, (error, result) => {
      console.log(result);
      if(error) {
        dispatch(errorYouTubeResults());
      } else {
        dispatch(receiveYouTubeResults(result));
        result.query = query;
        postResults(result, () => {
          getHighScores((highScores) => {
            console.log(highScores);
            dispatch(receiveHighScores(highScores));
          });  
        });        
      }
    });
  }
}