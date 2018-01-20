import { Component } from 'react'
import ReactDOM from 'react-dom'

const root = document.querySelector('#root')

class Portal extends Component {
  constructor() {
    super()

    this.ctn = document.createElement('div')
  }

  componentDidMount() {
    root.appendChild(this.ctn)
  }

  componentWillUnmount() {
    
  }

  render() {
    const { children } = this.props
    return ReactDOM.createPortal(children, this.ctn)
  }
}

export default Portal