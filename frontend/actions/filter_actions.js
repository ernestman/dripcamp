import {fetchCampgrounds} from "./campground_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const changeFilter = (filter, value) => {
    return {
        type: UPDATE_BOUNDS,
        filter: filter,
        value: value
    }
}

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    // return dispatch(fetchCampgrounds(getState().ui.filters));
    return fetchCampgrounds(getState().ui.filters)(dispatch);
}