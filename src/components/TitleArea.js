import React from 'react';

const TitleArea = () => {
  return (
	<div className='titleSection'>
      <img className='logo' src='assets/YouTube-logo-full_color.png'></img>
      <h1>YouTube Popularity Challenge</h1>
      <p>You have 30 seconds to create a word from the random letters below.</p>
      <p><b>Try to create a word that finds the most popular video on YouTube! Your score is the view count of the top YouTube search result for your word.</b></p>
      <span>Click the red and white arrow when ready to search YouTube for your word or phrase. </span>
    </div>
  );
}

export default TitleArea;


