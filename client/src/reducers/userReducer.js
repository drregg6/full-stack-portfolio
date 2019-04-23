import {
    GET_USERS,
    GET_USER,
    GET_SUBDOCUMENT
} from '../actions/types.js';

const initState = {
    users: [],
    user: {},
    general: {},
    location: {},
    contact: {},
    location: {},
    portfolio: {}
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
        case GET_SUBDOCUMENT:
            let key = action.payload.key;
            return {
                ...state,
                [key]: action.payload
            }
        default:
            return state
    }
}

export default userReducer;