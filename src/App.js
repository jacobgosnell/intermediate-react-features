import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Toggle from './components/ToggleRPC';
import Portal from './components/Portal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                {on && <h1>Show Me</h1>}
                <button onClick={toggle}>Show / Hide</button>
                <Portal>
                  {on && <h1>Hi, i'm in a portal.</h1>}
                </Portal>
              </Fragment>
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
}
export default App;
