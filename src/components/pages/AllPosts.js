import React from 'react';

import ArticlePost from '../posts/ArticlePost.js';


export default React.createClass({
	displayName: 'AllPosts',

	getInitialState() {
		return {
			allPosts: [],
			postOffset: 0,
			postsPulled: 10,
			loading: true
		}
	},

	fetchPosts() {
		var req = new XMLHttpRequest();

		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status == 200) {
				this.setState({
					allPosts: this.state.allPosts.concat(JSON.parse(req.responseText))
				});
				this.setState({
					loading: false
				})
			}
		}.bind(this)

		req.open('GET', 'http://dev.reactwp.com/wp-json/wp/v2/posts?filter[posts_per_page]=' + this.state.postsPulled + '&offset=' + this.state.postOffset );
		req.send();
	},

	fetchNextPosts() {
		this.setState({
			postOffset: this.state.postOffset + this.state.postsPulled
		}, () => {
			this.fetchPosts();
		})
	},

	componentWillMount() {
		this.fetchPosts();
	},

	render() {
		let loading = this.state.loading ? <div className="loading">Loading...</div> : ''
		return (
			<div className=" page all-posts">
				<h1> All Posts </h1>
				{loading}
				{this.state.allPosts.map((post) => {
					return (
						<ArticlePost post={post} key={post.id} />
					)
				})}
				<button className='btn btn-primary' onClick={this.fetchNextPosts}>More</button>
			</div>
		)
	}
})