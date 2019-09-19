import {connect} from "react-redux";
import {fetchUser} from "../../actions/user_actions";
import {clearCampgrounds} from "../../actions/campground_actions";
import {clearBookings} from "../../actions/booking_actions";
import UserShow from "./user_show";

const mapStateToProps = (state) => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id],
        bookings: Object.values(state.entities.bookings),
        booked_campgrounds: state.entities.campgrounds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        clearCampgrounds: () => dispatch(clearCampgrounds()),
        clearBookings: () => dispatch(clearBookings())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);