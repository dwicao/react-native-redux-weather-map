import React, { Component, PropTypes } from 'react';
import Maps from './Maps';

export default class MapsContainer extends Component {
	render() {
		return <Maps style={this.props.style}
						{...this.props}
					/>;
	}
}