export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER'; 
import * as UsersApiUtil from '../util/users_api_util';
import { receiveCurrentUser } from './session_actions';

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchAllUsers = () => dispatch => (
    UsersApiUtil.fetchAllUsers().then(response => (
        dispatch(receiveAllUsers(response))
    ))
);

export const fetchUser = userId => dispatch => (
    UsersApiUtil.fetchUser(userId).then(response => (
        dispatch(receiveUser(response))
    ))
);

export const updateUser = formData => dispatch => (
    UsersApiUtil.updateUser(formData).then(response => (
        dispatch(receiveCurrentUser(response))
    ))
);

