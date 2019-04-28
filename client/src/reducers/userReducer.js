import {
    GET_USERS,
    GET_USER,
    ADD_USER,
    UPDATE_USER,
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
        case UPDATE_USER:
            // filter through users and find :username, update :username, return new users list
            let updatedUsers = state.filter(user => user.username !== action.payload.username);
            return {
                ...state,
                users: [...newUsers, action.payload]
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