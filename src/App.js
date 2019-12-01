import React, { Component, Fragment } from 'react';
import {Transition} from 'react-spring/renderprops'

import logo from './logo.svg';
import './App.css';
import { Toggle } from 'utilities';
// import { Modal } from 'elements';
import User from './User';
import UserProvider from './UserProvider';

class App extends Component {
  render() {
    return (
			<UserProvider>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />

						<User />
						<section>
							<Toggle>
								{({ on, toggle }) => (
									<Fragment>
										<button onClick={toggle}>Show / Hide</button>
										<Transition
                      items={on}
                      unique={true}
											from={{ opacity: 0 }}
											enter={{ opacity: 1 }}
											leave={{ opacity: 0 }}
										>
											{on => on && Header}
										</Transition>
									</Fragment>
								)}
							</Toggle>
						</section>
					</header>
				</div>
			</UserProvider>
		);
  }
}

const Header = styles => <h1 style={{...styles}}>Show me</h1>;

export default App;
