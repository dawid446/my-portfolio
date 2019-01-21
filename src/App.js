import React, { Component } from 'react';
import './App.css';
import Skill from './container/Skills';
import Header from './container/Header';

class App extends Component {


  render() {
    return (
      <div className="App">

          <Header></Header>

          <Skill></Skill>
      </div>
    );
  }
}

export default App;
