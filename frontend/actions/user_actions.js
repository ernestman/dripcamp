import * as ApiUtil from "../util/user_api_util";

export const GET_CURRENT_USER = "GET_CURRENT_USER"

export const getCurrentUser = (payload) => {
    return {
        type: GET_CURRENT_USER,
        payload
    }
}

export const fetchUser = (userId) => (dispatch) => {
    return (
        ApiUtil.getUser(userId)
            .then( payload => dispatch(getCurrentUser(payload)))
    )
}