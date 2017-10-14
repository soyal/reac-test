import React, { PureComponent } from 'react'

class B extends PureComponent {

  componentWillReceiveProps(nextProps) {
    console.log('B props change b:', nextProps.b)
  }

  render() {
    const { b } = this.props
    return (
      <div>{b}</div>
    )
  }
}

export default B