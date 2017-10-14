import React from 'react';
import C from './C';

class B extends React.Component {

  render() {
    return (
      <div>
        <h3>B</h3>
        <C></C>
      </div>
    );
  }
}

export default B;