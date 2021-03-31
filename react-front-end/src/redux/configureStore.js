import {createStore, combineReducers,applyMiddleware } from 'redux';
import {Users} from './users'
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () =>{
    const store =  createStore(
        combineReducers({
                users:Users
            }
           
        ),
        applyMiddleware(thunk,logger)
    );
    return store;
}