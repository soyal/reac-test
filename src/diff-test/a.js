import React, { Component } from 'react';
import Aa from './a-a';
import Ab from './a-b';

//todo
class A extends Component {
  constructor() {
    super();
    this.state = {
      content: [{
        type: 'a'
      }, {
        type: 'b'
      }],
      sort: [{
        name: 'a'
      }, {
        name: 'b'
      }, {
        name: 'c'
      }]
    };

    this.reverse = this.reverse.bind(this);
  }

  render() {
    return (
      <div>
        <div>
          {this.state.content.map((e, i) => {
            if (e.type === 'a') {
              return <Aa key={i}></Aa>;
            } else if (e.type === 'b') {
              return <Ab key={i}></Ab>;
            }
            return '';
          })}
        </div>
        <button type="button" onClick={() => {
          this.setState({
            content: [{
              type: 'b'
            }, {
              type: 'a'
            }]
          })
        }}>A update</button>

        <ul> 
          {this.state.sort.map((item, i) => {
            return <li key={item.name}>{item.name} <input type="text"/></li>
          })} 
        </ul> 
        <button type="button" onClick={this.reverse}>reverse</button>
      </div>
    );
  }

  reverse() {
    let arr = this.state.sort.slice();
    this.setState({
      sort: arr.reverse()
    });
  }

  componentWillMount() {
    console.log('A will mount');
  }

  componentDidMount() {
    console.log('A did mount');
  }

  componentWillUpdate() {
    console.log('A will update');
  }

  componentDidUpdate() {
    console.log('A did update');
  }
}

export default A;