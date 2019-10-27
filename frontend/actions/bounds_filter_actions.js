import {fetchCampgrounds} from "./campground_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export const changeFilter = (filter, value) => {
    return {
        type: UPDATE_BOUNDS,
        filter: filter,
        value: value
    }
}

export const clearFilters = () => {
    return {
        type: CLEAR_FILTERS,
    }
}

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchCampgrounds(getState().ui.boundsFilter)(dispatch);
}