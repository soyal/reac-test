import { Component } from 'react'
import ReactDOM from 'react-dom'

class Portal extends Component {

  componentWillUnmount() {
    
  }

  render() {
    const { children } = this.props
    return ReactDOM.createPortal(children, document.querySelector('#root'))
  }
}

export default Portal