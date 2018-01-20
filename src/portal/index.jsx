import React, {Component} from 'react'
import Portal from './portal'

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

        {this.state.show ? (
          <Portal>
            <div className="portal-child">111</div>
          </Portal>
        ): null}
      </div>
    )
  }
}

export default PortalDemo