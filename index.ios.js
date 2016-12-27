import codePush from "react-native-code-push";
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import Main from './main';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

export default class App extends Component {
  componentDidMount() {
    codePush.sync({installMode: codePush.InstallMode.IMMEDIATE});
  }

  render() {
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
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

AppRegistry.registerComponent('gmapweather', () => codePush(App) );
