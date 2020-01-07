import React from 'react';
import logo from './logo.svg';
import './App.css';
const REACT_VERSION = React.version;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit by California <code>src/App.js</code> and save to reload.
        </p>
        <div>React version: {REACT_VERSION}</div>,
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
