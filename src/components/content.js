import React, { Component } from 'react';

class Content extends Component {

  render() {
    let items = this.props.contents.map((item, i) => {
      return (
        <div key={i} style={{ "display": this.props.active === i ? 'block' : 'none' }}>{item}</div>
      );
    })


    return (
      <div>
        {items}
      </div>
    );
  }
}

export default Content;