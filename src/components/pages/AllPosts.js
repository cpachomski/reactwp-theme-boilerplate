import React from 'react';

import ArticlePost from '../posts/ArticlePost.js';


export default React.createClass({
	displayName: 'AllPosts',

	getInitialState() {
		return {
			allPosts: [],
			loading: true
		}
	},

	fetchAllPosts() {
		var req = new XMLHttpRequest();

		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				this.setState({
					allPosts: JSON.parse(req.responseText)
				});
				this.setState({
					loading: false
				})
			} 
		}.bind(this)

		req.open('GET', 'http://dev.reactwp.com/wp-json/wp/v2/posts?filter[posts_per_page]=-1');
		req.send();
	},

	componentWillMount() {
		this.fetchAllPosts();
	},

	render() {
		console.log(this.state)
		
		let loading = this.state.loading ? <div className="loading">Loading...</div> : ''


		return (
			<div className="container page all-posts">
				<h1> All Posts </h1>
				{loading}
				{this.state.allPosts.map((post) => {
					return (
						<ArticlePost post={post} key={post.id} />
					)
				})}
			</div>
		)
	}
})