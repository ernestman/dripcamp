import React from "react";
import {closeModal} from "../../actions/modal_actions";
import LoginContainer from "../login/login_container";
import SignupContainer from "../signup/signup_container";
import ReviewUpdateContainer from "../review/review_update_container";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        modal: state.ui.modal.modal
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
            <LoginContainer />
        </div>
    );

    const signupModal = (
        <div className="signup-modal" onClick={e => e.stopPropagation()}>
            <SignupContainer />
        </div>
    );

    const reviewUpdateModal = (
        <div className="review-modal" onClick={e => e.stopPropagation()}>
            <ReviewUpdateContainer />
        </div>
    )
    
    // const myModal = (modal === "login") ? loginModal : signupModal;

    let myModal;
    if (modal === "login") myModal = loginModal;
    if (modal === "signup") myModal = signupModal;
    if (modal === "review") myModal = reviewUpdateModal;


    return (
        <div className="modal-background" onClick={closeModal}>
            {myModal}
        </div>
    );
}

// so we have modal slice of state and to dispatch closeModal
export default connect(mapStateToProps, mapDispatchToProps)(Modal);