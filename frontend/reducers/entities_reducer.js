import {combineReducers} from "redux";
import usersReducer from "./users_reducer";
import campgroundReducer from "./campgrounds_reducer";
import bookingsReducer from "./bookings_reducer";
import reviewsReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    campgrounds: campgroundReducer,
    bookings: bookingsReducer,
    reviews: reviewsReducer
})

export default entitiesReducer;