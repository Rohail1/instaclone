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

export default class instaclone extends Component {
  render() {
    return (
      <SignUp/>
    );
  }
}


AppRegistry.registerComponent('instaclone', () => instaclone);
