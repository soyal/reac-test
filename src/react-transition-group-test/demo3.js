import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup'

import './index.css'

const Fade = ({ children, ...props }) => (
  <TransitionGroup>
    {props.show ? <CSSTransition
      timeout={500}
      classNames="fade"
    >
      <div>
        {children}
      </div>
    </CSSTransition> : null}
 </TransitionGroup>
);

class FadeInAndOut extends React.Component {
  constructor(...args) {
    super(...args);
    this.state= { show: false }

    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 2000)
  }
  render() {
    return (
      <Fade in={this.state.show} show={this.state.show}>
        <div>Hello world</div>
      </Fade>
    )
  }
}

export default FadeInAndOut