import React, { Component } from 'react'
import Spinner from './loader'

import './index.css'

class SpinnerExample extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        show: true
      })
    }, 2000)

    window.setTimeout(() => {
      this.setState({
        show: false
      })
    }, 2100)
  }

  render() {
    return (
      <div className="cc-loader-test">
        <Spinner show={this.state.show}></Spinner>
        <p>1111111111111111111111</p>
        <p>1111111111111111111111</p>
        <p>1111111111111111111111</p>
        <p>1111111111111111111111</p>
        <p>1111111111111111111111</p>
        <p>1111111111111111111111</p>
      </div>
    )
  }
}

export default SpinnerExample