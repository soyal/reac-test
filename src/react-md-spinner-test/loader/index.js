import React, { Component } from 'react'
import MDSpinner from 'react-md-spinner'
import PropTypes from 'prop-types'
import { TransitionMotion, spring } from 'react-motion'

import './index.css'

class Spinner extends Component {
  static propTypes = {
    show: PropTypes.bool  // 是否显示
  }

  willEnter() {
    return { opacity: 0 }
  }

  willLeave() {
    return { opacity: spring(0) }
  }

  render() {
    return (
      <TransitionMotion willEnter={this.willEnter}
        willLeave={this.willLeave}
        styles={this.props.show ? [{
          key: 'spinner',
          style: {
            opacity: spring(1)
          }
        }] : []}>
        {styles => (
          styles[0] ? (
            <div className="cc-spinner"
              key={styles[0].key}
              style={{
                opacity: styles[0].style.opacity
              }}>
              <MDSpinner singleColor="#32bba4"></MDSpinner>
            </div>
          ) : null
        )}
      </TransitionMotion>
    )
  }
}

export default Spinner