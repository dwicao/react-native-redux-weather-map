import React, { Component, PropTypes } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default class UserInput extends Component {
	constructor() {
		super();

		this.state = {
			text: '',
		};

		this._onChangeText = this._onChangeText.bind(this);
		this._onSubmitEditing = this._onSubmitEditing.bind(this);
	}

	_onChangeText(text) {
		this.setState({ text });
	}

	_onSubmitEditing() {
		const text = this.textInput._getText();

		this.props.actions.fetchWeatherByCity(text);
		this.textInput.clear();
	}

	render() {
		return <TextInput style={styles.textInput}
						onChangeText={this._onChangeText}
						onSubmitEditing={this._onSubmitEditing}
						value={this.state.text}
						autoCorrect={false}
						ref={el => this.textInput = el}
						returnKeyType={'search'}
					 	placeholder="Enter a City or Place..."
					/>;
	}
}

const styles = StyleSheet.create({
	textInput: {
		height: 40,
		marginTop: 30,
		marginHorizontal: 10,
		padding: 10,
		borderWidth: 0,
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
	}
});
