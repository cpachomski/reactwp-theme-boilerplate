import React from 'react';
import { Router, Route, Link, hashHistory } from 'react-router';

import Header from './header/Header';
import AllPosts from './pages/AllPosts';
import About from './pages/About';

export default React.createClass({
	displayName: 'App',

	render() {
		return (
			<div className='App'>
				<Header />
				<Router history={hashHistory}>
					<Route path='/' component={AllPosts} />
					<Router path='/about' component={About} />
				</Router>
			</div>
		)
	}
})