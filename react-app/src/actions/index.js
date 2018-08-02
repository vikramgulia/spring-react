import * as types from "./ActionTypes";

import {checkSecurityFromServer, loginInto} from '../calls';

export function checkSecurity() {
    return async (dispatch) => {
        const isSecure = await checkSecurityFromServer()

        dispatch({
            type: types.SECURITY_CHECK,
            isSecure: isSecure
        })
    }
}

export function tryLogin(loginForm) {
    return async (dispatch) => {
        const loginResponse = await loginInto(loginForm)

        dispatch({
            type: types.LOGIN_RESULT,
            response: loginResponse
        })
    }
}