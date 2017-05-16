/**
 * Created by Rohail on 5/3/2017.
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

import {signUpStyles} from "./styles"

export default class SignUp extends Component {
  static navigationOptions = {
    title: 'Signup',
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={signUpStyles.container}>
        <View style={signUpStyles.logoContainer} >
          <Image source={require('../../images/instalogo.png')}
                 style={signUpStyles.instalogo}
          />
          <Text style={signUpStyles.title}>Instragram Clone | Powered by React Natve | Made by Rohail Najam</Text>
        </View>
        <View style={signUpStyles.inputContainer}>
          <View style={signUpStyles.inputInnerContainer}>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Enter firstname"
              placeholderTextColor="#ffffff"
              keyboardAppearance="light"
              returnKeyType="next"
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Enter lastname"
              placeholderTextColor="#ffffff"
              keyboardAppearance="light"
              returnKeyType="next"
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Enter Email"
              placeholderTextColor="#ffffff"
              keyboardAppearance="light"
              keyboardType="email-address"
              returnKeyType="next"
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Enter Password"
              placeholderTextColor="#ffffff"
              keyboardAppearance="light"
              secureTextEntry={true}
              returnKeyType="go"
            />
            <Button color="#9b59b6"
                    onPress={()=>{}}
                    style={signUpStyles.loginButton}
                    title="Login"
            />
            <TouchableHighlight  onPress={() => navigate('Login')}>
              <Text style={signUpStyles.title}>Aready Registered ? Login here</Text>
            </TouchableHighlight>

          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
