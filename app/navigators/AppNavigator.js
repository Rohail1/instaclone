/**
 * Created by Rohail on 5/16/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from '../components/login/login';
import SignupScreen from '../components/signup/signup';
import NewsFeedScreen from '../components/newsfeed';
import ProfileScreen from '../components/profile';


const Home = TabNavigator({
  NewsFeed: {
    screen: NewsFeedScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    initialRouteName : 'NewsFeed'
  },
});


export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Home : {screen : Home}
},{
  initialRouteName : 'Login'
});


const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
