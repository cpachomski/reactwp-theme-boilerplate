import React from 'react';

import '../../styles/cards.scss'


export default React.createClass({
	displayName: 'Item',

	render() {

		return (
			<div className="item-wrapper">
				<div className="img-wrapper">
					<a href="#"><img src={this.props.item.picture} /></a>
				</div>
				<a href="#"><h3>{this.props.item.name.first} {this.props.item.name.last}</h3></a>
				<p>eye color: {this.props.item.eyeColor}</p>				
			</div>
		)
	}
})