import {connect} from "react-redux";
import {fetchUser} from "../../actions/user_actions";
import {clearCampgrounds} from "../../actions/campground_actions";
import {deleteBooking, clearBookings} from "../../actions/booking_actions";
import UserShow from "./user_show";

const mapStateToProps = (state) => {
    // debugger
    let currentUser;
    if (!state.session.id) {
        currentUser = 0;
    } else {
        currentUser = state.entities.users[state.session.id]
    }
    return {
        currentUser: currentUser,
        bookings: Object.values(state.entities.bookings),
        booked_campgrounds: state.entities.campgrounds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        clearCampgrounds: () => dispatch(clearCampgrounds()),
        deleteBooking: (bookingId) => dispatch(deleteBooking(bookingId)),
        clearBookings: () => dispatch(clearBookings())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);