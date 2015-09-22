'use strict';

import React, {Component} from 'react';

class Card extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (<div className="demo-card-wide mdl-card mdl-shadow--2dp">
					<div className="mdl-card__title" style={{background: `url(${this.props.face_image})`}}>
						<h2 className="mdl-card__title-text">{this.props.title}</h2>
					</div>
					<div className="mdl-card__supporting-text">{this.props.description}</div>
					<div className="mdl-card__actions mdl-card--border">
						<a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Get started</a>
					</div>
					<div className="mdl-card__menu">
						<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
							<i className="material-icons">share</i>
						</button>
					</div>
				</div>);
	}
}

export default Card;