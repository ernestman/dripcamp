import * as BookingApiUtil from "../util/booking_api_util";

export const GET_BOOKING = "GET_BOOKING";
export const DESTROY_BOOKING = "DESTROY_BOOKING";
export const CLEAR_BOOKINGS = "CLEAR_BOOKINGS";

export const BOOKING_ERRORS = "BOOKING_ERRORS";
export const CLEAR_BOOK_ERRORS = "CLEAR_BOOK_ERRORS"

export const getBooking = (booking) => {
    return {
        type: GET_BOOKING,
        booking
    }
}

export const deleteBooking = (bookingId) => {
    return {
        type: DESTROY_BOOKING,
        bookingId
    }
}

export const clearBookings = () => {
    return {
        type: CLEAR_BOOKINGS,
    }
}

// export const bookingErrors = (errors) => {
//     return {
//         type: BOOKING_ERRORS,
//         errors
//     }
// }

// export const clearBookErrors = () => {
//     return {
//         type: CLEAR_BOOK_ERRORS
//     }
// }

export const fetchBooking = (bookingId) => (dispatch) => {
    BookingApiUtil.singleBooking(bookingId)
        .then(
            booking => dispatch(getBooking(booking))
        )
}

export const newBooking = (booking) => (dispatch) => {
    BookingApiUtil.createBooking(booking)
        .then(
            booking => dispatch(getBooking(booking)),
            errors => dispatch(bookingErrors(errors.responseJSON))
        )
}

export const destroyBooking = (bookingId) => (dispatch) => {
    BookingApiUtil.deleteBooking(bookingId)
        .then(
            booking => dispatch(deleteBooking(booking))
        )
}
    