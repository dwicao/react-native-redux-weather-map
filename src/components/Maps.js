import React, { Component, PropTypes } from 'react';
import MapView from 'react-native-maps';

export default class Maps extends Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return <MapView style={this.props.mapStyle}
					  initialRegion={{
					    latitude: -7.967419,
					    longitude: 112.633153,
					    latitudeDelta: 2,
					    longitudeDelta: 2,
					  }}
					/>;
	}
}