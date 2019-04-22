import { GET_USERS } from '../actions/types.js';

const initState = {
    currentUser: {}
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReducer;