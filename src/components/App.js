import React from 'react';
import TitleArea from './TitleArea';
import PlayArea from './PlayArea';
import SearchArea from './SearchArea';

class App extends React.Component {
  constructor() {
    super();
  }
 
  render() {
    return (
      <div>
        <TitleArea />
        <PlayArea />
        <SearchArea />
      </div>
    );
  }
}

export default App;