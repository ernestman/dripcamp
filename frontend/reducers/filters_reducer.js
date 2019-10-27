import {SINGLE_FILTER, REMOVE_FILTER} from "../actions/filter_actions";


const defaultFilters = {
    petFriendly: false,
    tentCamps: false,
    cabinCamps: false
}


const filtersReducer = (state=defaultFilters, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case SINGLE_FILTER:
            return Object.assign({}, state, { [action.filter]: true })
        case REMOVE_FILTER:
            return Object.assign({}, state, { [action.filter]: false})
        default:
            return state;
    }
}

export default filtersReducer;