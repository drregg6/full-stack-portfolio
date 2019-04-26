import {
    GET_USERS,
    GET_USER,
    ADD_USER,
    GET_SUBDOCUMENT
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

export const addUser = newUser => dispatch => {

    axios.post(`/api/users`, newUser)
        .then(res => dispatch({
            type: ADD_USER,
            payload: res.data
        }))
        .catch(err => console.log(`There's been an ${err}`));
}

export const getSubdocument = (username, key='general') => dispatch => {
    axios.get(`/api/users/${username}`)
        .then(res => {
            let payload = res.data[key];
            return dispatch({
                type: GET_SUBDOCUMENT,
                payload: payload
            });
        })
        .catch(err => { console.log(`An error has occurred: ${err}`) })
}