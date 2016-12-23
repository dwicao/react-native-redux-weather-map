import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View } from 'react-native';
import * as weatherActions from './src/actions/weatherActions';

import Maps from './src/components/Maps';
import UserInput from './src/components/UserInput';
import WeatherInfo from './src/components/WeatherInfo';

class Main extends Component {
  render() {
    return (
      <View style={this.props.viewStyle}>
        <Maps style={this.props.mapStyle} {...this.props}/>
      	<UserInput {...this.props} />
        <WeatherInfo {...this.props} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weatherActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
