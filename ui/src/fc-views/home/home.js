import React, { Component } from 'react';
import logo from './logo.svg';
import './home.css';

let state = {};

class App extends Component {

  componentDidMount() {
    /* 
      fetch('/user')
      .then(res => res.json())
      .then(user => this.setState({ user }));
    */
    let userDetails = {
      userName: 'varuner',
    };

    let state = {
      user: userDetails,
    }

    this.setState(state);

  }
  
  render() {
    return (
      <div id='MainContainer'>
        <div id='Header' class='header'>
          <span class='logoContainer'>
            <img src={logo} className="App-logo" alt="logo" />    
          </span>
          <span class='userNameInHeader'>
            varuner
          </span>
        </div>
        {/* <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            ALLO
          </p>
          <div>
            <h1>{JSON.stringify(this.state)}</h1>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
