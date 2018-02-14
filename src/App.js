import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/login.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="blocks">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
          </div>
          
          <div className="login-container">
            <Login></Login>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
