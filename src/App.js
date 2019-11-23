import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'utilities';
import { Modal } from 'elements';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Toggle>
            {({on, toggle}) => (
              <Fragment>
                <button onClick={toggle}>Login</button>
                <Modal on={on} toggle={toggle}>
                  <h1>Still in modal.</h1>
                </Modal>
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
