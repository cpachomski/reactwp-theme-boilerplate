import React from 'react';


export default React.createClass({
	displayName: 'ArticlePost',

	render() {
		return (
			<div className="post article-post">
				{this.props.post.title.rendered}
			</div>
		)
	}
})