import React from 'react';


export default React.createClass({
	displayName: 'AllPosts',

	getInitialState() {
		return {
			allPosts: [],
			loading: false
		}
	},

	fetchAllPosts() {
		console.log('fetching posts...');
		var req = new XMLHttpRequest();

		this.setState({
			loading: true,
		})

		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				this.setState({
					allPosts: req.responseText
				});
			} 
		}.bind(this)

		req.open('GET', 'http://dev.reactwp.com/wp-json/wp/v2/posts');
		req.send();
	},

	componentWillMount() {
		this.fetchAllPosts();
	},

	render() {
		console.log(this.state)
		return (
			<div className="container page all-posts">
				<h1> All Posts </h1>

					{this.state.allPosts}
			</div>
		)
	}
})