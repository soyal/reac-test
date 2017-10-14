import React, { Component } from 'react'
import TransitionGroup from 'react-transition-group/TransitionGroup'
// import Transition from 'react-transition-group/Transition'
import CSSTransition from 'react-transition-group/CSSTransition'

import './index.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { items: ['hello', 'world', 'click', 'me'] }
  }
  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({ items: newItems });
  }
  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleAdd()}>Add Item</button>
        <TransitionGroup>
          {this.state.items.map((item, i) => (
            <CSSTransition key={item}
                        classNames="fade"
                        timeout={300}>
              <div>
                {item}{' '}
                <button onClick={() => this.handleRemove(i)}>
                  remove
                </button>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default TodoList