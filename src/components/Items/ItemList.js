import React from 'react';

import Item from './Item';
import Seed from '../../helpers/seed';

export default React.createClass({
	displayName: 'Item List',

	getInitialState() {
		return {
			itemList: Seed
		}
	},

	render() {
		console.log(this.state.itemList)
		return (
			<div className='row'>
				<div className='small-4 columns'>
					{this.state.itemList.map((item) => {
						return (
							<Item item={item} key={item._id} />
						)
					})}
				</div>
			</div>
		)
	}
})