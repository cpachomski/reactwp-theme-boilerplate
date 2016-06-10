import React from 'react';


export default React.createClass({
	displayName: 'AllPosts',

	getInitialState() {
		return {
			allPosts: []
		}
	},

	fetchAllPosts() {
		console.log('fetching posts...');
	},

	render() {
		return (
			<div className="container page all-posts">
				<h1> All Posts </h1>
			</div>
		)
	}
})