/* eslint-disable prettier/prettier */
import * as TYPE from '../actions/actionType';

const initialState = {
    isEnable: false,
    name: '',
    age: '',
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.SET_LOGIN:
            return {
                ...state,
                isEnable: action.payload,
            };
        case TYPE.SET_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case TYPE.SET_AGE:
            return {
                ...state,
                age: action.payload,
            };
        default:
            return state;
    }
};
