import {connect} from "react-redux";
import Splash from "./splash";

import {openModal} from "../actions/modal_actions";
import {singleFilter} from "../actions/filter_actions";

const mapStateToProps = (state) => {
    return {
        currentUserId: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        singleFilter: (filter) => dispatch(singleFilter(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);