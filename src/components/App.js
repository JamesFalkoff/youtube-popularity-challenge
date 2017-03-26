import React from 'react';
import PlayArea from './PlayArea';
import SearchArea from './SearchArea';

class App extends React.Component {
  constructor() {
    super();
  }
 
  render() {
    return (
      <div>
        <PlayArea />
        <SearchArea />
      </div>
    );
  }
}

export default App;