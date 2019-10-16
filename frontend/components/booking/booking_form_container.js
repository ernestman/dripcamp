import {connect} from "react-redux";
import BookingForm from "./booking_form";

import {newBooking} from "../../actions/booking_actions";
import {openModal} from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
        errors: state.errors.bookings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newBooking: (booking) => dispatch(newBooking(booking)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)