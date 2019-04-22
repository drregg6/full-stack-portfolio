import { GET_USERS } from '../actions/types.js';

const initState = {};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return state
        default:
            return state
    }
}

export default userReducer;