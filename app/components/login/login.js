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

import {loginStyles} from "./styles";
import { NavigationActions } from 'react-navigation'

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      text : ''
    }
  }

  login() {
    this.props.Login_Action();
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    });
    this.props.navigation.dispatch(resetAction)
  }


  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
        <View style={loginStyles.logoContainer} >
          <Image source={require('../../images/instalogo.png')}
                 style={loginStyles.instalogo}
          />
          <Text style={loginStyles.title}>Instragram Clone | Powered by React Natve | Made by Rohail Najam</Text>
        </View>
        <View style={loginStyles.inputContainer}>
          <View style={loginStyles.inputInnerContainer}>
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
                    onPress={()=>{this.login()}}
                    style={loginStyles.loginButton}
                    title="Login"
            />
            <TouchableHighlight  onPress={() => navigate('Signup')}>
              <Text style={loginStyles.title}>Not registered ? Signup here</Text>
            </TouchableHighlight>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({Login_Action},dispatch)
}

function mapStateToProps(state) {
  return {
    login : state
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)