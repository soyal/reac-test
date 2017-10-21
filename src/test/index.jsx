import React from 'react'

class Test extends React.Component {
  state = {
    a: 1
  }

  componentDidMount() {
    this.setState({
      a: 2
    })
    console.log('t1', this.state.a)

    this.setState({
      a: 3
    })
    console.log('t2', this.state.a)

    setTimeout(() => {
      this.setState({
        a:4
      })

      console.log('t3', this.state.a)

      this.setState({
        a: 5
      })
      console.log('t4', this.state.a)
    })
  }

  render() {
    return (
      <div>
        <span>
          thisis a span tag
        </span>'
        <div></div>
        <p>1111111111111111111</p>
      </div>
    )
  }
}

export default Test