import {
    GET_USERS,
    GET_USER
} from './types';
import axios from 'axios';

export const fetchUsers = () => dispatch => {
    // search for users with axios
    axios.get('/api/users')
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data
        }))
        .catch(err => {
            console.log(`There's been an error: ${err}`)
        });
}

export const findUser = username => dispatch => {
    axios.get(`/api/users/${username}`)
        .then(res => dispatch({
            type: GET_USER,
            payload: res.data
        }))
        .catch(err => {
            console.log(`There's been an error: ${err}`);
        });
}