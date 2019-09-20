import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from "../actions/session_actions";
// debugger
const initialState = {
    id: null
};

const sessionReducer = (state=initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    // debugger
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            let currentUserId = Object.keys(action.payload.users)[0]
            nextState["id"] = currentUserId;
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState["id"] = null
            return nextState;
        default:
            return state
    }
}

export default sessionReducer;