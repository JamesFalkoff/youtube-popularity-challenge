import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='searchResults'>
        <div>Top Search Result For: <b>{this.props.query}</b></div>
        <ul>
          <li>Title: {this.props.results.snippet.title}</li>
          <li>Channel: {this.props.results.snippet.channelTitle}</li>
          <li>View Count: {this.props.results.statistics.viewCount}</li>
        </ul>
        <div><h1>Your Score: {this.props.results.statistics.viewCount}</h1></div>
      </div>
    );
  }
}

export default SearchResults;