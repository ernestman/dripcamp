import { connect } from "react-redux";
import {signOut, clearErrors} from "../../actions/session_actions";
import Greeting from "./greeting";
import {openModal} from "../../actions/modal_actions";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id]
        // currentUserId: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
        openModal: (modal) => dispatch(openModal(modal)),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);