import React from 'react';
import logo from './logo.svg';
import './App.css';
import Abc from './abc'
import Xyz from './xyz'
import Mno from './mno'
function App() {
  return (
    <div className="App">
      <div style={{display: "flex"}}>
        <Xyz />
        <Mno />
        <Abc />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
