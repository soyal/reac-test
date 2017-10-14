import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {trigger} from './action'

class App extends Component {
  count = 0

  componentWillReceiveProps(nextProps) {
    this.count++
    console.log(this.count)
    console.log('nextProps: ', nextProps)
  }

  render() {
    const {a, aa, trigger} = this.props
    return (
      <div>
        <span>a: {a}</span>
        <span>aa: {aa}</span>
        <button onClick={trigger}>触发多次action</button>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  a: store.a,
  aa: store.aa
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  trigger
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)