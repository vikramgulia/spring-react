import {LOGIN_RESULT, SECURITY_CHECK} from "../actions/ActionTypes";

const initialState = {
    isSecure: false,
    isLoggedIn: false,
    username: null,
    loginMessage: null
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case SECURITY_CHECK:
            return {
                ...state,
                isSecure: action.isSecure
            }

        case LOGIN_RESULT:
            return {
                ...state,
                isLoggedIn: action.response.success,
                loginMessage: action.response.message
            }
        default:
            return state
    }
}