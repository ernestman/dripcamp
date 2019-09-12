import React from "react";
import {connect} from "react-redux";
import loginForm from "./login_form";
import {signIn, clearErrors} from "../../actions/session_actions";
import {openModal, closeModal} from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(signIn(user)),
        clearErrors: () => dispatch(clearErrors()),
        otherForm: (
            <button onClick={ () => dispatch(openModal("signup")) }>
                Sign up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginForm);