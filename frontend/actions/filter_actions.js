import {fetchCampgrounds} from "./campground_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const NEW_FILTER = "NEW_FILTER";
export const CLEAR_SINGLE_FILTER = "CLEAR_SINGLE_FILTER"
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const changeFilter = (filter, value) => {
    return {
        type: UPDATE_BOUNDS,
        filter: filter,
        value: value
    }
}

export const newFilter = (filter, value) => {
    return {
        type: NEW_FILTER,
        filter: filter,
        value: value
    }
}

export const clearFilter = (filter) => {
    return {
        type: CLEAR_SINGLE_FILTER,
        filter: filter
    }
}

export const clearFilters = () => {
    return {
        type: CLEAR_FILTERS,
    }
}

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    // return dispatch(fetchCampgrounds(getState().ui.filters));
    return fetchCampgrounds(getState().ui.filters)(dispatch);
}