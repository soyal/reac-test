import React, { Component } from 'react';
import "./top-bar.css";

class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      xiding: {
        position: 'relative'
      }
    }
  }

  render() {
    let { items, changeFocus } = this.props;

    return (
      <div className="top-bar">
        <ul className="item-list" ref="xiding" style={this.state.xiding}>
          {items.map(function (item, i) {
            return (
              <li key={i} className="item" onClick={() => changeFocus(i)}>{item}</li>
            );
          })}
        </ul>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextState.xiding.position === this.state.xiding.position) {
      return false;
    } else {
      return true;
    }
  }

  componentWillUpdate() {
    console.log('compnent will update');
  }

  componentDidMount() {
    let xiding = this.refs['xiding'];
    let targetTop = xiding.offsetTop;
    let me = this;
    window.addEventListener('scroll', function() {
      let scrollTop = Number.parseInt(document.documentElement.scrollTop || document.body.scrollTop, 10);
      if(scrollTop >= targetTop) {
        me.setState({
          xiding: {
            position: 'fixed',
            top: 0,
            left: 0
          }
        });
      } else {
        me.setState({
          xiding: {
            position: 'relative'
          }
        });
      }
    });
  }
}

/**
 * 获取dom元素距离页面顶部的距离
 */
// function getOffsetTop(dom) {
//   // 如果该元素有父节点，且父节点不是body
//   if(dom.parentNode && dom.parentNode.tagName.toLowerCase() !== 'body') {
//     return dom.offsetTop + getOffsetTop(dom.parentNode);
//   }

//   return dom.offsetTop;
// }

export default TopBar;