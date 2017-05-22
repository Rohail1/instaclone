/**
 * Created by Rohail on 5/16/2017.
 */


import {LOGIN_ACTION,LOGIN_SUCCESSFUL, SIGNUP_Error} from "../common/constants"


export const Login_Action = () => {
  return {
    type : LOGIN_ACTION,
    isLogin : true
  };
};

const login = (data) =>{
  let request = new Request('http://192.168.0.132:3000/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
      'content-type' : 'application/json'
    })
  });
  return fetch(request);
};

const dataRecieved = (data) => {
  return {
    type : LOGIN_SUCCESSFUL,
    payload : {
      data : data
    }
  }
};
const errorRecieved = (data) => {
  console.log('err',data);
  return {
    type : SIGNUP_Error,
    payload : {
      data : data
    }
  }
};

export const Get_POST_ACTION = (data) => {

  return dispatch => {
    login(data)
      .then(
        post => post.json(),
        error => dispatch(errorRecieved(error))
      ).then(
      data => dispatch(dataRecieved(data)),
      error => dispatch(errorRecieved(error))
    )
  }
};