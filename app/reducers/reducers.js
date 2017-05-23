/**
 * Created by Rohail on 5/16/2017.
 */


import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import {LOGIN_ACTION,LOGIN_SUCCESSFUL, API_ERROR,ME_SUCCESSFUL,API_INPROGRESS} from "../common/constants"
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

function auth(state = {},action) {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return  {user : action.payload, isApiCall : false};
    case ME_SUCCESSFUL:
      return  {me : action.payload,isApiCall : false};
    case API_INPROGRESS:
      return  {isApiCall : true};
    case API_ERROR:
      return {error : action.payload,isApiCall : false};
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth
});

export default AppReducer;