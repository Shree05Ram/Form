import React, { Component } from 'react';
import './App.css';
import logo from './Aikaan.png';
import Form1 from './Form1';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        <header className="App-header">
        <Form1/>
        </header>
      </div>  
    );
  }
}

export default App;