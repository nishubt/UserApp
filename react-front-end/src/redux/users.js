import * as ActionTypes from './ActionTypes';


export const Users = (state = { errMess: null, users:[]}, action) => { 
    switch (action.type) {
        case ActionTypes.ADD_USERS:
            return {...state, isLoading: false, errMess: null, users: action.payload};

        case ActionTypes.GET_USERS_LOADING:
            return {...state, isLoading: true, errMess: null, users: []}

        case ActionTypes.GET_USERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload,users:[]};
        case ActionTypes.ADD_USERS_FAILED:
             return {...state, isLoading: false, errMess: action.payload,users:[]};    

        default:
          return state;
      }
    
}