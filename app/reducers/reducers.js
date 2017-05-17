/**
 * Created by Rohail on 5/16/2017.
 */


import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import {LOGIN_ACTION,POST_RECIECVED, ERROR_RECIEVED} from "../common/constants"
import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Home' }),
        state
      );
      break;
    case 'Signup':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

function auth(state = {}, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: action.isLogin };
    case 'Signup':
      return { ...state, isLoggedIn: action.isLogin};
    default:
      return state;
  }
}

function post(state = {},action) {
  switch (action.type) {
    case POST_RECIECVED:
      return  { post: action.payload};
    case ERROR_RECIEVED:
      return { post: action.payload};
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  post,
  auth
});

export default AppReducer;