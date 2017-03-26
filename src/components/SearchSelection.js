import React from 'react';

import SelectedLetter from './SelectedLetter';

class SearchSelection extends React.Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
    return (
      <div className='searchSelectionArea'>
        <div className='searchSelection'>
          {this.props.letters.filter((letter) => { return letter.selected; })
                             .map((letter) => <SelectedLetter letter={letter} onLetterClick={this.props.onLetterClick} />)}
        </div>
        <img className='submitButton' src='assets/YouTube-icon-full_color.png'/>
      </div>
    );
  }
}

export default SearchSelection;