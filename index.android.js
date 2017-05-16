/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './app/reducers/reducers';
import AppWithNavigationState from './app/navigators/AppNavigator';


class instaclone extends Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('instaclone', () => instaclone);

export default instaclone;