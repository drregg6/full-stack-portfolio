import { GET_USERS } from './types';
import axios from 'axios';

export const fetchUsers = () => dispatch => {
    // search for users with axios
    axios.get('/api/users')
        .then(res => dispatch({
            type: GET_USERS,
            payload: res.data[0]
        }))
        .catch(err => {
            console.log(`There's been an error: ${err}`)
        });
}