import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Maps from './src/Maps';
import UserInput from './src/UserInput';

export default class Gmapweather extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Maps style={styles.map}/>
        <UserInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

AppRegistry.registerComponent('gmapweather', () => Gmapweather);
