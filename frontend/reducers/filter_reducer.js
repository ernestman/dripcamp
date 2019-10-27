import {UPDATE_BOUNDS, NEW_FILTER, CLEAR_SINGLE_FILTER, CLEAR_FILTERS} from "../actions/filter_actions";

const initialState = {
    bounds: {},
    pets: null,
    cabin: null,
};

const filtersReducer = (state=initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case UPDATE_BOUNDS:
            return Object.assign({}, state, { [action.filter]: action.value })
        case NEW_FILTER:
            return Object.assign({}, state, { [action.filter]: action.value })
        case CLEAR_FILTERS:
            return initialState;
        default:
            return state;
    }
}

export default filtersReducer;