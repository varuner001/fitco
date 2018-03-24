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
        <div id='Header' className='header'>
          <span className='logoContainer'>
            <img src={logo} className="App-logo" alt="logo" />    
          </span>
          <span className='userNameInHeader'>
            varuner
          </span>
        </div>
        <div className='footer'>
          <button className='footerButton'>&#9776;</button>
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
