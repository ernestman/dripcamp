import {connect} from "react-redux";
import BookingForm from "./booking_form";

import {newBooking} from "../../actions/booking_actions";


const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.bookings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newBooking: (booking) => dispatch(newBooking(booking))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm)