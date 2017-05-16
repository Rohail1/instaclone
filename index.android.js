/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import SignUp from "./app/components/signup/signup"
import Login from "./app/components/login/login"

/*export default class instaclone extends Component {
  render() {
    return (
      <SignUp/>
    );
  }
}*/

const instaclone = StackNavigator({
  Signup: { screen: SignUp },
  Login: { screen: Login },
});

AppRegistry.registerComponent('instaclone', () => instaclone);
