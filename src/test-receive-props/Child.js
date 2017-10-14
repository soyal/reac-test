import React, {Component} from 'react'

class Child extends Component {
  constructor() {
    super()
    this.state = {
      childData: 111
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('props receive', nextProps.data)
    this.setState({
      childData: nextProps.data + 1
    })
  }

  componentDidUpdate() {
    console.log('component did update')
  }

  render() {
    return (
      <div>
        <h3>Child</h3>
        <p>{this.props.data}</p>
        <p>child data: {this.state.childData}</p>
      </div>
    )
  }
}

export default Child