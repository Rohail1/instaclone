/**
 * Created by Rohail on 5/16/2017.
 */


import React, { Component } from 'react';
import {
  View,
  TextInput,
  Image,
  Alert,
  Text,
  KeyboardAvoidingView,
  TouchableHighlight,
  Button
} from 'react-native';

import {connect} from "react-redux"
import {bindActionCreators}  from "redux"
import {Login_Action,Get_POST_ACTION} from "../../actions/actions"

import {loginStyles} from "./styles";
import { NavigationActions } from 'react-navigation'

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      post : {},
      email : '',
      password : ''
    };
    this.locals = {

    }
  }

  login(data) {
    this.props.Get_POST_ACTION(data);
  }
  loginDone () {
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
  componentDidUpdate (){
    if(this.props.auth.data.success){
      this.loginDone();
    }else {
      Alert.alert(this.props.auth.data.message)
    }
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <KeyboardAvoidingView behavior="padding" style={loginStyles.container}>
        <View style={loginStyles.logoContainer} >
          <Image source={require('../../images/instalogo.png')}
                 style={loginStyles.instalogo}
          />
          <Text style={loginStyles.title}>Instragram Clone | Powered by React Native | Made by Rohail Najam</Text>
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
              onChangeText={(email) => this.locals.email = email}
              returnKeyType="next"
            />
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Enter Password"
              placeholderTextColor="#ffffff"
              keyboardAppearance="light"
              secureTextEntry={true}
              onChangeText={(password) =>  this.locals.password = password}
              returnKeyType="go"
            />
            <Button color="#9b59b6"
                    onPress={()=>{this.login({email : this.locals.email,password : this.locals.password})}}
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
  return bindActionCreators({Login_Action,Get_POST_ACTION},dispatch)
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)