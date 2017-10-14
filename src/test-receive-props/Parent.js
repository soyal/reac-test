import React, {Component} from 'react'
import Child from './Child'

class Parent extends Component {
  constructor() {
    super()
    this.state = {
      data: 123
    }

    this.changeData = this.changeData.bind(this)
  }

  changeData() {
    this.setState({
      data: Math.random()
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.changeData}>click to change</button>
        <Child data={this.state.data}></Child> 
      </div>
    )
  }
}

export default Parent