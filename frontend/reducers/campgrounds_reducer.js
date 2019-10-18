import {GET_ALL_CAMPGROUNDS, GET_CAMPGROUND, CLEAR_CAMPGROUNDS} from "../actions/campground_actions";
import {GET_CURRENT_USER} from "../actions/user_actions";

const campgroundReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case GET_CURRENT_USER :
            return Object.assign({}, state, action.payload.campgrounds)
        case GET_ALL_CAMPGROUNDS:
            return action.campgrounds;
        case GET_CAMPGROUND:
            // nextState[action.campground.id] = action.campground;
            return Object.assign({}, state, action.payload.campgrounds)
            // return nextState;
        case CLEAR_CAMPGROUNDS:
            return {};
        default:
            return state;
    }
}

export default campgroundReducer;