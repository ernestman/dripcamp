import {GET_BOOKING, BOOKING_ERRORS, CLEAR_BOOK_ERRORS} from "../actions/booking_actions";

const bookingErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    // debugger
    let nextState = state.slice();
    
    // debugger

    switch(action.type) {
        case GET_BOOKING:
            nextState = [];
            return nextState;
        case BOOKING_ERRORS:
            nextState = action.errors;
            return nextState;
        case CLEAR_BOOK_ERRORS:
            return [];
        default:
            return state;
    }
}

export default bookingErrorsReducer;