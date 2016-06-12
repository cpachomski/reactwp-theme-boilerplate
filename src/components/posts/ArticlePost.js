import React from 'react';
import moment from 'moment';


export default React.createClass({
	displayName: 'ArticlePost',

  componentDidMount() {
    this.formatDate();
  },

  formatDate() {
    let date = new Date(this.props.post.date);
    this.dateString = moment(this.date).format("dddd MMMM - DD - YYYY");
  },

	render() {
		return (
			<div className="post article-post">
        <h5>{this.props.post.title.rendered}<span className='post--date'>{this.dateString}</span></h5>
        <div className='post--content'>

        </div>
			</div>
		)
	}
})