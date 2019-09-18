import {GET_CURRENT_USER} from "../actions/user_actions";
import {RECEIVE_CURRENT_USER} from "../actions/session_actions";


const usersReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case GET_CURRENT_USER:
            return Object.assign({}, state, action.payload.users)
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.users)
        default:
            return state;
    }
}

export default usersReducer;