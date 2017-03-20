import React from 'react';

class Letter extends React.Component {
  constructor(props) {
    super(props);    
  }
 
  render() {
    return (
      <div className='letter'>
      	{this.props.letter}
      </div>
    );
  }
}
export default Letter;