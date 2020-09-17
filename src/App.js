import React from 'react';
import logo from './logo.svg';
import './App.css';
import Particle from './Components/Particle';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', width: "100%" }}>
        <Particle />
      </div>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code>!
        </p>
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
    </div>
  );
}

export default App;
