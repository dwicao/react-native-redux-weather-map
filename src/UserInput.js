import React, { Component, PropTypes } from 'react';
import {
	View,
	TextInput,
	StyleSheet,
} from 'react-native';
import API_KEY from './API_KEY';

export default class UserInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			isError: false,
		};

		this._onChangeText = this._onChangeText.bind(this);
		this._onSubmitEditing = this._onSubmitEditing.bind(this);
	}

	_onChangeText(text) {
		this.setState({ text });
	}

	_onSubmitEditing() {
		return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.text}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((responseJson) => {
      	this.setState({ isError: false });
      })
      .catch((error) => {
      	this.setState({ isError: true });
      });
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.textInput}
					onChangeText={this._onChangeText}
					onSubmitEditing={this._onSubmitEditing}
					value={this.state.text}
					autoCorrect={false}
					returnKeyType={'search'}
				 	placeholder="Enter a City or Place..."
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30,
	},

	textInput: {
		height: 40,
		margin: 5,
		padding: 10,
		borderColor: 'gray',
		borderWidth: 1,
	}
});