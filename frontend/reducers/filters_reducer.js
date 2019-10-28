import {SINGLE_FILTER, REMOVE_FILTER, REMOVE_ALL_FILTERS} from "../actions/filter_actions";


const defaultFilters = {
    petFriendly: false,
    tentCamps: false,
    cabinCamps: false,
    hasCampfires: false,
    hasWater: false,
    hasShowers: false
}


const filtersReducer = (state=defaultFilters, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SINGLE_FILTER:
            return Object.assign({}, state, { [action.filter]: true })
        case REMOVE_FILTER:
            return Object.assign({}, state, { [action.filter]: false})
        case REMOVE_ALL_FILTERS:
            return defaultFilters;
        default:
            return state;
    }
}

export default filtersReducer;