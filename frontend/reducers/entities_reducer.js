import {combineReducers} from "redux";
import usersReducer from "./users_reducer";
import campgroundReducer from "./campgrounds_reducer";
import bookingsReducer from "./bookings_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    campgrounds: campgroundReducer,
    bookings: bookingsReducer
})

export default entitiesReducer;