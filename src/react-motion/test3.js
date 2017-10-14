/**
 * react-motion 的测试
 * 简单的demo TransitionMotion
 */
import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'

import './test.css'

class Test3 extends Component {
  state = {
    show: true
  }

  componentDidMount() {
    this.setState({
      show: false
    })
  }

  clickHandler() {
    this.setState({
      show: !this.state.show
    })
  }

  willEnter(styleThatEnter) {
    return { scale: 0 }
  }

  willLeave(styleThatLeft) {
    return { scale: spring(0) }
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}>run</button>
        <TransitionMotion styles={this.state.show ? [{
          key: 'test',
          style: { scale: spring(1) }
        }] : []}
          willEnter={this.willEnter}
          willLeave={this.willLeave}>
          {interpolatingStyles => (
              interpolatingStyles[0] ? (
                <div className="box3"
                  key={interpolatingStyles[0].key}
                  style={{
                    transform: `scale(${interpolatingStyles[0].style.scale},${interpolatingStyles[0].style.scale})`
                  }}></div>
              ) : null
          )}
        </TransitionMotion>

      </div>
    )
  }

}

export default Test3