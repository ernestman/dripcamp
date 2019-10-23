import {UPDATE_BOUNDS} from "../actions/filter_actions";

const initialState = {
    bounds: {}
};

const filtersReducer = (state=initialState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case UPDATE_BOUNDS:
            return Object.assign({}, state, { [action.filter]: action.value })
        default:
            return state;
    }
}

export default filtersReducer;