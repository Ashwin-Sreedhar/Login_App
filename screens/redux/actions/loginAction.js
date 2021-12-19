/* eslint-disable prettier/prettier */
import * as TYPE from './actionType';

export const set_login = val => ({
    type: TYPE.SET_LOGIN,
    payload: val,
});

export const set_name = val => ({
    type: TYPE.SET_NAME,
    payload: val,
});

export const set_age = val => ({
    type: TYPE.SET_AGE,
    payload: val,
});
