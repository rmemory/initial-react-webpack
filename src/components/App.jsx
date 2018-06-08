/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import {
	BrowserRouter as
	Router, // Switch, Route, Link,
} from 'react-router-dom';

import css from './App.css'; // eslint-disable-line no-unused-vars

const App = () => (
	<Router>
		<div className="App">
			<h1>Hello World</h1>
			{/* <header>
				<Link to="/">  eslint-disable-line
					<h1>Hello World</h1>
				</Link>
			</header>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/:id" component={App} />
			</Switch> */}
		</div>
	</Router>
);

export default App;

