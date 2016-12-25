import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import Style from './src/utils/Style';
import configureStore from './src/store/configureStore';
import Main from './main';

const store = configureStore();

export default class App extends Component {
  render() {
    console.log(Style.DEVICE_HEIGHT);
    console.log(Style.DEVICE_WIDTH)
    return (
        <Provider store={store}>
          <Main
            viewStyle={styles.view}
            mapStyle={styles.map}/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    ...StyleSheet.absoluteFillObject,
    height: Style.DEVICE_HEIGHT - 20,
    width: Style.DEVICE_WIDTH,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

AppRegistry.registerComponent('gmapweather', () => App);
