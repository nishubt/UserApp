import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


export const addUser = ( firstName, lastName, email) => (dispatch) => {

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    return fetch(baseUrl + 'user', {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
            console.log(response);
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(res=>dispatch(fetchUsers()))
    .catch(error =>  dispatch(addUserFailed(error.message)));
};

export const fetchUsers = () => (dispatch) => {  
    
    return fetch(baseUrl + 'user')
    .then(response=>{
            if(response.ok){
                return response;
            }else{
                var error = new Error("Error : "+response.status+" "+response.statusText);
                throw error;
            }
    },
    error=>{
        var errMess = new Error("Error : "+error.status+" "+error.message);
        throw errMess;
    })
    .then(response => response.json())
    .then(users => dispatch(addUsers(users)))
    .catch(error => dispatch(getUsersFailed(error.message)));
};

export const getUsersFailed = (errmess) => ({
    type: ActionTypes.GET_USERS_FAILED,
    payload: errmess
});

export const addUserFailed = (errmess) => ({
    type: ActionTypes.ADD_USERS_FAILED,
    payload: errmess
});

export const addUsers = (users) => ({
    type: ActionTypes.ADD_USERS,
    payload: users
});
