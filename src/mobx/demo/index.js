import React, {Component} from 'react'

class Demo extends Component{
  render() {
    console.log('render')
    return (
      <div>demo render</div>
    )
  }
}

Object.defineProperty(Demo.prototype, 'render', {
  get: () => {
    console.log('render get')
    return <div>123</div>
  }
})

export default Demo