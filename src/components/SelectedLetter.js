import React from 'react';

class SelectedLetter extends React.Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
    return (
      <div className='letter' onClick={() => {this.props.onLetterClick(this.props.letter.index)}} >
      	{this.props.letter.letter}
      </div>
    );
  }
}

export default SelectedLetter;