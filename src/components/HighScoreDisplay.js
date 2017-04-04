import React from 'react';

class HighScoreDisplay extends React.Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
  	console.log(this.props.highScores);
    return (
	  <div className='scoreDisplay'>
	    <h1>High Scores</h1>
	    <table className='scoreTable'>
	      <thead>
	        <tr>
	          <th><b>Score</b></th>
	          <th>Search Query</th>
	          <th>YouTube Top Result</th> 
	        </tr>
	      </thead>
	      <tbody>
	        {this.props.highScores.map((score) =>
	          <tr>
	            <td>{score.score}</td>
	            <td>{score.query}</td>
	            <td>{score.result}</td> 
	          </tr>
	        )}
	      </tbody>
	    </table>
	  </div>
    );
  }
}

export default HighScoreDisplay;


