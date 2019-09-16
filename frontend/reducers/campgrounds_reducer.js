import {GET_ALL_CAMPGROUNDS, GET_CAMPGROUND} from "../actions/campground_actions";

const campgroundReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case GET_ALL_CAMPGROUNDS:
            return action.campgrounds;
        case GET_CAMPGROUND:
            nextState[action.campground.id] = action.campground;
            // debugger
            return nextState;
        default:
            return state;
    }
}

export default campgroundReducer;