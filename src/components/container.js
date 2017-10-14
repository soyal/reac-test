import React, {Component} from 'react';
import CommentBox from './comment-box';
import Fill from './fill';

class Container extends Component {

  render() {
    return (
      <div>
        <div>
          <p>这是头部填充</p>
          <p>~~~~~~~</p>
          <p>~~~~~~~</p>
          <p>~~~~~~~</p>
        </div>
        <CommentBox></CommentBox>
        <Fill></Fill>
      </div>
    );
  }
}

export default Container;