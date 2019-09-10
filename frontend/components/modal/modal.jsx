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
    let component;
    switch (modal) {
        case "login":
            component = <LoginContainer />;
            break;
        case "signup":
            component = <SignupContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className = "modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

// so we have modal slice of state and to dispatch closeModal
export default connect(mapStateToProps, mapDispatchToProps)(Modal);