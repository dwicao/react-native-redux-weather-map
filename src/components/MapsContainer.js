import React, { Component, PropTypes } from 'react';
import Maps from './Maps';

export default class MapsContainer extends Component {
	render() {
		return <Maps mapStyle={this.props.mapStyle}
						{...this.props}
					/>;
	}
}