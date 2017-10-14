import React from 'react';
import B from './B';
// 用于react context的测试
class A extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: 'test',
        sex: 'male'
      }
    };

  }

  // add this method
  getChildContext() {
    return {
      user: this.state.user
    };
  }

  render() {
    return (
      <div>
        <h3>A</h3>
        <B></B>
        <button type="button" onClick={() => {
          let newUser = Object.assign({}, this.state.user)
          newUser.name = "tttttttttttt"
          this.setState({
            user: newUser
          })
        }}>click</button>
      </div>
    );
  }
}

// add this property
A.childContextTypes = {
  user: React.PropTypes.object
}

export default A;