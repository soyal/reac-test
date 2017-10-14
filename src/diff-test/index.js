import React from 'react';
import A from './a';
import B from './b';

class DiffTest extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  render() {
    return (
      <div>
        <A></A>
        <B></B>
        <button type="button" onClick={() => this.setState({count: 4})}>DiffTest update</button>
      </div>
    );
  }
  
  componentWillMount() {
    console.log('DiffTest will mount');
  }

  componentDidMount() {
    console.log('DiffTest did mount');
  }

  componentWillUpdate() {
    console.log('DiffTest will update');
  }

  componentDidUpdate() {
    console.log('DiffTest did update');
  }

}

export default DiffTest;