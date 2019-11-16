import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/ToggleRPC';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle>
          {({on, toggle}) => (
            <div>
              {on && <h1>Show Me</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        </Toggle>
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
