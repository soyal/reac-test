import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class RouterTest extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/test/a">to test a</Link>
            <br />
            <Link to="/test/b">to test b</Link>
          </div>
          <div>
            <Route
              path="/test/a"
              children={({ match }) => {
                debugger
                return <div>is match: {match}</div>
              }}
            />
          </div>
        </div>
      </Router>
    )
  }
}

export default RouterTest
