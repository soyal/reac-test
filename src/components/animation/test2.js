import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './index.css';

class Animation extends Component {
  constructor() {
    super();
    this.state = {
      content: ['1111111', '2222222222']
    };

    this.add = this.add.bind(this);
    this.substract = this.substract.bind(this);
  }

  add() {
    let newItems = this.state.content.concat('new item');
    this.setState({
      content: newItems
    });
  }

  
  substract() {
    let newItems = this.state.content.slice(0, this.state.content.length - 1);
    this.setState({
      content: newItems
    });
  }

  render() {

    return (
      <div>
        <h3>animation test2</h3>
        <button type="button" onClick={this.add}>add</button>
        <button type="button" onClick={this.substract}>substract</button>
        <ReactCSSTransitionGroup
          transitionName="test"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          <div>
          {this.state.content.map(function(e, i) {
            return <p key={i}>{e}</p>
          })}
         </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Animation;