import {GET_BOOKING, DESTROY_BOOKING, CLEAR_BOOKINGS} from "../actions/booking_actions";
import {GET_CURRENT_USER} from "../actions/user_actions";

const bookingsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    // debugger

    switch(action.type) {
        case GET_CURRENT_USER:
            return Object.assign({}, state, action.payload.bookings)
        case GET_BOOKING:
            nextState[action.booking.id] = action.booking;
            return nextState;
        case DESTROY_BOOKING:
            delete nextState[action.bookingId]
            return nextState;
        case CLEAR_BOOKINGS:
            return {};
        default:
            return state;
    }
}

export default bookingsReducer;