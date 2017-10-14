import React, {Component} from 'react'
import A from './a'
import B from './b'

class Parent extends Component {
  state = {
    a: '',
    b: '',
    c: ''
  }

  componentWillReceiveProps() {
    console.log('parent will receive props')
  }

  componentWillUpdate() {
    console.log('parent will update')
  }

  render() {
    return (
      <div>
        <A a={this.state.a}></A>
        <B b={this.state.b}></B>
        <button onClick={() => {
          this.setState({
            a: 'testa'
          })
        }}>更改a</button>
        <button onClick={() => {
          this.setState({
            b: 'testb'
          })
        }}>更改b</button>
      </div>
    )
  }
}

export default Parent