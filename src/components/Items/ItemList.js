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
				<div class='small-4 columns'>
					{this.state.itemList.map((item) => {
						return (
							<Item item={item} />
						)
					})}
				</div>
			</div>
		)
	}
})