import React, {Component} from 'react'
import Modal from './modal'

import './index.less'

class PortalDemo extends Component {
  state = {
    show: false
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            show: !this.state.show
          })
        }}>show</button>

        <Modal show={this.state.show}></Modal>
      </div>
    )
  }
}

export default PortalDemo