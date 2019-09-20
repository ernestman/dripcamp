import React from "react";
import {connect} from "react-redux";
import signupForm from "./signup_form";
import {createUser, clearErrors} from "../../actions/session_actions";
import {openModal, closeModal} from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        errors: Object.values(state.errors.session)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user)),
        clearErrors: () => dispatch(clearErrors()),
        otherForm: (
            <button onClick={ () => dispatch(openModal("login")) }>
                Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signupForm)