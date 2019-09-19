import {connect} from "react-redux";
import {fetchUser} from "../../actions/user_actions";
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
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);