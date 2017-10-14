import React, {Component} from 'react';

class Aa extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
  }

  render() {
    return (
      <div>
        <span>A-a</span>
        <button type="button" onClick={() => this.setState({count: 2})}>A-a update</button>
      </div>
    );
  }

  componentWillMount() {
    console.log('Aa will mount');
  }

  componentDidMount() {
    console.log('Aa did mount');
  }

  componentWillUpdate() {
    console.log('Aa will update');
  }

  componentDidUpdate() {
    console.log('Aa did update');
  }

  componentWillUnmount() {
    console.log('Aa will unmount');
  }
}

export default Aa;