import React, { Component, PropTypes } from 'react';
import {
	View,
	TextInput,
	StyleSheet,
	Text
} from 'react-native';

export default class UserInput extends Component {
	constructor(props) {
		super(props);

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
		this.setState({ text : 'mantap' });
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
				<Text>text: {this.state.text}</Text>
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