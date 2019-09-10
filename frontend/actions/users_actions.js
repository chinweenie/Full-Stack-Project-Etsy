export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
import * as UsersApiUtil from '../util/users_api_util';

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
});

export const fetchAllUsers = () => dispatch => (
    UsersApiUtil.fetchAllUsers().then(response => (
        dispatch(receiveAllUsers(response))
    ))
);