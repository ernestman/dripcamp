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
    // let component;
    // switch (modal) {
    //     case "login":
    //         component = <LoginContainer />;
    //         break;
    //     case "signup":
    //         component = <SignupContainer />;
    //         break;
    //     default:
    //         return null;
    // }

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
    const myModal = (modal === "login") ? loginModal : signupModal;

    // *** only for now ***
    // if login container do this modal as child
    // else do signup container modal as child

    // then have 2 different sizes for each modal child in css
    // <div className="modal-child" onClick={e => e.stopPropagation()}>
    //     {component}
    // </div>


    return (
        <div className="modal-background" onClick={closeModal}>
            {myModal}
        </div>
    );
}

// so we have modal slice of state and to dispatch closeModal
export default connect(mapStateToProps, mapDispatchToProps)(Modal);