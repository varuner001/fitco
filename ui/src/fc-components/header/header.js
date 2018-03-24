import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('/user')
      .then(res => res.json())
      .then(user => this.setState({ user }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          ALLO
        </p>
        <div>
          <h1>{JSON.stringify(this.state)}</h1>
        </div>
      </div>
      
    );
  }
}

export default App;
