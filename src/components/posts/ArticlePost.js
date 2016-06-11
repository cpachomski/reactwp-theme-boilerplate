import React from 'react';
import moment from 'moment';


export default React.createClass({
	displayName: 'ArticlePost',

  componentDidMount() {
    this.formatDate();
  },

  formatDate() {
    let date = new Date(this.props.post.date);
    this.dateString = moment(this.date).format("MMMM DD, YYYY");
  },

	render() {


		return (
			<div className="post article-post">
        <p className='post--date'>{this.dateString}</p>
				{this.props.post.title.rendered}
			</div>
		)
	}
})