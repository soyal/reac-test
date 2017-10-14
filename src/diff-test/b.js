import React, { Component } from 'react';

//todo
class B extends Component {

  render() {
    return (
      <div>
          <div>B</div>
      </div>
    );
  }

  componentWillMount() {
    console.log('B will mount');
  }

  componentDidMount() {
    console.log('B did mount');
  }

  componentWillUpdate() {
    console.log('B will update');
  }

  componentDidUpdate() {
    console.log('B did update');
  }
}

export default B;