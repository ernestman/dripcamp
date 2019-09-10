import * as ApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER  = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER  = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS  = "RECEIVE_ERRORS"


export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

//errors = array
export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}


export const createUser = (user) => (dispatch) => {
    return (
        ApiUtil.signup(user)
            .then(
                // on success, dispatch receiveCurrentUser with result
                newUser => dispatch(receiveCurrentUser(newUser)),
                // on failure, dispatch receiveErrors with result
                errors => dispatch(receiveErrors(errors.responseJSON))
            )
    )
}

export const signIn = (user) => (dispatch) => {
    return (
        ApiUtil.login(user)
            .then(
                // on success, dispatch receiveCurrentUser with result
                currentUser => dispatch(receiveCurrentUser(currentUser)),
                // on failure, dispatch receiveErrors with result
                errors => dispatch(receiveErrors(errors.responseJSON))
            )
    )
}

export const signOut = () => (dispatch) => {
    return (
        ApiUtil.logout()
            .then( () => dispatch(logoutCurrentUser()))
    )
}


