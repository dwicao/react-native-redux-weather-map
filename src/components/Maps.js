import React, { Component, PropTypes } from 'react';
import MapView from 'react-native-maps';
import { Alert } from 'react-native';

export default class Maps extends Component {
	shouldComponentUpdate() {
		return false;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.weather.coord) {
			const nextLat = nextProps.weather.coord.lat;
			const nextLon = nextProps.weather.coord.lon;
			const nextRegion = {
				latitude: nextLat,
				longitude: nextLon,
				latitudeDelta: 0.2,
				longitudeDelta: 0.2
			};
			this.map.animateToRegion(nextRegion);
		}

		if (nextProps.weather.message) {
			Alert.alert(nextProps.weather.message);
		}
	}

	render() {
		return <MapView style={this.props.style}
					  initialRegion={{
					    latitude: -7.967419,
					    longitude: 112.633153,
					    latitudeDelta: 2,
					    longitudeDelta: 2,
					  }}
					  ref={el => this.map = el}
					  {...this.props}
					/>;
	}
}