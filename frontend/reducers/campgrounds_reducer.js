import {GET_ALL_CAMPGROUNDS, GET_CAMPGROUND, CLEAR_CAMPGROUNDS} from "../actions/campground_actions";
import {GET_CURRENT_USER} from "../actions/user_actions";
import {NEW_FILTER, UPDATE_BOUNDS} from "../actions/filter_actions";
import { campground } from "../util/campground_api_util";

const campgroundReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    const filterObject = (obj, filter, value) => {
        let newObj = {};
        let objArr = Object.values(obj).filter( item => item[filter] === value);
        objArr.forEach( obj => newObj[obj.id] = obj)
        return newObj;
    }

    switch(action.type) {
        case GET_CURRENT_USER :
            return Object.assign({}, state, action.payload.campgrounds)
        case GET_ALL_CAMPGROUNDS:
            return action.campgrounds;
        case GET_CAMPGROUND:
            return Object.assign({}, state, action.payload.campgrounds)
        case NEW_FILTER:
            return filterObject(nextState, action.filter, action.value);
        case CLEAR_CAMPGROUNDS:
            return {};
        default:
            return state;
    }
}

export default campgroundReducer;