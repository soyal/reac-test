import React, {Component} from 'react';
import TopBar from './top-bar';
import Content from './content';
import {fromJS} from 'immutable';

class CommentBox extends Component {
  constructor() {
    super();

    this.state = {
      active: 0,
      contents: fromJS(['这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111这是item1的内容: 11111111111111',
        '这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,这是item2的内容: 22222222222222,',
        '这是item3的内容: 33333333333333']),
      items: fromJS(['item1', 'item2', 'item3'])
    };

    this.changeFocus = this.changeFocus.bind(this);
  }

  changeFocus(index) {
    var state = this.state;
    state.active = index;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <TopBar changeFocus={this.changeFocus} items={this.state.items}></TopBar>
        <Content contents={this.state.contents} active={this.state.active}></Content>
      </div>
    );
  }
}

export default CommentBox;