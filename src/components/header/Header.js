import React from 'react';

export default React.createClass({
	displayName: 'Header',

	render() {
		return (
			<nav className='navbar navbar-dark bg-inverse'>
				<a className='navbar-brand' href='/'>ReactWP</a>
				
			</nav>
		)
	}
});