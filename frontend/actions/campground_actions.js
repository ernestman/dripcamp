import * as CampgroundApiUtil from "../util/campground_api_util";

export const GET_ALL_CAMPGROUNDS = "GET_ALL_CAMPGROUNDS";
export const GET_CAMPGROUND = "GET_CAMPGROUND";
export const CLEAR_CAMPGROUNDS = "CLEAR_CAMPGROUNDS";

export const getAllCampgrounds = (campgrounds) => {
    return {
        type: GET_ALL_CAMPGROUNDS,
        campgrounds
    }
}

export const getCampground = (payload) => {
    return {
        type: GET_CAMPGROUND,
        payload
    }
}

export const clearCampgrounds = () => {
    return {
        type: CLEAR_CAMPGROUNDS
    }
}

export const fetchCampgrounds = (filters) => (dispatch) => {
    return (
        CampgroundApiUtil.allCampgrounds(filters)
            .then( (campgrounds) => dispatch(getAllCampgrounds(campgrounds)))
    )
}

export const fetchCampground = (id) => (dispatch) => {
    return (
        CampgroundApiUtil.campground(id)
            .then( payload => dispatch(getCampground(payload)))
    )
}
