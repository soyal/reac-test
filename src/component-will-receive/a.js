import React, {PureComponent} from 'react'

class A extends PureComponent {
  componentWillReceiveProps(nextProps) {
    console.log('A props change a:', nextProps.a)
  }

  render() {
    const {a} = this.props
    return (
      <div>{a}</div>
    )
  }
}

export default A