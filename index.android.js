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
import { createStore,applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './app/reducers/reducers';
import AppWithNavigationState from './app/navigators/AppNavigator';


class instaclone extends Component {
  store = createStore(
    AppReducer,
    applyMiddleware(thunk)
  );

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