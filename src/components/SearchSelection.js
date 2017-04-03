import React from 'react';

import SelectedLetter from './SelectedLetter';

class SearchSelection extends React.Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
    return (
      <div>
        {this.props.gameState === 'playing' &&
          <div className='searchSelectionArea'>
            <div className='searchSelection'>
              {this.props.letters.map((letter) => 
                <SelectedLetter letter={letter} onLetterClick={this.props.onLetterClick} />)
              }
            </div>
            <img className='submitButton' src='assets/YouTube-icon-full_color.png' onClick={() => this.props.onSubmit(this.props.letters)}/>
          </div>
        }
        {this.props.gameState === 'fetching' &&
          <div className ='fetchingSpinner'>
            <img src='assets/spinner.gif' />
          </div>
        }
      </div>
    );
  }
}

export default SearchSelection;