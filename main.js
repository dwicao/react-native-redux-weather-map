import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { View } from 'react-native';
import * as weatherActions from './src/actions/weatherActions';

import MapsContainer from './src/components/MapsContainer';
import UserInput from './src/components/UserInput';

class Main extends Component {
  render() {
    return (
      <View style={this.props.viewStyle}>
        <MapsContainer mapStyle={this.props.mapStyle} {...this.props}/>
      	<UserInput {...this.props} />
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
