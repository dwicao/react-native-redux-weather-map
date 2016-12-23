import React, { Component, PropTypes } from 'react';
import MapView from 'react-native-maps';
import { Alert } from 'react-native';

export default class Maps extends Component {
	constructor() {
		super();

		this._onPress = this._onPress.bind(this);
	}

	shouldComponentUpdate() {
		return false;
	}

	componentWillReceiveProps(nextProps) {
		const nextWeather = nextProps.weather;
		
		if (nextWeather.coord) {
			const nextLat = nextWeather.coord.lat;
			const nextLon = nextWeather.coord.lon;
			const nextRegion = {
				latitude: nextLat,
				longitude: nextLon,
				latitudeDelta: 0.5,
				longitudeDelta: 0.5,
			};
			this.map.animateToRegion(nextRegion);
		}

		if (nextWeather.message) {
			Alert.alert(nextWeather.message);
		}
	}

	_onPress(event) {
		const lat = event.nativeEvent.coordinate.latitude;
		const lon = event.nativeEvent.coordinate.longitude;
		this.props.actions.fetchWeatherByCoord(lat, lon);
	}

	render() {
		return <MapView style={this.props.style}
						showsPointsOfInterest={true}
						showsCompass={false}
					  initialRegion={{
					    latitude: -7.967419,
					    longitude: 112.633153,
					    latitudeDelta: 1,
					    longitudeDelta: 1,
					  }}
					  onPress={this._onPress}
					  ref={el => this.map = el}
					  {...this.props}
					/>;
	}
}