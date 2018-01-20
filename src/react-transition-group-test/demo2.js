import React, { Component } from 'react'
import Transition from 'react-transition-group/Transition'

class Demo2 extends Component {
  constructor() {
    super()

    this.state = {
      show: false
    }
  }

  render() {
    const defaultStyle = {
      transition: `opacity 300ms ease-in-out`,
      opacity: 0,
    }

    const transitionStyles = {
      entering: { opacity: 1 },
      entered: { opacity: 1 },
    }

    return (
      <div>
          {this.state.show ? (
            <Transition in={this.state.show} timeout={300} key={Math.random()}>
              {
                (status) => {
                  console.log(status)
                  return <div style={{
                    ...defaultStyle,
                    ...transitionStyles[status]
                  }}>this is a test text</div>
                }
              }
            </Transition>
          ) : null}
        <button onClick={() => {
          this.setState({
            show: !this.state.show
          })
        }}>toggle</button>
      </div>
    )
  }
}

export default Demo2