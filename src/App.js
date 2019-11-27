import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Toggle } from 'utilities';
import { Modal } from 'elements';
import User from './User';
import { UserContext } from './UserContext';

class UserProvider extends Component {
  // using this in place of a backend user accounts
  state = {
    id: '123',
    name: 'Jake Gosnell',
    email: 'jake@leveluptuts.com'
  }

  logout = () => {
    this.setState({
      id: null,
      name: '',
      email: ''
    })
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state,
          logout: this.logout
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            <User />
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
      </UserProvider>
    );
  }
}
export default App;
