'use strict';

import React, {Component} from 'react';
import Card from './card.jsx';

class CardList extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (<div>
					{this.props.items.map(card=> <Card {...card} key={card._id} />)}
				</div>);
	}
}

export default CardList;