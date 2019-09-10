import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS} from "../actions/session_actions";

// initial state is array because that's what our errors are like

const sessionErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    // since state is an aray, we dupe with slice
    let nextState = state.slice();

    switch(action.type) {
        case RECEIVE_ERRORS:
            nextState = action.errors
            return nextState;
        case RECEIVE_CURRENT_USER:
            nextState = [];
            return nextState;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;


