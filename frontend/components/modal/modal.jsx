import React from "react";
import {closeModal} from "../../actions/modal_actions";
import LoginContainer from "../login/login_container";
import SignupContainer from "../signup/signup_container";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    }
};


const Modal = (props) => {
    const {modal, closeModal} = props;

    if (!modal) {
        return null;
    }

    const loginModal = (
        <div className="login-modal" onClick={e => e.stopPropagation()}>
            <div className="login-form">
                <LoginContainer />
            </div>
        </div>
    );

    const signupModal = (
        <div className="signup-modal" onClick={e => e.stopPropagation()}>
            <div className="signup-form"m>
                <SignupContainer />
            </div>
        </div>
    );
    
    const myModal = (modal === "login") ? loginModal : signupModal;

    return (
        <div className="modal-background" onClick={closeModal}>
            {myModal}
        </div>
    );
}

// so we have modal slice of state and to dispatch closeModal
export default connect(mapStateToProps, mapDispatchToProps)(Modal);