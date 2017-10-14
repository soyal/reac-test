import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

@observer
class Counter extends Component {
  render() {
    const {store} = this.props
    return (
      <div>
        <h3>累加器</h3>
        <p>{store.count}</p>
        <button onClick={store.countUp}>up</button>
        <button onClick={store.countDown}>down</button>
        <button onClick={store.countUpThreeTime}>up+3</button>
        <button onClick={store.countUpAsync}>up async</button>
        <DevTools></DevTools>
      </div>
    )
  }
}

export default Counter