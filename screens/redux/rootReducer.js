/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';
import { loginReducer } from './reducers/loginReducer'


export const rootReducer = combineReducers({
    loginState: loginReducer,
    nameState: loginReducer,
    ageState: loginReducer,
});
