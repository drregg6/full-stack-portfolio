import {
    GET_USERS,
    GET_USER,
    ADD_USER,
    GET_SUBDOCUMENT
} from '../actions/types.js';

const initState = {
    users: [],
    user: {},
    general: {},
    information: {},
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
        case ADD_USER:
            let newUsers = [...state.users, action.payload];
            return {
                ...state,
                users: newUsers
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