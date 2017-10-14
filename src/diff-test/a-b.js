import React, {Component} from 'react';

class Ab extends Component {
  render() {
    return (
      <div>A-b</div>
    );
  }

  componentWillMount() {
    console.log('Ab will mount');
  }

  componentDidMount() {
    console.log('Ab did mount');
  }

  componentWillUpdate() {
    console.log('Ab will update');
  }

  componentDidUpdate() {
    console.log('Ab did update');
  }

  componentWillUnmount() {
    console.log('Ab will unmount');
  }
}

export default Ab;