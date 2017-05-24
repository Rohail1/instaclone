/**
 * Created by Rohail on 5/16/2017.
 */


import {LOGIN_ACTION,LOGIN_SUCCESSFUL, API_ERROR,ME_SUCCESSFUL,API_INPROGRESS} from "../common/constants"


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

const me = (token) => {
  let request = new Request('http://192.168.0.132:3000/api/me', {
    method: 'GET',
    headers: new Headers({
      'content-type' : 'application/json',
      'instaclone-token' : token
    })
  });
  return fetch(request);
};

const dataRecieved = (data) => {
  return {
    type : LOGIN_SUCCESSFUL,
    payload : data
  }
};
const API_ERROR_METHOD = (data,action) => {
  return {
    type : action || API_ERROR,
    payload : data
  }
};

const meRecieved = (data) => {
  return {
    type : ME_SUCCESSFUL,
    payload : data
  }
};

const API_INPROGRESS_ACTION = () => {
  return {
    type : API_INPROGRESS,
  }
};

export const Get_POST_ACTION = (data) => {

  return dispatch => {
    dispatch(API_INPROGRESS_ACTION());
    login(data)
      .then(
        post => post.json(),
        error => dispatch(API_ERROR_METHOD(error,API_ERROR))
      ).then(
      data => dispatch(dataRecieved(data)),
      error => dispatch(API_ERROR_METHOD(error,API_ERROR))
    )
  }
};

export const GET_ME_ACTION = (token) => {

  return dispatch => {
    dispatch(API_INPROGRESS_ACTION());
    me(token)
      .then(
        res => res.json(),
        error => dispatch(API_ERROR_METHOD(error,API_ERROR))
      ).then(
      data => dispatch(meRecieved(data)),
      error => dispatch(API_ERROR_METHOD(error,API_ERROR))
    )
  }
};