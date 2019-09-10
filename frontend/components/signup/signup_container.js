import {connect} from "react-redux";
import signupForm from "./signup_form";
import {createUser} from "../../actions/session_actions";

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signupForm)