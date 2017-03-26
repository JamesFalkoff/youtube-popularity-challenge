import React from 'react';

class Letter extends React.Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
    return (
      <div className='letter' onClick={() => {this.props.onLetterClick(this.props.letter.index)}} >
      	{!this.props.letter.selected && this.props.letter.letter}
      </div>
    );
  }
}
export default Letter;