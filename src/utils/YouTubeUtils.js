import { YOUTUBE_API_KEY } from '../config/config';
import $ from 'jquery';

function getVideos(query, callback) {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      key: YOUTUBE_API_KEY, 
      q: query, 
      maxResults: 1, 
      part: 'snippet'
    },
    success: function(data) {
      callback(null, data);
    },
    error: function(error) {
      console.log('Error in getVideos ajax request. Error: ', error);
      callback(error, null);
    }
  });
};

function getVideoStatistics(videoId, callback) {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    method: 'GET',
    data: {
      key: YOUTUBE_API_KEY, 
      id: videoId, 
      maxResults: 1, 
      part: 'statistics'
    },
    success: function(data) {
      callback(null, data);
    },
    error: function(error) {
      console.log('Error in getVideoStatistics ajax request. Error: ', error);
      callback(error, null);      
    }
  });
};

export function getTopYouTubeResult(query, callback) {
  getVideos(query, function(error, data) {
    if(error) {
      callback(error, null);
    } else if (!data.items.length) {
      callback({}, null);
    } else {
      var videoId = data.items[0].id.videoId;
      var snippet = data.items[0].snippet;
      getVideoStatistics(videoId, function(error, data) {
        if(error) {
          callback(error, null);
        } else {
          var result = {
            snippet: snippet,
            statistics: data.items[0].statistics
          };
          callback(null, result);
        }
      })
    }
  })
};