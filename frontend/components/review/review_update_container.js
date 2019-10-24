import {connect} from "react-redux";
import ReviewUpdate from "./review_update";

import {updateReview} from "../../actions/review_actions";
import {closeModal} from "../../actions/modal_actions";

const mapStateToProps = (state) => {
    const reviewId = state.ui.modal.data;
    return {
        review: state.entities.reviews[reviewId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateReview: (review) => dispatch(updateReview(review)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewUpdate);