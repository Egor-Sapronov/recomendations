'use strict';

import React, {Component} from 'react';
import CardList from './cardList.jsx';

import PlaceStore from '../stores/places.store';
import apiActions from '../actions/api.actions';

class App extends Component {
	constructor(props) {
		super(props);
		
		apiActions.loadPlaces();
		
		this.state = {
			places: PlaceStore.places
		};
		
		this.storeChange = this.storeChange.bind(this);
	}
	
	componentDidMount() {
		PlaceStore.addChangeListener(this.storeChange);
	}
	
	storeChange() {
		this.setState({
			places: PlaceStore.places
		});
	}
	
	render() {
		return <CardList items={this.state.places} />
	}
}

export default App;