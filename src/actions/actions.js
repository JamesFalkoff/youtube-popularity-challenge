import { getTopYouTubeResult } from '../utils/YouTubeUtils';

export function letterSelect(index) {
  return { 
    type: 'LETTER_SELECT', 
    index: index 
  };
};

export function letterDeselect(index) {
  return { 
    type: 'LETTER_DESELECT', 
    index: index 
  };
};

export function requestYouTubeResults() {
  return {
    type: 'YOUTUBE_REQUEST'
  }
}

export function fetchYouTubeResults(query) {
  return (dispatch) => {
    dispatch(requestYouTubeResults());
    getTopYouTubeResult(query, (error, result) => {
      console.log(result);
    });
  }
}