import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_ERRORS} from "../actions/session_actions";

const initialState = {
    id: null
};

const sessionReducer = (state=initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            nextState["id"] = action.currentUser.id;
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState["id"] = null
            return nextState
        // case RECEIVE_ERRORS:
            // return state;
        default:
            return state
    }
}

export default sessionReducer;