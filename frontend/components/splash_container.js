import {connect} from "react-redux";
import Splash from "./splash";

import {openModal} from "../actions/modal_actions";

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);