import React from 'react';


export default React.createClass({
	displayName: 'ArticlePost',

	render() {
		console.log(this.props.post);
		return (
			<div className="post article-post">
				{this.props.post.title.rendered}
			</div>
		)
	}
})