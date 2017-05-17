/**
 * Created by Rohail on 5/16/2017.
 */


import {LOGIN_ACTION,POST_RECIECVED, ERROR_RECIEVED} from "../common/constants"


export const Login_Action = () => {
  return {
    type : LOGIN_ACTION,
    isLogin : true
  };
};

const fetchPost = () =>{
  return fetch("https://jsonplaceholder.typicode.com/posts/1");
};

const dataRecieved = (data) => {
  return {
    type : POST_RECIECVED,
    payload : {
      data : data,
      isError:false
    }
  }
};
const errorRecieved = (data) => {
  return {
    type : ERROR_RECIEVED,
    payload : {
      data : data,
      isError:true
    }
  }
};

export const Get_POST_ACTION = () => {

  return dispatch => {
    fetchPost()
      .then(
        post => post.json(),
        error => dispatch(errorRecieved(error))
      ).then(
      data => dispatch(dataRecieved(data)),
      error => dispatch(errorRecieved(error))
    )
  }
};