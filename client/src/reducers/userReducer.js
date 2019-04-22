import {
    GET_USERS,
    GET_USER
} from '../actions/types.js';

const initState = {
    users: [],
    user: {}
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

export default userReducer;