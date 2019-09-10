export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
import * as UsersApiUtil from '../util/users_api_util';
import { receiveCurrentUser } from './session_actions';

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const fetchAllUsers = () => dispatch => (
    UsersApiUtil.fetchAllUsers().then(response => (
        dispatch(receiveAllUsers(response))
    ))
);

export const updateUser = formData => dispatch => (
    UsersApiUtil.updateUser(formData).then(response => (
        dispatch(receiveCurrentUser(response))
    ))
);

