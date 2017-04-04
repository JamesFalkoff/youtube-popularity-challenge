import $ from 'jquery';
import { SERVER_URL } from '../config/config';
const scoresUrl = SERVER_URL + '/scores';

export function getHighScores(callback) {
  $.ajax({
    url: scoresUrl,
    method: 'GET',
    success: function(data) {
      callback(JSON.parse(data));
    },
    error: function(data) {
      console.log('Error retrieving high scores from the server: ', data);
    }
  });  
}

export function postResults(gameResults, callback) {
  $.ajax({
    url: scoresUrl,
    method: 'POST',
    data: JSON.stringify(gameResults), 
    contentType: 'application/json',
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      console.log('Error posting high scores to the server: ', data);
    }
  });   
}