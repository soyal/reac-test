import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.css';

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      type: 0
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    if (this.state.type === 0) {
      this.setState({
        type: 1
      });
    } else {
      this.setState({
        type: 0
      });
    }
  }


  render() {

    return (
      <div>
        <h3>animation test1</h3>
        <button type="button" onClick={this.toggle}>toggle</button>
        <ReactCSSTransitionGroup
          transitionName="test"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
         {this.state.type === 0 ? <div className="item" key={1}>11111111111111</div> : <div className="item" key={2}>2222222222222222</div>}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Animation;