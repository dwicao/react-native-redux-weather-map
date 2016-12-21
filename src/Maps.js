import React, { Component, PropTypes } from 'react';
import MapView from 'react-native-maps';
import {
	StyleSheet,
} from 'react-native';

export default class Maps extends Component {
	render() {
		return (
			  <MapView
			  	style={this.props.style}
				  initialRegion={{
				    latitude: 37.78825,
				    longitude: -122.4324,
				    latitudeDelta: 0.0922,
				    longitudeDelta: 0.0421,
				  }}
				/>
		);
	}
}