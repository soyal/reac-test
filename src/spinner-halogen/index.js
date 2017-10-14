import React, {Component} from 'react'
import Loader from './loader'

class Test extends Component {
  state = {
    show: false
  }

  toggle() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return ( 
      <div style={{position: 'relative', width: '400px', height: '400px'}}>
        <Loader color="#26A65B" size="30px" show={this.state.show}></Loader>
        <button onClick={this.toggle.bind(this)}>toggle</button>
      </div>
    )
  }
}

export default Test