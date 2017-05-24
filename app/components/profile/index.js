/**
 * Created by Rohail on 5/16/2017.
 */
import React, { Component } from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  KeyboardAvoidingView,
  TouchableHighlight,
  Button
} from 'react-native';

import {connect} from "react-redux"
import {bindActionCreators}  from "redux"
import {Login_Action} from "../../actions/actions"


export default class Profile extends Component {
  static navigationOptions = {
    title: 'Profile !',
  };
  render(){
    return (
      <Text> My Profile page</Text>
    )
  }
}