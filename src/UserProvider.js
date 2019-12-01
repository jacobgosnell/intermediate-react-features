import React, { Component } from "react";
import { UserContext } from './UserContext';

export default class UserProvider extends Component {
  // using this in place of a backend user account
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
