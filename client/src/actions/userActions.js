import { GET_USERS } from './types';

export const fetchUsers = () => {
    // search for users with axios
    return {
        type: GET_USERS,
        payload: 'a bunch of users'
    }
}